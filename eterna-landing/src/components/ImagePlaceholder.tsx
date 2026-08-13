export function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-ink/10 to-ink/5 text-center text-xs uppercase tracking-widest text-ink/40 ${className}`}
    >
      {label}
    </div>
  );
}
