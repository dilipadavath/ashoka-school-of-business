import { Link } from "react-router-dom";
import SectionFadeIn from "@/components/SectionFadeIn";
import aboutVideoOne from "@/assets/Sequence 03.mp4";
import campusImg from "@/assets/campus-life.jpg";
import campusHub from "@/assets/campus-hub.png";
import globalImmersionImg from "@/assets/global-immersion.jpg";
import leadershipImg from "@/assets/leadership.jpg";

// Route mapping for items with dedicated pages
const routeMap: Record<string, string> = {
  gip: "/gip",
  eir: "/eir",
  reach: "/reach",
  path: "/path",
  "infosys-springboard": "/infosys-springboard",
  cesim: "/cesim",
  "aarohan-2025": "/aarohan-2025",
  "life-at-asb": "/life-at-asb",
};

const whyAsbItems = [
  {
    id: "gip",
    title: "GIP",
    fullTitle: "Global Immersion Program",
    description:
      "Experience international exposure through immersive academic and cultural learning opportunities that broaden business perspective and global readiness.",
    accent: "Global Exposure",
    image: globalImmersionImg,
  },
  {
    id: "eir",
    title: "EIR",
    fullTitle: "Executives in Residence",
    description:
      "Learn directly from seasoned industry leaders who bring boardroom insight, real business challenges, and practical decision-making into the classroom.",
    accent: "Industry Mentorship",
    image: leadershipImg,
  },
  {
    id: "reach",
    title: "REACH",
    fullTitle: "REACH",
    description:
      "A focused platform built to expand student capability through guided engagement, practical exposure, and outcome-oriented development opportunities.",
    accent: "Student Development",
    image: campusHub,
  },
  {
    id: "path",
    title: "PATH",
    fullTitle: "PATH",
    description:
      "Structured support that helps students move from classroom learning to clear career progression with stronger confidence, clarity, and execution.",
    accent: "Career Direction",
    image: campusImg,
  },
  {
    id: "infosys-springboard",
    title: "Infosys Springboard",
    fullTitle: "Infosys Springboard",
    description:
      "Technology-enabled learning support that helps students strengthen digital readiness, skill-building, and self-paced professional growth.",
    accent: "Digital Upskilling",
    image: campusHub,
  },
  {
    id: "cesim",
    title: "CESIM",
    fullTitle: "CESIM Simulations",
    description:
      "Simulation-based learning that sharpens strategic thinking, collaboration, and business decision-making in highly practical environments.",
    accent: "Simulation Learning",
    image: leadershipImg,
  },
  {
    id: "aarohan-2025",
    title: "AAROHAN-2025",
    fullTitle: "AAROHAN-2025",
    description:
      "A high-energy academic and student engagement platform that reflects ambition, creativity, and a culture of visible participation at ASB.",
    accent: "Campus Momentum",
    image: campusImg,
  },
  {
    id: "life-at-asb",
    title: "Life at ASB",
    fullTitle: "Life at ASB",
    description:
      "A vibrant campus environment shaped by learning, collaboration, events, mentorship, and experiences that build confident future leaders.",
    accent: "Campus Experience",
    image: campusHub,
  },
] as const;

const WhyASBPage = () => {
  return (
    <div className="pt-20 bg-background overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground px-4 md:px-8 py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        </div>
        <div className="container-wide relative z-10 px-4 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <SectionFadeIn>
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.28em] mb-4">Why ASB</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] text-primary-foreground">
              Why Students Choose ASB
            </h1>
            <p className="mt-6 max-w-2xl text-primary-foreground/75 text-base md:text-lg leading-relaxed">
              ASB combines global exposure, executive insight, skill development, simulations, and vibrant campus life
              to create a business education experience that is practical, ambitious, and future-focused.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {whyAsbItems.slice(0, 4).map((item) => (
                <Link
                  key={item.id}
                  to={routeMap[item.id] || `#${item.id}`}
                  className="rounded-xl border border-primary/30 bg-white/10 px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/15"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-primary/25 shadow-[0_24px_60px_rgba(2,8,23,0.32)] aspect-[4/5] bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover opacity-75"
                src={aboutVideoOne}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.18em] text-primary">Distinctive Learning Design</p>
                <p className="mt-2 text-xl font-black text-primary-foreground">Exposure, execution, and experience in one learning journey.</p>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="px-4 md:px-8 py-14 md:py-16 bg-gradient-to-b from-white to-secondary/35">
        <div className="container-wide px-4">
          <SectionFadeIn>
            <div className="grid gap-4 md:grid-cols-4">
              {whyAsbItems.map((item, index) => (
                <Link
                  key={item.id}
                  to={routeMap[item.id] || `#${item.id}`}
                  className="group rounded-2xl border border-border bg-white p-4 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(15,23,42,0.14)]"
                >
                  <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-primary">0{index + 1}</p>
                  <h2 className="mt-3 text-lg font-black text-foreground">{item.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{item.fullTitle}</p>
                </Link>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-20">
        <div className="container-wide px-4 space-y-8 md:space-y-10">
          {whyAsbItems.map((item, index) => (
            <SectionFadeIn key={item.id} delay={Math.min(index * 0.04, 0.24)}>
              <section
                id={item.id}
                className="grid overflow-hidden rounded-[1.6rem] border border-border/80 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)] lg:grid-cols-[320px_1fr]"
              >
                <div className="relative min-h-[220px] bg-secondary">
                  <img src={item.image} alt={item.fullTitle} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                  <div className="absolute left-5 bottom-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{item.accent}</p>
                    <p className="mt-2 text-2xl font-black text-white">{item.title}</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 lg:p-10">
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-primary">Why ASB</p>
                  <h3 className="mt-3 text-2xl md:text-3xl font-black text-foreground">{item.fullTitle}</h3>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </section>
            </SectionFadeIn>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyASBPage;
