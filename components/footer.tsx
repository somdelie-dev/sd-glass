import { Building2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-sky-600 text-white shadow-lg shadow-sky-200">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-black tracking-tight text-slate-900">
                  SD GLASS AND ALUMINIUM
                </p>
                <p className="text-sm text-slate-500">
                  Beautiful glass & aluminium solutions
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Professional glass and aluminium services for homes, offices, and
              commercial spaces. Quality workmanship you can trust.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-900">
              Navigation
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-sky-700"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-900">
              Services
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <p>Aluminium Windows</p>
              <p>Glass Installations</p>
              <p>Sliding Doors</p>
              <p>Repairs & Maintenance</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-900">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <a
                href="tel:0681791378"
                className="block font-semibold text-sky-700 hover:text-sky-800"
              >
                068 179 1378
              </a>
              <p>SD GLASS AND ALUMINIUM</p>
              <p>Call or WhatsApp for enquiries</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} SD GLASS AND ALUMINIUM. All rights reserved.</p>
          <a
            href="#home"
            className="font-semibold text-sky-700 hover:text-sky-800"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
