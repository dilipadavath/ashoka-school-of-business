import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import badge from "@/assets/badge.webp";

const Footer = () => (
  <footer className="bg-charcoal text-secondary">
    <div className="container-wide section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.85fr_1.25fr_1fr] gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Ashoka School of Business</h3>
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-secondary/15 bg-secondary/5 px-3 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/75">
              Approved by AICTE
            </span>
            <img
              src={badge}
              alt="Approved by badge"
              className="h-10 w-auto rounded-full object-contain"
            />
          </div>
          <div className="space-y-3 text-sm text-secondary/70">
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              Malkapur, Yadadri Bhuvanagiri, Telangana 508252
            </p>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a
                href="mailto:info@theasb.in"
                className="hover:text-primary transition-colors"
              >
                info@theasb.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a
                href="tel:+917207939930"
                className="hover:text-primary transition-colors"
              >
                +91 72079 39930
              </a>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col items-start gap-2 text-sm text-secondary/70">
            {[
              ["Home", "/"],
              ["BBA Program", "/bba"],
              ["BBA-ACMB", "https://sample.bbaahoska.wimira.com/"],
              ["PGDM Program", "/pgdm"],
              ["Placements", "/best-placements-mba-colleges-in-hyderabad"],
              ["Contact Us", "/contact-us"],
            ].map(([label, path]) =>
              path.startsWith("http") ? (
                <a
                  key={label}
                  href={path}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex hover:text-primary transition-colors"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  to={path}
                  className="inline-flex hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              ),
            )}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">PGDM</h4>
          <div className="space-y-2 text-sm text-secondary/70">
            {[
              ["PGDM – Marketing with Analytics", "/pgdm/marketing-analytics"],
              ["PGDM – Finance with Fintech", "/pgdm/finance-fintech"],
              ["PGDM – HR with HR Analytics", "/pgdm/hr-analytics"],
              ["PGDM – Agri-Business Management", "/pgdm/agri-business"],
              [
                "PGDM – Artificial Intelligence & Data Science",
                "/pgdm/ai-data-science",
              ],
              ["PGDM – Securities Market", "/pgdm/securities-market"],
            ].map(([label, path]) => (
              <Link
                key={label}
                to={path}
                className="block hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Postal Address</h4>
          <p className="text-sm text-secondary/70 mb-4">
            Malkapur Village, Choutuppal Mandal, Nalgonda District, Telangana
            508252, India
          </p>
          <div className="flex gap-3">
            {[
              {
                Icon: Facebook,
                href: "https://www.facebook.com/AshokaSchoolofBusiness",
                label: "Facebook",
              },
              {
                Icon: Instagram,
                href: "https://www.instagram.com/asb_ashokaschoolofbusiness/",
                label: "Instagram",
              },
              { Icon: Twitter, href: "https://x.com/AsbAshoka", label: "X" },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/company/asb-ashoka-school-of-business/",
                label: "LinkedIn",
              },
              {
                Icon: Youtube,
                href: "https://www.youtube.com/@asbashokaschoolofbusiness5035",
                label: "YouTube",
              },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-secondary/10 py-6 text-center text-sm text-secondary/50">
      Copyright © 2026 Ashoka School of Business. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
