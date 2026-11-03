import { Github } from 'lucide-react';

const baseClass =
  'inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA]';

export default function LiveProjectButton({ href }: { href?: string }) {
  if (!href) {
    return (
      <span className={`${baseClass} cursor-not-allowed opacity-40`} title="GitHub link coming soon">
        <Github size={18} />
        Coming Soon
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${baseClass} transition-colors duration-200 hover:bg-[#D7E2EA]/10`}
    >
      <Github size={18} />
      GitHub
    </a>
  );
}
