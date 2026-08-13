export function ImagePlaceholder({
  label,
  className = "",
  dark = false,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center text-center text-xs uppercase tracking-widest ${
        dark
          ? "bg-gradient-to-br from-white/10 to-white/5 text-white/40"
          : "bg-gradient-to-br from-ink/10 to-ink/5 text-ink/40"
      } ${className}`}
    >
      {label}
    </div>
  );
}
