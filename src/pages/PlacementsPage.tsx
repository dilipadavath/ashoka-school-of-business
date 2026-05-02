import SectionFadeIn from "@/components/SectionFadeIn";
import TextReveal from "@/components/TextReveal";
import HoverCardAnimation from "@/components/HoverCardAnimation";
import AnimatedButton from "@/components/AnimatedButton";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import placementsImg from "@/assets/placements.jpg";

const logoModules = import.meta.glob("../assets/logos/*.{png,webp,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const companyLogos = Object.entries(logoModules)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
  )
  .map(([, src]) => src);

const sections = [
  {
    title: "Why Choose the Top MBA Colleges in Hyderabad with Placements?",
    paragraphs: [
      "The top MBA colleges in Hyderabad with placements provide students with comprehensive training, industry exposure, and networking opportunities. These institutions collaborate with reputed organizations, offering students an excellent platform to launch their careers.",
      "One of the significant factors in choosing the right business school is its ability to bridge the gap between education and employment. The MBA colleges in Hyderabad with placements focus on skill development, interview preparation, and corporate training to enhance employability. Many students from reputed institutions secure positions in leading companies, making these colleges the preferred choice.",
    ],
  },
  {
    title: "Best Placement MBA Colleges in Hyderabad",
    paragraphs: [
      "Among the MBA colleges in Hyderabad, institutions that emphasize placements hold a competitive edge. The best placement MBA colleges in Hyderabad have a proven track record of placing students in top companies across various industries. They offer placement assistance, career counseling, and internship opportunities to ensure students gain practical experience before entering the job market.",
      "For those looking to specialize in business analytics, MBA business analytics colleges in Hyderabad provide tailored programs with industry-driven curricula. These colleges have tie-ups with corporate firms, top mba colleges in Hyderabad with placements, ensuring students are well-prepared to meet business challenges.",
    ],
  },
  {
    title: "Business Schools in Hyderabad with Placements",
    paragraphs: [
      "The demand for skilled management professionals continues to rise, making business schools in Hyderabad with placements an ideal choice. These institutions provide students with access to various industries, equipping them with relevant skills and real-world experience. A strong placement cell ensures that students get interview opportunities with leading companies.",
      "Additionally, for students interested in finance, MBA finance colleges in Hyderabad offer specialized programs in financial management, investment banking, and fintech, increasing their employability in the banking and corporate sectors.",
    ],
  },
  {
    title: "Best Business Schools in Hyderabad with Placements",
    paragraphs: [
      "When it comes to selecting the best business schools in Hyderabad with placements, factors such as faculty expertise, industry partnerships, and career opportunities play a vital role. These institutions focus on developing leadership skills and business acumen, ensuring that graduates are ready to take on managerial roles in reputed firms.",
      "For students seeking top-tier management education, MBA colleges in Hyderabad provide a structured learning environment, preparing them for the corporate world. These colleges offer high placement rates, helping students secure positions in multinational companies and emerging startups.",
    ],
  },
  {
    title: "Conclusion",
    paragraphs: [
      "Choosing the top MBA colleges in Hyderabad with placements, and best mba colleges in Hyderabad with placements ensures career success and financial stability. With growing competition in the job market, it is essential to select MBA colleges in Hyderabad with placements that offer industry-relevant courses and excellent recruitment support. The right institution will provide the skills, experience, and network needed to thrive in the corporate world, making it a worthwhile investment for aspiring business leaders.",
    ],
  },
];

const PlacementsPage = () => {
  const [activeSection, setActiveSection] = useState("placement-section-1");

  const logosScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLogosLeft, setCanScrollLogosLeft] = useState(false);
  const [canScrollLogosRight, setCanScrollLogosRight] = useState(true);
  const [isLogosHovered, setIsLogosHovered] = useState(false);

  const checkLogosScroll = () => {
    const el = logosScrollRef.current;
    if (!el) return;
    setCanScrollLogosLeft(el.scrollLeft > 10);
    setCanScrollLogosRight(
      el.scrollLeft < el.scrollWidth - el.clientWidth - 10,
    );
  };

  useEffect(() => {
    const el = logosScrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkLogosScroll);
    checkLogosScroll();
    return () => el.removeEventListener("scroll", checkLogosScroll);
  }, []);

  const scrollLogos = (dir: "left" | "right") => {
    const el = logosScrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "left" ? -(el.clientWidth * 0.8) : el.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  // Auto-scroll — logos
  useEffect(() => {
    if (isLogosHovered) return;
    const interval = setInterval(() => {
      const el = logosScrollRef.current;
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 200, behavior: "smooth" });
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [isLogosHovered]);

  return (
    <div className="pt-0 md:pt-20 bg-background overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground section-padding">
        <img
          src={placementsImg}
          alt="Placements at ASB"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/95 via-charcoal/85 to-primary/40" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        </div>

        <div className="container-wide relative z-10">
          <SectionFadeIn>
            <p className="text-lg text-primary font-semibold uppercase tracking-[0.28em] mb-4">
              Placements
            </p>
            <TextReveal variant="word" delay={0.1} stagger={0.08}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95]">
                RECRUITERS OF ASB
              </h1>
            </TextReveal>
            <p className="mt-5 text-primary-foreground/75 max-w-3xl text-base md:text-lg leading-relaxed">
              When choosing a management institute, placement opportunities play
              a crucial role in decision-making. Finding the top MBA colleges in
              Hyderabad with placements ensures a successful career path with
              lucrative job offers. Among the many MBA colleges in Hyderabad
              with placements, it is essential to select an institution that
              provides a strong industry connection, practical learning, and
              top-tier recruiters.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      {/* ── Recruiters / Company Logos ── */}
      <section className="section-padding bg-gradient-to-b from-secondary/35 to-background">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="rounded-[1.8rem] border border-border/60 bg-background px-4 py-8 md:px-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] overflow-hidden">
              <div className="text-center mb-6">
                <p className="text-primary font-semibold text-xs uppercase tracking-[0.22em] mb-2">
                  Recruiters
                </p>
                <h2 className="text-2xl md:text-3xl font-black text-foreground">
                  Companies That Hire From ASB
                </h2>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-14 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-14 bg-gradient-to-l from-background to-transparent z-10" />

                {canScrollLogosLeft && (
                  <button
                    onClick={() => scrollLogos("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Scroll recruiters left"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                )}
                {canScrollLogosRight && (
                  <button
                    onClick={() => scrollLogos("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Scroll recruiters right"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                )}

                <div
                  ref={logosScrollRef}
                  onMouseEnter={() => setIsLogosHovered(true)}
                  onMouseLeave={() => setIsLogosHovered(false)}
                  className="flex gap-4 overflow-x-auto pb-2 px-1 snap-x snap-mandatory scrollbar-hide"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {companyLogos.map((logo, i) => (
                    <div
                      key={`logo-${i}`}
                      className="snap-start shrink-0 h-16 w-32 md:h-20 md:w-40 rounded-xl border border-border/60 bg-white shadow-sm flex items-center justify-center p-3"
                    >
                      <img
                        src={logo}
                        alt={`Recruiter logo ${i + 1}`}
                        className="max-h-14 md:max-h-16 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid gap-8 lg:grid-cols-[280px_1fr] items-start">
          <SectionFadeIn>
            <aside className="lg:sticky lg:top-28 rounded-2xl border border-border bg-secondary/40 p-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-primary mb-4">
                On This Page
              </p>
              <div className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={section.title}
                    type="button"
                    onClick={() =>
                      setActiveSection(`placement-section-${index + 1}`)
                    }
                    className={`block w-full text-left rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
                      activeSection === `placement-section-${index + 1}`
                        ? "border-primary/60 bg-primary/10 text-primary"
                        : "border-border/70 bg-background text-foreground hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </aside>
          </SectionFadeIn>

          <SectionFadeIn>
            <Accordion
              type="single"
              collapsible
              value={activeSection}
              onValueChange={(value) => value && setActiveSection(value)}
              className="space-y-5"
            >
              {sections.map((section, index) => (
                <AccordionItem
                  key={section.title}
                  value={`placement-section-${index + 1}`}
                  className="rounded-[1.4rem] border border-border bg-background px-6 md:px-8 py-1 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
                >
                  <AccordionTrigger className="py-5 hover:no-underline">
                    <div className="flex items-start gap-4 text-left">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-black">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl md:text-[1.75rem] font-black text-foreground leading-tight">
                        {section.title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-0">
                    <div className="space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base md:text-[1.05rem] leading-relaxed text-muted-foreground"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </SectionFadeIn>
        </div>
      </section>
    </div>
  );
};

export default PlacementsPage;
