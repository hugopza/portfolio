export function TextArrow({ className = "" }: { className?: string }) {
  return (
    <span className={`text-arrow ${className}`.trim()} aria-hidden="true">
      {"\u2197\uFE0E"}
    </span>
  );
}
