import { useEffect, useRef } from "react";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const orbWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const orb = orbRef.current;
    const orbWrap = orbWrapRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!title || !orb || !orbWrap || reducedMotion) return;

    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let pointerFrame = 0;
    let scrollFrame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const renderPointer = () => {
      orb.style.translate = `${pointerX}px ${pointerY}px`;
      pointerFrame = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 14;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 14;
      if (!pointerFrame) pointerFrame = window.requestAnimationFrame(renderPointer);
    };

    const renderScroll = () => {
      const scrollY = window.scrollY;
      title.style.transform = `translate3d(0, ${scrollY * 0.055}px, 0)`;
      orbWrap.style.transform = `translate3d(0, ${scrollY * 0.08}px, 0)`;
      scrollFrame = 0;
    };

    const handleScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(renderScroll);
    };

    if (hasFinePointer) document.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(pointerFrame);
      window.cancelAnimationFrame(scrollFrame);
    };
  }, []);

  return (
    <header className="hero" id="top">
      <div className="orb-wrap" ref={orbWrapRef} aria-hidden="true">
        <div className="orb" ref={orbRef} />
      </div>
      <div className="hero-grid">
        <div>
          <div className="eyebrow">Hugo Pérez · Software Engineer · Girona</div>
          <h1 ref={titleRef}>
            Building
            <br />
            <span className="accent">AI</span> products
            <br />
            &amp; digital
            <br />
            systems.
          </h1>
        </div>
      </div>

      <div className="hero-footer">
        <div className="scroll-cue">
          <span aria-hidden="true" /> Scroll to explore
        </div>
        <div>Available for selected opportunities</div>
      </div>
    </header>
  );
}
