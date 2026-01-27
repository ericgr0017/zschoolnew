import Link from "next/link";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Trust", href: "/trust" },
      { label: "Governance", href: "/governance" },
      { label: "Updates", href: "/updates" },
      { label: "Technology", href: "/technology" },
      { label: "How Zschool Works", href: "/model" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Universities", href: "/for-universities" },
      { label: "Organizations", href: "/for-organizations" },
      { label: "Executives", href: "/for-executives" },
      { label: "Courses", href: "/courses" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Schedule a Conversation", href: "/contact" },
      { label: "Advisory Board", href: "/advisory-board" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-white">Zschool</p>
            <p className="text-sm leading-6 text-slate-300">
              Human-governed, AI-powered education built with universities and
              advisory boards. Designed for credibility and real-world
              activation.
            </p>
            <p className="text-sm text-slate-400">hello@zschool.com</p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {column.title}
              </p>
              <div className="flex flex-col gap-2 text-sm text-slate-300">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-slate-800 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Zschool. All rights reserved.</span>
          <span>Governance-led education for real organizations.</span>
        </div>
      </div>
    </footer>
  );
}
