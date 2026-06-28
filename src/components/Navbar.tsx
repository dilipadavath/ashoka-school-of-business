import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import badge from "@/assets/badge.webp";

const megaMenuItems = {
  "Explore ASB": {
    sections: [
      {
        heading: "About",
        links: [
          { label: "About", path: "/about" },
          {
            label: "Founder and Chairman Message",
            path: "/founder-and-chairman-message",
          },
          { label: "Director's Message", path: "/directors-message" },
        ],
      },
      {
        heading: "Councils",
        links: [
          {
            label: "Governing Council Members",
            path: "/governing-council-members",
          },
          {
            label: "Academic Council Members",
            path: "/academic-council-members",
          },
          { label: "Our Faculty", path: "/our-faculty" },
        ],
      },
      {
        heading: "Institutional",
        links: [
          {
            label: "Research and Consulting",
            path: "/research-and-consulting",
          },
          { label: "Infrastructure", path: "/infrastructure" },
        ],
      },
    ],
  },
  Grievance: {
    sections: [
      {
        heading: "",
        links: [
          {
            label: "Grievance Redressal Committee",
            path: "/grievance-redressal-committee",
          },
          {
            label: "Internal Complaint Committee",
            path: "/internal-complaint-committee",
          },
          {
            label: "Internal Quality Assurance Cell",
            path: "/internal-quality-assurance-cell",
          },
          { label: "Women Protection Cell", path: "/women-protection-cell" },
        ],
      },
      {
        heading: "",
        links: [
          {
            label: "Anti-Discrimination Committee",
            path: "/anti-discrimination-committee",
          },
          { label: "Anti Ragging Committee", path: "/anti-ragging-committee" },
        ],
      },
    ],
  },
};

type MegaMenuKey = keyof typeof megaMenuItems;
type NavLinkItem = { label: string; path: string };
type NavWithChildrenItem = { label: string; children: NavLinkItem[] };
type NavMegaItem = { label: string; megaMenu: true; megaKey: MegaMenuKey };
type NavItem = NavLinkItem | NavWithChildrenItem | NavMegaItem;

const programsChildren: NavLinkItem[] = [
  { label: "PGDM – Securities Market", path: "/qms" },
  {
    label: "PGDM – Artificial Intelligence & Data Science",
    path: "/pgdm-artificial-intelligence-data-science-colleges-in-hyderabad",
  },
  {
    label: "PGDM – Marketing with Analytics",
    path: "/pgdm-marketing-business-analytics-colleges-in-hyderabad",
  },
  {
    label: "PGDM – Finance with Fintech",
    path: "/pgdm-mba-finance-with-fintech-colleges-in-hyderabad",
  },
  {
    label: "PGDM – HR with HR Analytics",
    path: "/pgdm-hr-management-with-analytics-courses-in-hyderabad",
  },
  {
    label: "PGDM – Agri-Business Management",
    path: "/pgdm-agri-business-management",
  },
];

// Top bar links
const topBarLinks = [
  { label: "Campus Visit", path: "/infrastructure" },
  { label: "Blog", path: "/blog" },
  { label: "Careers", path: "/faculty-openings" },
  { label: "News & Events", path: "/news-events" },
  { label: "Contact Us", path: "/contact-us" },
];

// Main nav items (bottom row)
const mainNavItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Explore ASB", megaMenu: true, megaKey: "Explore ASB" },
  {
    label: "Why ASB",
    children: [
      { label: "GIP", path: "/gip" },
      { label: "EIR", path: "/eir" },
      { label: "REACH", path: "/reach" },
      { label: "PATH", path: "/path" },
      { label: "Infosys Springboard", path: "/infosys-springboard" },
      { label: "CESIM", path: "/cesim" },
      { label: "AAROHAN-2025", path: "/aarohan-2025" },
      { label: "Life at ASB", path: "/life-at-asb" },
    ],
  },
  {
    label: "Programs",
    children: programsChildren,
  },
  { label: "BBA-ACMB", path: "https://acbm.org.in/" },
  { label: "Placements", path: "/best-placements-mba-colleges-in-hyderabad" },
  { label: "Admissions", path: "/admissions-for-mba-in-hyderabad" },
  { label: "Grievance", megaMenu: true, megaKey: "Grievance" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const currentPath = location.pathname;

  const normalizePath = (path: string) => path.replace(/\/+$/, "") || "/";
  const isExternalPath = (path: string) => /^https?:\/\//i.test(path);

  const isPathActive = (path: string) => {
    if (isExternalPath(path)) return false;
    const target = normalizePath(path);
    const current = normalizePath(currentPath);
    if (target === "/") return current === "/";
    return current === target || current.startsWith(`${target}/`);
  };

  const isParentItemActive = (item: NavItem) => {
    if ("path" in item) return isPathActive(item.path);
    if ("children" in item)
      return item.children.some((child) => isPathActive(child.path));
    if ("megaMenu" in item) {
      const sections = megaMenuItems[item.megaKey]?.sections ?? [];
      return sections.some((section) =>
        section.links.some((link) =>
          isPathActive(link.path.split("#")[0] || link.path),
        ),
      );
    }
    return false;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <>
      {/* TOP BAR */}
      <div className="static h-[2rem] bg-foreground text-background">
        <div className="container-wide flex h-full items-center justify-between px-4">
          <div className="hidden md:flex items-center gap-1">
            {topBarLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="px-2 text-[10px] font-medium uppercase tracking-wider text-background/80 hover:text-background transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="ml-auto inline-flex h-5 items-center gap-1.5 rounded-full border border-background/20 bg-background/10 px-2">
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] text-background/85">
              Approved by AICTE
            </span>
            <img
              src={badge}
              alt="Approved by AICTE"
              className="h-4 w-auto rounded-full object-contain sm:h-5"
            />
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 bg-background transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}
      >
        {/* MAIN NAV BAR */}
        <div
          className={`bg-background border-b border-border transition-all duration-300 ${scrolled ? "py-1" : "py-3"}`}
        >
          <div className="container-wide flex items-center justify-between px-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-0 shrink-0">
              <img
                src={logo}
                alt="Ashoka School of Business"
                className={`w-auto transition-all duration-300 ${scrolled ? "h-10" : "h-12"}`}
              />
              <div className="hidden sm:block">
                <p className="font-display font-bold text-sm leading-tight text-foreground">
                  Ashoka School
                </p>
                <p className="font-display font-bold text-sm leading-tight text-primary">
                  of Business
                </p>
              </div>
            </Link>

            {/* Desktop Main Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {mainNavItems.map((item) =>
                "megaMenu" in item ? (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors ${
                        isParentItemActive(item)
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                    {openDropdown === item.label && (
                      <div
                        className={`absolute top-full bg-background border border-border rounded-xl shadow-xl py-6 px-8 ${
                          item.megaKey === "Grievance"
                            ? "right-0 min-w-[620px]"
                            : "left-1/2 -translate-x-1/2 min-w-[600px]"
                        }`}
                      >
                        <div
                          className={`grid gap-6 ${item.megaKey === "Grievance" ? "grid-cols-2" : "grid-cols-3"}`}
                        >
                          {megaMenuItems[item.megaKey]?.sections.map(
                            (section) => (
                              <div key={section.heading}>
                                {section.heading ? (
                                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
                                    {section.heading}
                                  </p>
                                ) : null}
                                <div className="space-y-1">
                                  {section.links.map((link) => (
                                    <Link
                                      key={link.label}
                                      to={link.path}
                                      className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                                        isPathActive(
                                          link.path.split("#")[0] || link.path,
                                        )
                                          ? "bg-secondary text-primary"
                                          : "text-foreground hover:bg-secondary hover:text-primary"
                                      }`}
                                    >
                                      {link.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : "children" in item ? (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors ${
                        isParentItemActive(item)
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                    {openDropdown === item.label && (
                      <div
                        className={`absolute top-full bg-background border border-border rounded-lg shadow-lg py-2 min-w-[260px] ${
                          item.label === "Grievance" ? "right-0" : "left-0"
                        }`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              isPathActive(child.path)
                                ? "bg-secondary text-primary"
                                : "text-foreground hover:bg-secondary hover:text-primary"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : isExternalPath(item.path) ? (
                  <a
                    key={item.label}
                    href={item.path}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`px-3 py-2 text-sm font-semibold transition-colors ${
                      isPathActive(item.path)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
            {/* Mobile top links */}
            <div className="flex flex-wrap gap-1 px-4 py-3 border-b border-border bg-secondary">
              {topBarLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {mainNavItems.map((item) =>
              "megaMenu" in item ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label,
                      )
                    }
                    className={`flex items-center justify-between w-full px-6 py-3 text-sm font-medium ${
                      isParentItemActive(item)
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="bg-secondary px-6 py-4 space-y-4">
                      {megaMenuItems[item.megaKey]?.sections.map((section) => (
                        <div key={section.heading}>
                          {section.heading ? (
                            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                              {section.heading}
                            </p>
                          ) : null}
                          {section.links.map((link) => (
                            <Link
                              key={link.label}
                              to={link.path}
                              className={`block px-4 py-2 text-sm ${
                                isPathActive(
                                  link.path.split("#")[0] || link.path,
                                )
                                  ? "text-primary"
                                  : "text-muted-foreground hover:text-primary"
                              }`}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : "children" in item ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label,
                      )
                    }
                    className={`flex items-center justify-between w-full px-6 py-3 text-sm font-medium ${
                      isParentItemActive(item)
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="bg-secondary">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className={`block px-10 py-2.5 text-sm ${
                            isPathActive(child.path)
                              ? "text-primary"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : isExternalPath(item.path) ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                  className="block px-6 py-3 text-sm font-medium text-foreground hover:text-primary"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`block px-6 py-3 text-sm font-medium ${
                    isPathActive(item.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="p-4">
              <div className="flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/80">
                  Approved by AICTE
                </span>
                <img
                  src={badge}
                  alt="Approved by AICTE"
                  className="h-8 w-auto rounded-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
