import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  brand?: string;
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
};

const defaultNav: NavItem[] = [
  { label: "How Zschool Works", href: "/model" },
  { label: "Courses", href: "/courses" },
  { label: "Technology", href: "/technology" },
  { label: "Trust", href: "/trust" },
  { label: "For Universities", href: "/for-universities" },
];

export default function Header({
  brand = "Zschool",
  navItems = defaultNav,
  ctaLabel = "Schedule a Conversation",
  ctaHref = "/contact",
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
            Z
          </span>
          {brand}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={ctaHref}
          className="inline-flex items-center rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700"
        >
          {ctaLabel}
        </Link>
      </div>
    </header>
  );
}
