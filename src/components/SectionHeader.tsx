import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: ReactNode;
  meta: string;
}

export function SectionHeader({ title, meta }: SectionHeaderProps) {
  return (
    <div className="section-head reveal">
      <h2>{title}</h2>
      <div className="num">{meta}</div>
    </div>
  );
}
