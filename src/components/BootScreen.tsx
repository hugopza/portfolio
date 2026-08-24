import { useEffect, useRef, useState } from "react";

function userPrefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function BootScreen() {
  const [progress, setProgress] = useState(() => (userPrefersReducedMotion() ? 100 : 0));
  const [hidden, setHidden] = useState(userPrefersReducedMotion);
  const hideTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (hidden) return;

    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(100, current + Math.floor(Math.random() * 15) + 5);

        if (next === 100) {
          window.clearInterval(progressTimer);
          hideTimer.current = window.setTimeout(() => setHidden(true), 180);
        }

        return next;
      });
    }, 85);

    return () => {
      window.clearInterval(progressTimer);
      if (hideTimer.current !== undefined) window.clearTimeout(hideTimer.current);
    };
  }, [hidden]);

  return (
    <div className={`boot${hidden ? " hidden" : ""}`} aria-hidden={hidden}>
      <div className="boot-inner">
        <div className="boot-row">
          <span>INITIALIZING PORTFOLIO</span>
          <span>{progress}%</span>
        </div>
        <div
          className="boot-bar"
          role="progressbar"
          aria-label="Initializing portfolio"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}>
          <div className="boot-progress" />
        </div>
      </div>
    </div>
  );
}
