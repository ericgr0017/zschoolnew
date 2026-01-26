import Link from "next/link";

const navItems = [
  { href: "/courses", label: "Courses" },
  { href: "/technology", label: "Technology" },
  { href: "/model", label: "Model" },
  { href: "/for-universities", label: "For Universities" },
  { href: "/for-organizations", label: "For Organizations" },
  { href: "/for-executives", label: "For Executives" },
  { href: "/trust", label: "Trust" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="text-lg font-semibold text-slate-900">
              Zschool
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 md:hidden"
            >
              Schedule a conversation
            </Link>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-slate-600">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="hidden items-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 md:inline-flex"
            >
              Schedule a conversation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
