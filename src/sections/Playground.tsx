import { useEffect, useMemo, useRef, type PointerEvent } from "react";

const columns = 16;
const rows = 9;

interface DotPosition {
  column: number;
  row: number;
}

export function Playground() {
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const frameRef = useRef(0);
  const pointerRef = useRef({ x: 0, y: 0 });
  const rectRef = useRef<DOMRect | null>(null);

  const dots = useMemo<DotPosition[]>(
    () =>
      Array.from({ length: columns * rows }, (_, index) => ({
        column: index % columns,
        row: Math.floor(index / columns),
      })),
    [],
  );

  useEffect(() => () => window.cancelAnimationFrame(frameRef.current), []);

  const renderDots = () => {
    const rect = rectRef.current;
    if (!rect) return;

    dotRefs.current.forEach((dot, index) => {
      if (!dot) return;
      const position = dots[index];
      if (!position) return;

      const dotX = rect.left + ((position.column + 0.5) / columns) * rect.width;
      const dotY = rect.top + ((position.row + 0.5) / rows) * rect.height;
      const deltaX = dotX - pointerRef.current.x;
      const deltaY = dotY - pointerRef.current.y;
      const distance = Math.hypot(deltaX, deltaY);
      const force = Math.max(0, 1 - distance / 170);
      const angle = Math.atan2(deltaY, deltaX);
      const translateX = Math.cos(angle) * force * 60;
      const translateY = Math.sin(angle) * force * 60;

      dot.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${1 + force * 1.7})`;
    });

    frameRef.current = 0;
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    pointerRef.current = { x: event.clientX, y: event.clientY };
    rectRef.current = event.currentTarget.getBoundingClientRect();
    if (!frameRef.current) frameRef.current = window.requestAnimationFrame(renderDots);
  };

  const handlePointerLeave = () => {
    window.cancelAnimationFrame(frameRef.current);
    frameRef.current = 0;
    dotRefs.current.forEach((dot) => {
      if (dot) dot.style.transform = "translate3d(0, 0, 0) scale(1)";
    });
  };

  return (
    <section
      className="playground dark"
      id="playground"
      aria-labelledby="playground-title"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}>
      <div className="dot-field" aria-hidden="true">
        {dots.map((dot, index) => (
          <span
            className="dot"
            key={`${dot.column}-${dot.row}`}
            ref={(element) => {
              dotRefs.current[index] = element;
            }}
            style={{
              left: `${((dot.column + 0.5) / columns) * 100}%`,
              top: `${((dot.row + 0.5) / rows) * 100}%`,
            }}
          />
        ))}
      </div>
      <div className="playground-content">
        <h2 id="playground-title">
          Break the
          <br />
          interface.
        </h2>
        <p>Move your cursor. The system reacts.</p>
      </div>
    </section>
  );
}
