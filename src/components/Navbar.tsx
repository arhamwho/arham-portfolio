import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

export interface NavLinkItem {
  label: string;
  to: string;
}

const linkClass =
  'text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]';

export default function Navbar({ links }: { links: NavLinkItem[] }) {
  return (
    <FadeIn as="nav" delay={0} y={-20} className="relative z-20 flex justify-between px-6 pt-6 md:px-10 md:pt-8">
      {links.map(({ label, to }) =>
        to.startsWith('#') ? (
          <a key={label} href={to} className={linkClass}>
            {label}
          </a>
        ) : (
          <Link key={label} to={to} className={linkClass}>
            {label}
          </Link>
        ),
      )}
    </FadeIn>
  );
}
