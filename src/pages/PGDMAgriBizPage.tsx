import SectionFadeIn from "@/components/SectionFadeIn";
import {
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Factory,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Globe2,
  Goal,
  Handshake,
  GraduationCap,
  Briefcase,
  Sprout,
  ShieldCheck,
  Target,
  Tractor,
  CalendarDays,
  MessageCircle,
  UserRoundPlus,
  Building2,
  Mic2,
  Newspaper,
  Recycle,
  Network,
  Crown,
  UserCog,
  UserRound,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import agriHeroImage from "@/assets/pgdm-agri-business-management.webp";

const highlights = [
  {
    icon: Factory,
    title: "Industry-Focused Curriculum",
    desc: "Covers agribusiness operations, rural marketing, supply chain management, and policy analysis",
  },
  {
    icon: Globe2,
    title: "Global Immersion Program",
    desc: "International exposure through industry visits, corporate interactions, and market analysis in countries like Dubai/Singapore/Malaysia/ Europe",
  },
  {
    icon: Handshake,
    title: "Practical Learning",
    desc: "Hands-on experience through case studies, live projects, internships, and the Agribusiness Club",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    desc: "Learn from industry professionals and experienced academicians",
  },
  {
    icon: Briefcase,
    title: "Placement & Industry Exposure",
    desc: "Collaborations with top agribusiness firms and government agencies",
  },
  {
    icon: Sprout,
    title: "Entrepreneurial Focus",
    desc: "Encourages innovation and business development in agriculture",
  },
];

const courseStructure = [
  "Agricultural Economics & Policies",
  "Rural & Agri-Marketing",
  "Supply Chain & Logistics Management",
  "Agri-Finance & Risk Management",
  "Food Processing & Retail Management",
  "Sustainability & Agri-Technology",
];

const careerPaths = [
  "Agribusiness Manager",
  "Sales Officer/ Sales Manager",
  "Supply Chain Analyst",
  "Agriculture Field Officer",
  "Agri-Entrepreneur",
];

const objectives = [
  "To Facilitate collaboration between students and key stakeholders, including agribusiness companies, NGOs, farmers, and policymakers.",
  "To organize workshops, seminars, and field visits to bridge the gap between traditional agricultural practices and modern agribusiness strategies.",
  "Conduct regular field visits to farms, agribusiness firms, and research institutions to provide practical exposure.",
  "Partner with rural development organizations to address grassroots-level challenges in agriculture.",
];

const outcomes = [
  "The club will serve as a central platform for discussions, innovations, and knowledge sharing, benefiting the members and the larger student and farming community.",
  "Participation in club activities and leadership roles will cultivate strong leadership, teamwork, and project management skills among students.",
  "Active student participation in projects to solve grassroots-level challenges will directly benefit farmers by improving productivity, market access, and income stability.",
  "Development of entrepreneurial skills such as problem-solving, financial planning, and strategic thinking.",
  "Students will gain hands-on experience and practical insights into agribusiness operations, and modern agricultural practices.",
  "Students will establish meaningful relationships with agribusiness professionals, researchers, NGOs, and farmers opening doors for internships, mentorships, and job placements.",
];

const activities = [
  { icon: Tractor, label: "Field Visits and Farm Tours" },
  { icon: MessageCircle, label: "Panel Discussions and Roundtable" },
  { icon: UserRoundPlus, label: "Mentorship Programs" },
  { icon: Building2, label: "Industrial visits" },
  { icon: Mic2, label: "Expert talks on recent trends" },
  { icon: Users, label: "Farmer Interactions" },
  { icon: Newspaper, label: "Monthly Newsletter Magazine" },
  { icon: ShieldCheck, label: "Swachh Ashoka" },
  { icon: Recycle, label: "Vermicompost Production" },
];

const PGDMAgriBizPage = () => {
  return (
    <div className="pt-20 bg-background overflow-x-clip">
      <section className="relative overflow-hidden border-b border-primary/30 bg-[radial-gradient(circle_at_12%_12%,rgba(220,38,38,0.22),transparent_40%),linear-gradient(155deg,#0b1220,#111827_55%,#1f2937)] text-primary-foreground px-4 md:px-8 py-16 md:py-24">
        <div className="container-wide relative z-10 px-4">
          <SectionFadeIn>
            <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-4xl">
                <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em]">
                  Our Programs
                </p>
                <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight">AGRI-BUSINESS MANAGEMENT</h1>
                <h2 className="mt-4 text-xl md:text-2xl font-bold text-primary-foreground/95">About the Program</h2>
                <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-primary-foreground/90">
                  The PGDM in Agribusiness Management is a two-year program designed to develop professionals who can manage and lead in the evolving agricultural and allied sectors. The program blends management principles with agrarian sciences, equipping students with the necessary skills to address industry challenges and drive sustainable growth.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_8px_24px_rgba(220,38,38,0.35)] transition-colors hover:bg-primary/90"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="/pgdm-agri-business-management#club-structure"
                    className="inline-flex items-center rounded-lg border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                  >
                    View Club Structure
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-primary/30 bg-background/10 p-2 shadow-[0_18px_52px_rgba(2,6,23,0.55)]">
                <img
                  src={agriHeroImage}
                  alt="PGDM Agri-Business Management"
                  className="h-[220px] w-full rounded-xl object-cover md:h-[300px]"
                />
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding relative bg-[linear-gradient(180deg,#ffffff,#f8fafc)]">
        <div className="container-wide max-w-6xl mx-auto">
          <SectionFadeIn>
            <div className="grid gap-5 lg:grid-cols-3">
              <div className="rounded-2xl border border-primary/20 bg-primary p-6 text-primary-foreground shadow-[0_12px_30px_rgba(220,38,38,0.28)] lg:col-span-1">
                <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                  <Target className="h-5 w-5 text-primary-foreground" />
                </div>
                <h2 className="mt-4 text-2xl font-black">Vision</h2>
                <p className="mt-5 text-sm leading-relaxed text-primary-foreground/90">
                  To empower students with the knowledge, skills, and entrepreneurial mindset required to revolutionize agribusiness, fostering innovation and sustainability in agriculture for a better future.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.08)] lg:col-span-2">
                <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                  <Goal className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-2xl font-black text-foreground">Mission</h2>
                <ol className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground list-decimal list-inside">
                  <li>To inspire and support students in developing innovative solutions for challenges in agriculture and agribusiness.</li>
                  <li>To create a platform where students can learn, explore, and launch agribusiness startups by providing mentorship, resources, and connections to industry leaders.</li>
                  <li>To connect students with agribusiness professionals, researchers, and entrepreneurs to build a strong network for learning and opportunities.</li>
                </ol>
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn>
            <div className="mt-8">
              <h3 className="text-2xl md:text-3xl font-black text-foreground text-center">Program Highlights</h3>
              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {highlights.map((item, index) => (
                  <div key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
                    <div className="flex h-10 items-center justify-start">
                      <div className={index === 0 ? "inline-flex rounded-lg bg-foreground p-2 text-background" : "inline-flex rounded-lg bg-primary/10 p-2 text-primary"}>
                        <item.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <p className="mt-4 text-left text-xl leading-tight font-bold text-foreground">{item.title}</p>
                    <p className="mt-3 text-left text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-primary/20 bg-white p-5 shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
                <div className="inline-flex rounded-xl bg-primary/10 p-2 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-black text-foreground">Eligibility Criteria</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  A bachelor's degree in any discipline with 60% from any UGC-recognized university or Institution.
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Valid CAT/MAT/ATMA/XAT/CMAT/GMAT/ICET or ASB test scores.</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Personal interview and/or group discussion for final selection.</p>
              </div>

              <div className="rounded-2xl border border-sky-200 bg-white p-5 shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
                <div className="inline-flex rounded-xl bg-primary/10 p-2 text-primary">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-black text-foreground">Course Structure</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">The program is spread across four semesters covering the following core areas:</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
                  {courseStructure.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
                <div className="inline-flex rounded-xl bg-primary/10 p-2 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-black text-foreground">Career Opportunities</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Graduates can explore diverse career paths in agribusiness firms, food processing companies, financial institutions, NGOs, and government organizations.
                </p>
                <p className="mt-3 text-sm font-semibold text-foreground">Job Roles Include:</p>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
                  {careerPaths.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn>
            <div className="mt-10 grid gap-4 lg:grid-cols-12">
              <div className="rounded-2xl border border-primary/20 bg-primary p-6 text-primary-foreground shadow-[0_10px_26px_rgba(220,38,38,0.26)] lg:col-span-4">
                <h3 className="text-2xl font-black">Objectives</h3>
                <ol className="mt-4 space-y-3 text-sm leading-relaxed text-primary-foreground/90 list-decimal list-inside">
                  {objectives.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.08)] lg:col-span-8">
                <h3 className="text-2xl font-black text-foreground">Outcomes</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-[2px] h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-[linear-gradient(140deg,#111827,#1f2937)] p-6 text-white shadow-[0_12px_30px_rgba(2,6,23,0.34)]">
              <h3 className="text-2xl font-black">Activities</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {activities.map((activity, index) => (
                  <div key={activity.label} className="rounded-xl border border-white/20 bg-white/5 p-3 text-sm">
                    <div className="flex items-start gap-2">
                      <activity.icon className="mt-[2px] h-4 w-4 shrink-0 text-primary" />
                      <span className="text-white/90">{index + 1}. {activity.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn>
            <div id="club-structure" className="mt-10 rounded-2xl border border-border bg-white p-5 md:p-8 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
              <h3 className="text-3xl font-black text-center text-foreground">Club structure</h3>
              <div className="mt-8 hidden md:block">
                <div className="mx-auto max-w-6xl">
                  <div className="flex justify-center">
                    <div className="min-w-[260px] rounded-xl bg-primary px-8 py-4 text-center text-primary-foreground">
                      <p className="text-xs uppercase tracking-[0.2em] font-bold">KRISHI SANKALP</p>
                      <p className="text-2xl font-semibold">The Agribusiness Club</p>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-center text-foreground/80">
                    <ArrowDown className="h-7 w-7" />
                  </div>

                  <div className="mx-auto grid max-w-4xl grid-cols-[1fr_auto_1fr] items-center gap-4">
                    <div className="justify-self-stretch rounded-xl bg-primary px-6 py-3 text-center text-lg font-semibold text-primary-foreground">Chairperson</div>
                    <ArrowRight className="h-6 w-6 text-foreground/80" />
                    <div className="justify-self-stretch rounded-xl bg-primary px-6 py-3 text-center text-lg font-semibold text-primary-foreground">Academic Council Members</div>
                  </div>

                  <div className="mt-3 flex justify-center text-foreground/80">
                    <ArrowDown className="h-7 w-7" />
                  </div>
                  <div className="flex justify-center">
                    <div className="min-w-[260px] rounded-xl bg-primary px-6 py-3 text-center text-lg font-semibold text-primary-foreground">President</div>
                  </div>

                  <div className="mt-3 flex justify-center text-foreground/80">
                    <ArrowDown className="h-7 w-7" />
                  </div>
                  <div className="flex justify-center">
                    <div className="min-w-[260px] rounded-xl bg-primary px-6 py-3 text-center text-lg font-semibold text-primary-foreground">Vice President</div>
                  </div>

                  <div className="mt-8 h-1 rounded bg-foreground/80" />
                  <div className="mt-2 grid grid-cols-4 gap-4">
                    {[
                      "Secretary",
                      "Treasurer",
                      "Event Coordinator",
                      "Marketing",
                    ].map((role) => (
                      <div key={role} className="flex flex-col items-center">
                        <ArrowDown className="h-6 w-6 text-foreground/80" />
                        <div className="mt-2 w-full rounded-xl bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground">
                          {role}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 h-1 rounded bg-foreground/80" />
                  <div className="mt-2 grid grid-cols-2 gap-8">
                    {[
                      "Committee Members",
                      "Excuetive Members",
                    ].map((role) => (
                      <div key={role} className="flex flex-col items-center">
                        <ArrowDown className="h-6 w-6 text-foreground/80" />
                        <div className="mt-2 w-full rounded-xl bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground">
                          {role}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3 md:hidden">
                {[
                  "KRISHI SANKALP - The Agribusiness Club",
                  "Chairperson",
                  "Academic Council Members",
                  "President",
                  "Vice President",
                  "Secretary",
                  "Treasurer",
                  "Event Coordinator",
                  "Marketing",
                  "Committee Members",
                  "Excuetive Members",
                ].map((role) => (
                  <div key={role} className="rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground">
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn>
            <div className="mt-10 rounded-2xl border border-border bg-white p-6 md:p-8 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
              <h3 className="text-3xl font-black text-center text-foreground">Reach out for more details</h3>
              <p className="mt-2 text-center text-muted-foreground font-semibold">Chairperson - Agribusiness Club</p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-border bg-background p-5 text-center shadow-sm">
                  <span className="mx-auto inline-flex rounded-full bg-primary/10 p-2"><Phone className="h-5 w-5 text-primary" /></span>
                  <p className="mt-2 font-bold text-foreground">Phone</p>
                  <a href="tel:+917207939934" className="mt-1 inline-block text-muted-foreground hover:text-primary transition-colors">7207939934</a>
                </div>
                <div className="rounded-2xl border border-border bg-background p-5 text-center shadow-sm">
                  <span className="mx-auto inline-flex rounded-full bg-primary/10 p-2"><Mail className="h-5 w-5 text-primary" /></span>
                  <p className="mt-2 font-bold text-foreground">Email Id</p>
                  <a href="mailto:admissions@theasb.in" className="mt-1 inline-block text-muted-foreground hover:text-primary transition-colors">admissions@theasb.in</a>
                </div>
                <div className="rounded-2xl border border-border bg-background p-5 text-center shadow-sm">
                  <span className="mx-auto inline-flex rounded-full bg-primary/10 p-2"><MapPin className="h-5 w-5 text-primary" /></span>
                  <p className="mt-2 font-bold text-foreground">Address</p>
                  <p className="mt-1 text-muted-foreground">Ashoka School of Business, Hyderabad</p>
                </div>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </div>
  );
};

export default PGDMAgriBizPage;
