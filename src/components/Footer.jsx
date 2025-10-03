import { Instagram, Linkedin, Youtube } from "lucide-react"

const footerLinks = [
  {
    heading: "Marketplace",
    links: ["Luxury Residences", "Verified Agents", "Sell Your Home", "Partner Developers"],
  },
  {
    heading: "Resources",
    links: ["Pricing Intelligence", "Market Reports", "Resident Stories", "FAQ"],
  },
  {
    heading: "Company",
    links: ["About Estate Orbit", "Press", "Careers", "Contact"],
  },
]

function Footer() {
  return (
    <footer className="bg-forest text-sand">
      <div className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-3 rounded-pill bg-shell/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-shell">
              Estate Orbit
            </span>
            <h3 className="font-serif text-3xl text-shell">Design-led homes mapped with machine intelligence.</h3>
            <p className="text-sm text-sand/80">
              Inspired by the precision of automotive exchanges like PakWheels, reimagined to bring clarity and wonder
              to global property journeys.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand/30 text-shell transition hover:bg-shell/10"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand/30 text-shell transition hover:bg-shell/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand/30 text-shell transition hover:bg-shell/10"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {footerLinks.map((column) => (
              <div key={column.heading} className="space-y-3">
                <h4 className="text-sm font-semibold text-shell/90">{column.heading}</h4>
                <ul className="space-y-2 text-sm text-sand/80">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-shell">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t text-center border-sand/20 pt-6 text-xs text-sand/70">
          © {new Date().getFullYear()} Estate Orbit. Dedicated to Creativity, Culture & Growth | Zain-Ejaz
        </div>
      </div>
    </footer>
  )
}

export default Footer
