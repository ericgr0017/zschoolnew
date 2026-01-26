import Link from "next/link";

const footerLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/technology", label: "Technology" },
  { href: "/model", label: "Model" },
  { href: "/for-universities", label: "Universities" },
  { href: "/for-organizations", label: "Organizations" },
  { href: "/for-executives", label: "Executives" },
  { href: "/trust", label: "Trust" },
  { href: "/advisory-board", label: "Advisory Board" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-slate-900">Zschool</p>
            <p className="text-sm leading-6 text-slate-600">
              Human-governed, AI-powered education designed with universities,
              advisors, and learning experts to serve real organizations.
            </p>
            <div className="text-sm text-slate-600">
              <p>Email: hello@zschool.com</p>
              <p>Conversations: schedule via our contact page.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Zschool. All rights reserved.</span>
          <span>Human governance, responsible AI, real-world activation.</span>
        </div>
      </div>
    </footer>
  );
}
