import { LoaderCircle } from 'lucide-react';

export default function IconButton({
  icon: Icon = LoaderCircle,
  label,
  className = '',
  ...props
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${className}`}
      {...props}
    >
      <Icon aria-hidden="true" size={18} strokeWidth={2} />
    </button>
  );
}
