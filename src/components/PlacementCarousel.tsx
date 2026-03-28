import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight, Info } from "lucide-react";
import SectionFadeIn from "./SectionFadeIn";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import globalImmersion from "@/assets/global-immersion.jpg";
import campusLife from "@/assets/campus-life.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";
import leadership from "@/assets/leadership.jpg";
import blogFinanceOverview from "@/assets/blog-finance-overview.jpg";
import smartClassroom from "@/assets/Smart Classrooms.jpg";
import sportsArena from "@/assets/campus-hub.png";
import incubation from "@/assets/incubation.jpg";
import pgdmSeminar from "@/assets/pgdm-seminar.jpg";
import placementsImg from "@/assets/placements.jpg";
import hymavathiImg from "@/assets/testimonials/hyamavathi.png";
import lingesImg from "@/assets/testimonials/linges.png";
import magisImg from "@/assets/testimonials/Magisetty.png";
import reddyImg from "@/assets/testimonials/reddy.png";
import shaikImg from "@/assets/testimonials/Shaik.png";

const logoModules = import.meta.glob("../assets/logos/*.{png,webp,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const placementPhotoModules = import.meta.glob("../assets/placement/*.{png,webp,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const guestEventModules = import.meta.glob("../assets/guest 1 (*).webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const sortByFilename = ([a]: [string, string], [b]: [string, string]) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });

const companyLogos = Object.entries(logoModules)
  .sort(sortByFilename)
  .map(([, src]) => src);

const orderedPlacementEntries = Object.entries(placementPhotoModules).sort(sortByFilename);

const firstBatchEntries = orderedPlacementEntries.filter(([path]) =>
  path.toLowerCase().includes("2023 to 2025")
);

const secondBatchEntries = orderedPlacementEntries.filter(([path]) =>
  path.toLowerCase().includes("2021 to 2023")
);

const remainingEntries = orderedPlacementEntries.filter(
  ([path]) =>
    !path.toLowerCase().includes("2023 to 2025") &&
    !path.toLowerCase().includes("2021 to 2023")
);

const placementPhotos = [...firstBatchEntries, ...secondBatchEntries, ...remainingEntries].map(([, src]) => src);

const guestEventImages = Object.entries(guestEventModules)
  .sort(sortByFilename)
  .map(([, src]) => src);

const pgdmTiles = [
  {
    title: "Marketing with Analytics",
    path: "/pgdm/marketing-analytics",
    image: leadership,
  },
  {
    title: "Finance with Fintech",
    path: "/pgdm/finance-fintech",
    image: blogFinanceOverview,
  },
  {
    title: "HR with HR Analytics",
    path: "/pgdm/hr-analytics",
    image: smartClassroom,
  },
  {
    title: "Agri-Business Management",
    path: "/pgdm/agri-business",
    image: sportsArena,
  },
  {
    title: "AI & Data Science",
    path: "/pgdm/ai-data-science",
    image: incubation,
  },
];

const testimonials = [
  {
    name: "Hymavathi",
    role: "Credit Analyst",
    batch: "PGDM 2022–24 · Matrix",
    image: hymavathiImg,
    paragraphs: [
      "Greetings, My name is Hymavathi, from the PGDM batch of 2022-24 at Ashoka School of Business. I am currently working as a Credit Analyst at Matrix.",
      "Looking back at my time at ASB, I fondly remember the vibrant and enriching environment fostered by the diverse clubs and committees. From the intellectually stimulating sessions of the Academics Club to the serene ambiance of the Library, each space offered a unique opportunity for growth and exploration.",
      "The APAC club provided a global perspective, while the Sports and Cultural committees instilled a sense of camaraderie and fostered creativity. These experiences not only honed my skills but also shaped my personality, preparing me for the challenges of the professional world.",
      "I am grateful to ASB for providing this enriching platform and for nurturing my holistic development.",
    ],
  },
  {
    name: "Lingeswaran S",
    role: "Business Analyst",
    batch: "Batch 2021–23 · Tech Mahindra",
    image: lingesImg,
    paragraphs: [
      "I'm Lingeswaran S, a proud alumnus of Ashoka School of Business (Batch 2021-2023) and currently working as a Business Analyst at Tech Mahindra. I chose ASB because it offered a perfect balance—Hyderabad's vibrant exposure, an AI and analytics-focused curriculum, and an affordable fee structure compared to other B-schools.",
      "I specialized in Marketing with Marketing Analytics and AI ML as my minor. The practical, well-designed curriculum gave me the confidence to tackle analytics-based questions during interviews and secure a great placement through campus recruitment, with a 100% ROI.",
      "Even as part of ASB's second batch, I was amazed by the quality of education, placement training, and infrastructure. ASB didn't just meet my expectations—it exceeded them. I'm incredibly thankful to the faculty and staff for their guidance and support throughout my journey.",
    ],
  },
  {
    name: "Magisetty Bhagya Sri Naga Sheshanjana",
    role: "Advanced Analyst",
    batch: "Batch 2021–23 · Ernst & Young GDS",
    image: magisImg,
    paragraphs: [
      "Greetings of the day! Studying at Ashoka School of Business, which is a lush green, high-technology business school, has been an exceptional experience.",
      "The serene campus, surrounded by nature, provides a refreshing environment for learning and innovation. The finance department stands out with its cutting-edge resources and real-time financial data integration, fostering a hands-on approach to education. Faculty members are highly experienced, blending theoretical knowledge with practical insights, ensuring students are industry-ready.",
      "One of the highlights of my journey was the Global Immersion Program to Dubai. Experiencing the financial hub of the Middle East was eye-opening. Visiting global corporations, interacting with industry leaders, and exploring cutting-edge financial strategies broadened my horizons and gave me a global perspective on finance.",
      "Overall, the combination of an advanced academic environment, vibrant hostel life, and global exposure has been unparalleled. The school not only equipped me with technical skills in finance but also shaped me into a confident, globally aware individual. Grateful for an enriching experience, lifelong friendships, global exposure, and invaluable lessons that shaped my career.",
    ],
  },
  {
    name: "Snehit Reddy",
    role: "Associate Analyst – AI/ML",
    batch: "Batch 2021–23 · Tech Mahindra",
    image: reddyImg,
    paragraphs: [
      "Hi, I am Snehit Reddy shaprapawad of Ashoka batch of 2021-2023. Presently working at Tech Mahindra as Associate Analyst in AI/ML dept.",
      "I have had the privilege of engaging in extensive research, particularly in the fields of AI and ML. Under the mentorship of ASB faculty, particularly Prem Kumar Sir, I was able to explore various research topics, write research articles, and publish them in reputed conferences and journals indexed in Scopus and other recognized platforms.",
      "The guidance and support from the faculty have been instrumental in shaping my understanding of the subject and refining my research capabilities. I would like to express my heartfelt gratitude to Ashoka for providing such a comprehensive curriculum. My research experience here has not only enhanced my technical abilities but also fueled my passion for innovation in AI/ML.",
    ],
  },
  {
    name: "Shaik Ibrahim",
    role: "Alumni Member",
    batch: "Ashoka School of Business, Hyderabad",
    image: shaikImg,
    paragraphs: [
      "Greetings of the Day. I'm Shaik Ibrahim, an Alumni member of Ashoka School of Business, Hyderabad.",
      "Certainly, the role of the faculty members at Ashoka School of Business was crucial in determining my learning experience during my Postgraduate Diploma in Management (PGDM).",
      "Their strong knowledge, sound industry understanding, and commitment to excellence have motivated me toward higher academic and professional aspirations. They have shown different aspects of teaching through real-time case studies, highly interactive discussions, and practical assignments that challenge my critical thinking and decision-making capabilities.",
      "Personalized guidance and constructive feedback helped me incredibly through assignments to boost my confidence and curiosity. Their discussions and constant mentorship did wonders in filling the gap between theory and real practices. Perpetual support and dedication enriches my journey to an extreme level, making it an everlasting mark both professionally and personally.",
    ],
  },
];

const PlacementCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const eventsScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollEventsLeft, setCanScrollEventsLeft] = useState(false);
  const [canScrollEventsRight, setCanScrollEventsRight] = useState(true);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const testimonialsScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollTestimonialsLeft, setCanScrollTestimonialsLeft] = useState(false);
  const [canScrollTestimonialsRight, setCanScrollTestimonialsRight] = useState(true);
  const [expandedTestimonials, setExpandedTestimonials] = useState<Record<number, boolean>>({});

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const checkEventsScroll = () => {
    const el = eventsScrollRef.current;
    if (!el) return;
    setCanScrollEventsLeft(el.scrollLeft > 10);
    setCanScrollEventsRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scrollEvents = (dir: "left" | "right") => {
    const el = eventsScrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Auto-scroll
  useEffect(() => {
    if (isCarouselHovered) return;

    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isCarouselHovered]);

  useEffect(() => {
    const el = eventsScrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkEventsScroll);
    checkEventsScroll();
    return () => el.removeEventListener("scroll", checkEventsScroll);
  }, []);

  const checkTestimonialsScroll = () => {
    const el = testimonialsScrollRef.current;
    if (!el) return;
    setCanScrollTestimonialsLeft(el.scrollLeft > 10);
    setCanScrollTestimonialsRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scrollTestimonials = (dir: "left" | "right") => {
    const el = testimonialsScrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const toggleTestimonial = (i: number) => {
    setExpandedTestimonials((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  useEffect(() => {
    const el = testimonialsScrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkTestimonialsScroll);
    checkTestimonialsScroll();
    return () => el.removeEventListener("scroll", checkTestimonialsScroll);
  }, []);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <SectionFadeIn>
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Placements</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Students, Our Pride</h2>
            <p className="text-muted-foreground mt-2">Congratulations to our placed students across top companies</p>
          </div>
        </SectionFadeIn>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 px-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {placementPhotos.map((photo, i) => (
              <Link
                to="/placements"
                key={i}
                className="snap-start shrink-0 w-[260px] md:w-[280px] group"
              >
                <div className="rounded-[1.4rem] p-[2px] bg-gradient-to-b from-primary/50 to-primary/20 shadow-lg shadow-slate-900/10 transition-all duration-300 will-change-transform group-hover:-translate-y-1 group-hover:shadow-xl">
                  <div className="overflow-hidden rounded-[1.28rem] bg-background">
                    <img
                      src={photo}
                      alt={`Placement photo ${i + 1}`}
                      className="block w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <SectionFadeIn>
          <div className="mt-14 rounded-[1.75rem] border border-border/60 bg-background px-4 py-8 md:px-6 shadow-lg shadow-slate-900/5 overflow-hidden">
            <div className="text-center mb-6">
              <p className="text-primary font-semibold text-xs uppercase tracking-[0.22em] mb-2">Recruiters</p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Companies That Hire From ASB</h3>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-14 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-14 bg-gradient-to-l from-background to-transparent z-10" />

              <div
                className="flex gap-4 overflow-x-auto pb-2 px-1 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {companyLogos.map((logo, i) => (
                  <div
                    key={`logo-${i}`}
                    className="snap-start shrink-0 h-16 w-32 md:h-20 md:w-40 rounded-xl border border-border/60 bg-white shadow-sm flex items-center justify-center p-3"
                  >
                    <img src={logo} alt={`Recruiter logo ${i + 1}`} className="max-h-14 md:max-h-16 w-auto object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionFadeIn>

        <SectionFadeIn>
          <div className="mt-16 rounded-[2rem] border border-border/60 bg-background p-6 md:p-10 shadow-lg shadow-slate-900/5">
            <div className="grid lg:grid-cols-[1.08fr_1fr] gap-8 items-stretch">
              <div>
                <p className="text-primary font-semibold text-xs uppercase tracking-[0.24em] mb-3">To The Journey Ahead</p>
                <h3 className="text-3xl md:text-5xl font-black text-foreground leading-tight mb-8">
                  Gain Valuable
                  <br />
                  Knowledge &amp; Experience
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">01</span>
                    <div>
                      <h4 className="text-2xl font-semibold text-foreground mb-1">Global Standard</h4>
                      <p className="text-muted-foreground leading-relaxed">Delivering quality education and research environment via continuous learning experience.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="shrink-0 mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-primary-foreground text-sm font-bold">02</span>
                    <div>
                      <h4 className="text-2xl font-semibold text-foreground mb-1">On-Demand Programs</h4>
                      <p className="text-muted-foreground leading-relaxed">On-demand training and academic programs are open to our students round the clock.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="shrink-0 mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">03</span>
                    <div>
                      <h4 className="text-2xl font-semibold text-foreground mb-1">Exceptional Infrastructure</h4>
                      <p className="text-muted-foreground leading-relaxed">Our students have access to diverse facilities to experience a remarkable learning experience.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 grid-rows-[1fr_auto] overflow-hidden rounded-[1.5rem] border border-border/60">
                <div className="bg-primary p-6 md:p-8 text-primary-foreground">
                  <h4 className="text-3xl md:text-[2.15rem] font-black leading-none mb-4">Placements</h4>
                  <p className="leading-[1.55] text-primary-foreground/95">Every student at Ashoka School Business should be our brand ambassador in the real-world. With that in mind, we focus on developing our students for highly sought-after placements with leading companies.</p>
                </div>

                <div className="min-h-[220px]">
                  <img src={globalImmersion} alt="Students in learning environment" className="h-full w-full object-cover" />
                </div>

                <div className="min-h-[220px]">
                  <img src={campusLife} alt="ASB campus student interaction" className="h-full w-full object-cover" />
                </div>

                <div className="bg-charcoal p-6 md:p-8 text-primary-foreground">
                  <h4 className="text-4xl font-black mb-4">We Connect</h4>
                  <p className="leading-relaxed text-primary-foreground/90">Regular interactions with corporate experts and alums by way of guest sessions including an address from people from foreign countries gives our students a glimpse about global business.</p>
                </div>
              </div>
            </div>
          </div>
        </SectionFadeIn>

        <SectionFadeIn>
          <div className="mt-16 overflow-hidden rounded-[2rem] border border-border/60 bg-background shadow-lg shadow-slate-900/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {pgdmTiles.map((tile, i) => (
                <Link
                  key={tile.title}
                  to={tile.path}
                  className="group relative block min-h-[160px] md:min-h-[170px] lg:min-h-[180px] overflow-hidden border-b sm:border-b-0 lg:border-r border-background/15"
                >
                  <img
                    src={tile.image}
                    alt={tile.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/45 to-charcoal/20 transition-colors group-hover:from-primary/75 group-hover:via-charcoal/30" />
                  <div className="relative z-10 flex h-full items-end justify-between p-4 md:p-5">
                    <h4 className="max-w-[16ch] text-base md:text-lg xl:text-xl font-bold text-primary-foreground leading-tight">{tile.title}</h4>
                    <span className="inline-flex h-9 w-9 md:h-10 md:w-10 shrink-0 aspect-square items-center justify-center rounded-full border border-primary-foreground/35 bg-primary-foreground/10 text-primary-foreground transition-transform group-hover:-translate-y-1 group-hover:rotate-6">
                      <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
                    </span>
                  </div>
                  <div className="absolute left-0 top-0 h-1 w-full bg-primary/70 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>

            <div className="grid lg:grid-cols-2">
              <div>
                <div className="bg-charcoal px-6 py-8 md:px-10 md:py-12 text-primary-foreground">
                  <h3 className="text-4xl font-black mb-4">We Are Open For Opportunities!</h3>
                  <p className="text-primary-foreground/90 leading-relaxed text-lg">
                    A fully functional Entrepreneurship Cell at the Institute level that helps students in developing new ideas. We look for inquisitiveness, emotional intelligence, and willingness to do learn and experience, in our students.
                  </p>
                </div>
                <div className="h-[320px] md:h-[430px] overflow-hidden">
                  <img src={pgdmSeminar} alt="Students in strategic meeting" className="h-full w-full object-cover" />
                </div>
              </div>

              <div className="bg-primary px-6 py-10 md:px-12 md:py-16 text-primary-foreground flex items-center">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-4 text-primary-foreground/90">Ashoka School of Business</p>
                  <h3 className="text-4xl md:text-5xl font-black leading-tight mb-6">We Are One of The Best Emerging Institutions To Offer PGDM</h3>
                  <p className="text-primary-foreground/95 text-lg leading-relaxed">
                    At Ashoka School Business, Innovation - Creativity - Experimentation are core values. From Experiential Learning, Multiple Internships, Joint Global Projects, International Immersions, Teaching & Workshops with Global Leaders, collaborating with stakeholders across India & Abroad, creating a Sustainable Ecosystem, engaging with youth, encouraging Entrepreneurship & participating in Global Challenges, we do it all at Ashoka School Business. Our program is specifically designed for students who want to become Successful Leaders in the Corporate Sector or Entrepreneurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionFadeIn>

        <SectionFadeIn>
          <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-[#3e3f9e] text-primary-foreground shadow-[0_20px_60px_rgba(24,26,87,0.28)]">
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 p-6 md:p-10 lg:p-14 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/90 mb-5">Set up on a 30-acre lush-green campus</p>
                <h3 className="text-3xl md:text-5xl font-black leading-tight mb-6">Multiple Internships / International Immersions &amp; Exchanges</h3>
                <p className="text-primary-foreground/90 text-[15px] md:text-base leading-relaxed">
                  ASB is an accomplished hub of academic and research activity that serves as a window to the world for our students. ASB&apos;s research and education strive to positively influence and contribute to both business and societal development. ASB takes pride in facilitating the same through constant endeavours to strengthen our students&apos; foundation on the global front. In the last few years, we are proud to have fostered long-term relationships with more than 50 partners spanning the globe. We support global business education by providing our students opportunities to understand the world&apos;s best business practices and develop a sound cross-cultural sensitivity through exchange of students, faculty and staff, international immersion programs, short term programs and foreign language courses. Be it in India or International - the ASB internships ensure that our students come out ready for the corporate world and the business world by the time they complete their course with diverse internship experience across multiple verticals/ companies/ sectors &amp; geographies.
                </p>
              </div>

              <div className="relative min-h-[320px] md:min-h-[420px] lg:min-h-[460px]">
                <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden border border-white/20 shadow-xl shadow-slate-950/25">
                  <img src={globalImmersion} alt="International immersion programs" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f245f]/70 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-5 left-4 md:left-6 lg:-left-8 w-[50%] md:w-[44%] lg:w-[46%] rounded-2xl overflow-hidden border border-white/25 shadow-xl shadow-slate-950/25">
                  <img src={campusAerial} alt="ASB global campus network" className="h-full w-full object-cover" />
                </div>

                <div className="absolute top-4 right-4 rounded-xl border border-white/25 bg-white/10 backdrop-blur px-4 py-3">
                  <p className="text-2xl font-black">50+</p>
                  <p className="text-xs uppercase tracking-widest text-primary-foreground/80">Global Partners</p>
                </div>

                <div className="absolute bottom-4 right-4 rounded-xl border border-white/25 bg-white/10 backdrop-blur px-4 py-3 max-w-[180px] md:max-w-[210px]">
                  <p className="text-sm font-semibold">International Immersions</p>
                  <p className="text-xs text-primary-foreground/85 mt-1">Cross-cultural exchange, internships, and global exposure.</p>
                </div>
              </div>
            </div>
          </div>
        </SectionFadeIn>

        <SectionFadeIn>
          <div className="mt-16 rounded-[2rem] border border-border/60 bg-background p-6 md:p-10 shadow-lg shadow-slate-900/5">
            <div className="mb-8">
              <p className="text-primary font-semibold text-xs uppercase tracking-[0.24em] mb-3">ASB Events</p>
              <h3 className="text-3xl md:text-5xl font-black text-foreground leading-tight">We Bring The Best Speakers At Every Events</h3>
            </div>

            <div className="relative">
              {canScrollEventsLeft && (
                <button
                  onClick={() => scrollEvents("left")}
                  className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur border border-border rounded-full p-2 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Scroll events left"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}

              {canScrollEventsRight && (
                <button
                  onClick={() => scrollEvents("right")}
                  className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur border border-border rounded-full p-2 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Scroll events right"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}

              <div
                ref={eventsScrollRef}
                className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {guestEventImages.map((img, i) => (
                  <div
                    key={`event-card-${i}`}
                    className="snap-start shrink-0 w-[240px] md:w-[260px] group relative overflow-hidden rounded-xl border border-primary/25 bg-background"
                  >
                    <img src={img} alt={`ASB guest event ${i + 1}`} className="h-[190px] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-primary/20 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionFadeIn>

        <SectionFadeIn>
          <div className="mt-16 relative overflow-hidden rounded-[2rem] border border-white/10 min-h-[320px] md:min-h-[380px]">
            <img src={placementsImg} alt="Placement assistance at ASB" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2b2f75]/80 via-[#2b2f75]/60 to-[#2b2f75]/35" />

            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-2xl px-6 py-10 md:px-14 md:py-14 text-primary-foreground">
                <h3 className="text-3xl md:text-5xl font-black leading-tight mb-5">100% Placement Assistance</h3>
                <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed mb-8">
                  Exposure to various companies, clubs and activities that encourage responsible positions during these extra-curricular activities help the students to take up highly recognized corporate positions. Along with Top companies in India, students also receive interview opportunities with companies abroad. Our placement services not only facilitate employment but overall grooming for long term success.
                </p>
                <Link
                  to="/placements"
                  className="inline-flex items-center rounded-md bg-primary px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </SectionFadeIn>

        <SectionFadeIn>
          <div className="mt-16 rounded-[2rem] border border-border/60 bg-background p-6 md:p-10 shadow-lg shadow-slate-900/5 overflow-hidden">
            <div className="text-center mb-10">
              <p className="text-primary font-semibold text-xs uppercase tracking-[0.24em] mb-3">Alumni Voices</p>
              <h3 className="text-3xl md:text-5xl font-black text-foreground">Testimonials</h3>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-base">Hear directly from our alumni about their transformative journey at Ashoka School of Business.</p>
            </div>

            <div className="relative">
              {canScrollTestimonialsLeft && (
                <button
                  onClick={() => scrollTestimonials("left")}
                  className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur border border-border rounded-full p-2 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Scroll testimonials left"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}
              {canScrollTestimonialsRight && (
                <button
                  onClick={() => scrollTestimonials("right")}
                  className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-background/95 backdrop-blur border border-border rounded-full p-2 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Scroll testimonials right"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}

              <div
                ref={testimonialsScrollRef}
                className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="snap-start shrink-0 w-[280px] sm:w-[300px] rounded-2xl border border-border/60 bg-secondary flex flex-col p-5"
                  >
                    {/* Photo */}
                    <div className="flex flex-col items-center mb-4">
                      <div className="h-24 w-24 rounded-full overflow-hidden ring-4 ring-primary/15 shadow-lg shadow-primary/10 mb-4">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="text-center text-primary font-bold text-sm leading-snug px-1">{t.name}</h4>
                      <p className="text-center text-xs text-muted-foreground mt-1 font-medium">{t.role}</p>
                      <p className="text-center text-[11px] text-primary/60 font-semibold mt-1 uppercase tracking-wide">{t.batch}</p>
                    </div>

                    {/* Preview — first paragraph always visible */}
                    <p className="text-[13px] text-foreground/75 leading-relaxed line-clamp-4">
                      {t.paragraphs[0]}
                    </p>

                    {/* Mobile: expandable remaining paragraphs */}
                    {t.paragraphs.length > 1 && (
                      <div className="md:hidden mt-3">
                        <div
                          className="overflow-hidden transition-[max-height] duration-300 ease-in-out space-y-2 text-[13px] text-foreground/75 leading-relaxed"
                          style={{ maxHeight: expandedTestimonials[i] ? "900px" : "0px" }}
                        >
                          {t.paragraphs.slice(1).map((p, j) => (
                            <p key={j}>{p}</p>
                          ))}
                        </div>
                        <button
                          onClick={() => toggleTestimonial(i)}
                          className="mt-3 inline-flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-wider hover:underline"
                        >
                          {expandedTestimonials[i] ? "Read less" : "Read more"}
                        </button>
                      </div>
                    )}

                    {/* Desktop: click-triggered popover with full content */}
                    {t.paragraphs.length > 1 && (
                      <div className="hidden md:block mt-3">
                        <Popover>
                          <PopoverTrigger asChild>
                            <button className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider hover:underline">
                              Read more <Info className="h-3 w-3" />
                            </button>
                          </PopoverTrigger>
                          <PopoverContent
                            side="top"
                            align="start"
                            sideOffset={8}
                            className="w-[360px] max-w-[calc(100vw-2rem)] max-h-[300px] overflow-y-auto p-4 text-left shadow-xl border-border/80 space-y-2"
                          >
                            {t.paragraphs.map((p, j) => (
                              <p key={j} className="text-[12px] leading-relaxed">{p}</p>
                            ))}
                          </PopoverContent>
                        </Popover>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionFadeIn>
      </div>
    </section>
  );
};

export default PlacementCarousel;
