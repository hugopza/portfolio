import { useEffect, useRef } from "react";

const interactiveSelector = ".hoverable, a, button";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!cursor || !hasFinePointer || reducedMotion) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add("visible");
    };

    const handlePointerOver = (event: PointerEvent) => {
      if (event.target instanceof Element && event.target.closest(interactiveSelector)) {
        cursor.classList.add("big");
      }
    };

    const handlePointerOut = (event: PointerEvent) => {
      const relatedElement = event.relatedTarget instanceof Element ? event.relatedTarget : null;
      if (!relatedElement?.closest(interactiveSelector)) cursor.classList.remove("big");
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.addEventListener("pointerout", handlePointerOut, { passive: true });
    frame = window.requestAnimationFrame(render);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="cursor" ref={cursorRef} aria-hidden="true" />;
}
