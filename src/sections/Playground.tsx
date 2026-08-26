import { useCallback, useEffect, useMemo, useRef, type PointerEvent } from "react";

const columns = 16;
const rows = 9;
const radius = 4;
const minimumDistance = radius * 2 + 2;
const dragRadius = 38;
const frameDuration = 1000 / 60;

interface Particle {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
}

interface PointerSample {
  x: number;
  y: number;
  time: number;
}

function constrain(value: number, lowerBound: number, upperBound: number) {
  return Math.min(upperBound, Math.max(lowerBound, value));
}

export function Playground() {
  const playgroundRef = useRef<HTMLElement | null>(null);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef(0);
  const boundsRef = useRef({ width: 0, height: 0 });
  const dragIndexRef = useRef<number | null>(null);
  const activePointerRef = useRef<number | null>(null);
  const pointerSampleRef = useRef<PointerSample | null>(null);

  const dots = useMemo(() => Array.from({ length: columns * rows }), []);

  const renderParticles = useCallback(() => {
    dotRefs.current.forEach((dot, index) => {
      const particle = particlesRef.current[index];
      if (!dot || !particle) return;

      dot.style.transform = `translate3d(${particle.x - radius}px, ${particle.y - radius}px, 0)`;
    });
  }, []);

  const initializeParticles = useCallback(() => {
    const bounds = playgroundRef.current?.getBoundingClientRect();
    if (!bounds) return;

    boundsRef.current = { width: bounds.width, height: bounds.height };
    particlesRef.current = dots.map((_, index) => {
      const column = index % columns;
      const row = Math.floor(index / columns);

      return {
        x: ((column + 0.5) / columns) * bounds.width,
        y: ((row + 0.5) / rows) * bounds.height,
        velocityX: 0,
        velocityY: 0,
      };
    });
    renderParticles();
  }, [dots, renderParticles]);

  const stepPhysics = useCallback(() => {
    const particles = particlesRef.current;
    const { width, height } = boundsRef.current;
    const draggedIndex = dragIndexRef.current;

    particles.forEach((particle, index) => {
      if (index === draggedIndex) return;

      particle.x += particle.velocityX;
      particle.y += particle.velocityY;
      particle.velocityX *= 0.992;
      particle.velocityY *= 0.992;

      if (particle.x < radius || particle.x > width - radius) {
        particle.x = constrain(particle.x, radius, width - radius);
        particle.velocityX *= -0.82;
      }

      if (particle.y < radius || particle.y > height - radius) {
        particle.y = constrain(particle.y, radius, height - radius);
        particle.velocityY *= -0.82;
      }
    });

    for (let firstIndex = 0; firstIndex < particles.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < particles.length; secondIndex += 1) {
        const first = particles[firstIndex];
        const second = particles[secondIndex];
        const deltaX = second.x - first.x;
        const deltaY = second.y - first.y;
        const distance = Math.hypot(deltaX, deltaY) || 0.001;

        if (distance >= minimumDistance) continue;

        const normalX = deltaX / distance;
        const normalY = deltaY / distance;
        const overlap = minimumDistance - distance;
        const firstIsDragged = firstIndex === draggedIndex;
        const secondIsDragged = secondIndex === draggedIndex;
        const correction = overlap / (firstIsDragged || secondIsDragged ? 1 : 2);

        if (!firstIsDragged) {
          first.x -= normalX * correction;
          first.y -= normalY * correction;
        }

        if (!secondIsDragged) {
          second.x += normalX * correction;
          second.y += normalY * correction;
        }

        const relativeVelocity =
          (second.velocityX - first.velocityX) * normalX + (second.velocityY - first.velocityY) * normalY;
        if (relativeVelocity >= 0) continue;

        const impulse = (-(1 + 0.9) * relativeVelocity) / (firstIsDragged || secondIsDragged ? 1 : 2);

        if (!firstIsDragged) {
          first.velocityX -= impulse * normalX;
          first.velocityY -= impulse * normalY;
        }

        if (!secondIsDragged) {
          second.velocityX += impulse * normalX;
          second.velocityY += impulse * normalY;
        }
      }
    }
  }, []);

  useEffect(() => {
    initializeParticles();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const resizeObserver = new ResizeObserver(initializeParticles);
    if (playgroundRef.current) resizeObserver.observe(playgroundRef.current);

    let isVisible = true;
    const tick = () => {
      if (!isVisible) {
        frameRef.current = 0;
        return;
      }

      stepPhysics();
      renderParticles();
      frameRef.current = window.requestAnimationFrame(tick);
    };

    const startSimulation = () => {
      if (!frameRef.current) frameRef.current = window.requestAnimationFrame(tick);
    };

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry?.isIntersecting ?? false;
      if (isVisible) startSimulation();
    });

    if (playgroundRef.current) visibilityObserver.observe(playgroundRef.current);
    startSimulation();

    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.cancelAnimationFrame(frameRef.current);
    };
  }, [initializeParticles, renderParticles, stepPhysics]);

  const getLocalPoint = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
  };

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    const point = getLocalPoint(event);
    const closest = particlesRef.current.reduce(
      (closestParticle, particle, index) => {
        const distance = Math.hypot(particle.x - point.x, particle.y - point.y);
        return distance < closestParticle.distance ? { distance, index } : closestParticle;
      },
      { distance: Number.POSITIVE_INFINITY, index: -1 },
    );

    if (closest.distance > dragRadius || closest.index < 0) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    dragIndexRef.current = closest.index;
    activePointerRef.current = event.pointerId;
    pointerSampleRef.current = { ...point, time: performance.now() };
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (activePointerRef.current !== event.pointerId || dragIndexRef.current === null) return;

    const point = getLocalPoint(event);
    const particle = particlesRef.current[dragIndexRef.current];
    const previousSample = pointerSampleRef.current;
    const now = performance.now();

    if (!particle || !previousSample) return;

    particle.x = constrain(point.x, radius, boundsRef.current.width - radius);
    particle.y = constrain(point.y, radius, boundsRef.current.height - radius);

    const elapsed = Math.max(now - previousSample.time, 1);
    particle.velocityX = constrain((point.x - previousSample.x) / (elapsed / frameDuration), -28, 28);
    particle.velocityY = constrain((point.y - previousSample.y) / (elapsed / frameDuration), -28, 28);
    pointerSampleRef.current = { ...point, time: now };
  };

  const releaseParticle = (event: PointerEvent<HTMLElement>) => {
    if (activePointerRef.current !== event.pointerId) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
    dragIndexRef.current = null;
    activePointerRef.current = null;
    pointerSampleRef.current = null;
  };

  return (
    <section
      className="playground dark"
      id="playground"
      aria-labelledby="playground-title"
      ref={playgroundRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={releaseParticle}
      onPointerCancel={releaseParticle}>
      <div className="dot-field" aria-hidden="true">
        {dots.map((_, index) => (
          <span
            className="dot"
            key={index}
            ref={(element) => {
              dotRefs.current[index] = element;
            }}
          />
        ))}
      </div>
      <div className="playground-content">
        <h2 id="playground-title">
          <span className="playground-pointer-copy">
            Break the
            <br />
            interface.
          </span>
          <span className="playground-touch-copy">
            Touch
            <br />
            physics.
          </span>
        </h2>
        <p>
          <span className="playground-pointer-copy">Drag a ball. Let it fly.</span>
          <span className="playground-touch-copy">Drag a ball. Let it fly.</span>
        </p>
      </div>
    </section>
  );
}
