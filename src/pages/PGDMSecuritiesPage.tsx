import SectionFadeIn from "@/components/SectionFadeIn";
import { Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import moneyControlImage from "@/assets/MC-ASB.webp";

const moneyControlUrl =
  "https://www.moneycontrol.com/mc-buzz/ashoka-school-of-business-launches-pgdm-in-ai-data-science-for-quant-finance-with-3-crore-live-trading-fund-article-13554673.html";

const studentsGraduateWith = [
  "Exposure to a ₹50 lakh live portfolio",
  "Strong understanding of markets, risk, and behaviour",
  "Multiple industry-recognised certifications",
  "Job-ready technical skills (Python, SQL, Power BI)",
  "Personal finance discipline for life",
  "A professionally backtested capstone project",
  "Internship and placement readiness",
];

const careerPathways = [
  {
    title: "Trading & Markets Roles",
    roles: [
      "Equity / Derivatives Trader",
      "Technical or Quant Analyst",
      "Algo Trading Intern",
      "Market Research Analyst",
    ],
  },
  {
    title: "Finance & Global Bank (GCC) Roles",
    roles: [
      "Investment Banking Operations",
      "Global Markets Operations",
      "Fund Accounting & Custody",
      "Wealth Management Advisory",
    ],
  },
  {
    title: "FinTech & Analytics Roles",
    roles: [
      "Market Data Analyst",
      "Risk & Reporting Analyst",
      "Trading Technology Support",
    ],
  },
];

const curriculumRows = [
  {
    title: "Semester 1 - Foundations + Live Markets",
    rows: [
      "Financial Markets",
      "Market Microstructure",
      "Quantitative Methods",
      "Financial Statement Analysis",
      "Economics",
      "Behavioral Finance",
    ],
  },
  {
    title: "Semester 2 - Technicals, Derivatives & Personal Finance Basics",
    rows: [
      "Technical Analysis I & II",
      "Derivatives",
      "Volatility",
      "Personal Finance: Planning & Insurance",
    ],
  },
  {
    title: "Semester 3 - Global Markets & Asset Management",
    rows: [
      "Global Markets",
      "Fixed Income",
      "Asset Management",
      "Investment Banking Operations",
      "Personal Finance: Wealth Planning & Taxation",
    ],
  },
  {
    title: "Semester 4 - Quant, Algo & Portfolio Management",
    rows: [
      "Portfolio Management",
      "Algorithmic Trading",
      "Advanced Quant Methods",
    ],
  },
];

const recruiterTable = [
  {
    category: "Indian Stock Exchanges & Brokerages",
    examples: "NSE, BSE, Motilal Oswal, ICICI Securities, HDFC Securities",
    business:
      "Trade execution, brokerage services, market surveillance, research & advisory",
    learn:
      "Market microstructure, trading systems, order flow, live market behaviour",
    trust:
      "Stable finance careers; understanding markets as a system, not gambling",
  },
  {
    category: "Asset Management Companies (AMCs), PMS & AIFs",
    examples:
      "SBI Mutual Fund, HDFC Asset Management, Axis Mutual Fund, Marcellus Investment Managers",
    business:
      "Managing long-term investor money, equity & fixed-income research, portfolio building",
    learn:
      "Financial statement analysis, behavioural finance, portfolio & risk management",
    trust:
      "Teaches capital protection, patience, and discipline-not speculation",
  },
  {
    category: "Global Investment Banks (India Offices & GCCs)",
    examples: "Goldman Sachs, JP Morgan Chase, Morgan Stanley, Citi, HSBC",
    business:
      "Global markets operations, trade lifecycle, risk & compliance, analytics",
    learn: "Global markets, derivatives, IB operations, Bloomberg, Power BI",
    trust: "Safe, globally respected careers with structured growth",
  },
  {
    category: "Hedge Funds & Buy-Side Firms (Hiring in India)",
    examples: "DE Shaw, WorldQuant, AQR Capital Management, Two Sigma",
    business:
      "Research-driven investing, quantitative strategies, risk modelling",
    learn: "Quant methods, Python, backtesting, volatility & drawdown control",
    trust: "Research-oriented, logic-based finance-not thrill-based trading",
  },
  {
    category: "Proprietary Trading Desks (India & India-Linked)",
    examples:
      "Tower Research Capital, AlphaGrep, Graviton Research Capital, iRage",
    business: "Trading firm's own capital with strict rules and risk limits",
    learn:
      "Technical analysis, derivatives, rule-based trading, live portfolio learning",
    trust: "Highly disciplined environment; rules, accountability, no gambling",
  },
  {
    category: "FinTech, Market Data & Analytics Firms",
    examples: "Zerodha, Upstox, Groww, CRISIL, Morningstar India",
    business:
      "Trading platforms, market data, risk analytics, reporting systems",
    learn: "Python, SQL, Power BI, market data interpretation",
    trust:
      "Combines technology + finance, strong demand and career flexibility",
  },
];

const electives = [
  "Equity Research",
  "Advanced Technical Analysis",
  "Global Derivatives",
  "FinTech / WealthTech",
  "Treasury & Markets",
];

const PGDMSecuritiesPage = () => {
  return (
    <div className="pt-0 md:pt-20 bg-background overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground section-padding">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/35 to-transparent" />
        </div>

        <div className="container-wide relative z-10">
          <SectionFadeIn>
            <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-[0.28em] mb-4">
                  In the news
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight">
                  PGDM in Securities Market
                </h1>
                <p className="mt-5 max-w-3xl text-primary-foreground/85 text-lg leading-relaxed">
                  A 2-Year, Market-Driven Management Program at Ashoka School of
                  Business
                </p>
                <p className="mt-3 max-w-3xl text-primary-foreground/80 text-base md:text-lg leading-relaxed">
                  Build Careers in Trading, Investments, Research, and Global
                  Finance
                </p>
                <p className="mt-3 max-w-3xl text-primary-foreground/75 text-base md:text-lg leading-relaxed">
                  This program is designed for students who want to work with
                  financial markets professionally, not just study them from
                  textbooks.
                </p>

                <div className="mt-12 flex flex-wrap gap-3">
                  {/* <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-white/10 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/15"
                  >
                    <Download className="h-4 w-4" />
                    Download brochure
                  </Link> */}
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_rgba(234,179,8,0.2)] transition-colors hover:bg-primary/90"
                  >
                    Apply Now for PGDM QF
                  </Link>
                </div>
              </div>

              <a
                href={moneyControlUrl}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-[1.5rem] border border-primary/25 bg-background/10 p-3 backdrop-blur-sm shadow-[0_18px_50px_rgba(15,23,42,0.22)] transition-all hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.3)]"
              >
                <div className="overflow-hidden rounded-[1.1rem] border border-white/20">
                  <img
                    src={moneyControlImage}
                    alt="MC-ASB"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between gap-3 text-primary-foreground">
                  <div>
                    <p className="text-sm font-bold">Money Control Article</p>
                    <p className="text-xs text-primary-foreground/75">
                      Open article in new tab
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0" />
                </div>
              </a>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="mt-2 mb-8 rounded-2xl border border-primary/20 bg-primary/5 p-4 md:p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-primary font-bold">
                Program Details
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-black text-foreground">
                PGDM in Securities Markets
              </h2>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                Explore each section through the accordion below.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="space-y-4"
            >
              <AccordionItem
                value="item-1"
                className="rounded-2xl border border-border bg-white px-5"
              >
                <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                  Why This Program Exists
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Most finance programs:
                  </p>
                  <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                    <li>Teach what markets are</li>
                    <li>
                      Rarely teach how professionals actually work in markets
                    </li>
                  </ul>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    This PGDM is built to close that gap.
                  </p>

                  <h4 className="mt-8 text-xl md:text-2xl font-black text-foreground">
                    What Makes It Different
                  </h4>
                  <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                    <li>
                      Students learn by observing and analysing real money, not
                      simulations alone
                    </li>
                    <li>
                      They develop decision-making discipline, not gambling
                      behaviour
                    </li>
                    <li>
                      They graduate job-ready for trading desks, research teams,
                      and global finance roles
                    </li>
                  </ul>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Key Highlight (Parent-Friendly Explanation):
                  </p>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    A ₹50 lakh faculty-managed live portfolio is used throughout
                    the program.
                  </p>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Students do not trade recklessly-they study how
                    professionals manage money, risk, and emotions using real
                    market data.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="rounded-2xl border border-border bg-white px-5"
              >
                <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                  Live Markets Learning from Day One
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Why this matters:
                  </p>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Finance employers want candidates who understand how markets
                    behave in real time, not just exam answers.
                  </p>
                  <h4 className="mt-7 text-xl md:text-2xl font-black text-foreground">
                    What Students Actually Do
                  </h4>
                  <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                    <li>Observe real trades placed by experienced faculty</li>
                    <li>Review weekly:</li>
                    <li>Why a trade was taken</li>
                    <li>How risk was controlled</li>
                    <li>What could go wrong</li>
                    <li>Learn market psychology:</li>
                    <li>Why fear and greed affect prices</li>
                    <li>Why patience matters more than prediction</li>
                  </ul>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Outcome:
                  </p>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Students stop seeing markets as "quick money" and start
                    seeing them as a profession with rules and discipline.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="rounded-2xl border border-border bg-white px-5"
              >
                <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                  Curriculum Inspired by Global Market Standards (CMT + CQF
                  Thinking)
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    This program blends:
                  </p>
                  <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                    <li>Technical analysis (how prices move)</li>
                    <li>Quantitative thinking (data-driven decisions)</li>
                    <li>Derivatives & volatility (risk and protection)</li>
                    <li>Backtesting (testing strategies before using them)</li>
                  </ul>
                  <p className="mt-5 text-muted-foreground leading-relaxed">
                    Why this matters to employers:
                  </p>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Prop desks, funds, and banks want freshers who:
                  </p>
                  <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                    <li>Think in probabilities</li>
                    <li>Respect risk</li>
                    <li>Understand systems, not tips</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="rounded-2xl border border-border bg-white px-5"
              >
                <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                  Industry-Grade Tools (What Professionals Actually Use)
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Students train on tools commonly used across:
                  </p>
                  <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                    <li>Trading desks</li>
                    <li>Research teams</li>
                    <li>Global banks and GCCs</li>
                  </ul>
                  <h4 className="mt-7 text-xl md:text-2xl font-black text-foreground">
                    Tools Covered
                  </h4>
                  <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-muted-foreground leading-relaxed list-disc list-inside">
                    <li>Bloomberg Terminal</li>
                    <li>NSE Smart Lab (Indian markets)</li>
                    <li>TradingView (charting & analysis)</li>
                    <li>Python & SQL (data & quant roles)</li>
                    <li>Power BI (dashboards & reporting)</li>
                    <li>Pine Script (strategy logic)</li>
                  </ul>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Parent reassurance:
                  </p>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    These are employability tools, not speculative apps.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="rounded-2xl border border-border bg-white px-5"
              >
                <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                  Professional Certifications (Recognised by Industry)
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Students graduate with credible credentials, not just a
                    degree.
                  </p>
                  <h4 className="mt-7 text-xl md:text-2xl font-black text-foreground">
                    Included Certifications
                  </h4>
                  <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                    <li>Bloomberg Market Concepts (BMC)</li>
                    <li>Bloomberg ESG</li>
                    <li>NISM Derivatives</li>
                    <li>NISM Research Analyst</li>
                    <li>Curated Coursera & DataCamp certifications</li>
                  </ul>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Why this matters:
                  </p>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Certifications signal serious intent and baseline competence
                    to recruiters.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="rounded-2xl border border-border bg-white px-5"
              >
                <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                  Personal Finance Foundation (4 Dedicated Subjects)
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    This is a non-negotiable pillar of the program.
                  </p>
                  <h4 className="mt-7 text-xl md:text-2xl font-black text-foreground">
                    What Students Learn
                  </h4>
                  <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                    <li>Budgeting and money discipline</li>
                    <li>Insurance and risk protection</li>
                    <li>Long-term wealth planning</li>
                    <li>Taxation and retirement basics</li>
                  </ul>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Parent takeaway:
                  </p>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Even if a student doesn't become a trader, they:
                  </p>
                  <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                    <li>Manage their own money responsibly</li>
                    <li>Avoid common financial mistakes</li>
                    <li>Build long-term financial stability</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="rounded-2xl border border-border bg-white px-5"
              >
                <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                  Internship-Ready by the End of Year One
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Unlike traditional programs where exposure comes late:
                  </p>
                  <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                    <li>
                      Students start understanding markets from Semester 1
                    </li>
                  </ul>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    By Year One:
                  </p>
                  <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                    <li>They can read charts</li>
                    <li>Understand derivatives basics</li>
                    <li>Explain market movements confidently</li>
                  </ul>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Result:
                  </p>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Higher confidence and better conversion during internships
                    in:
                  </p>
                  <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-muted-foreground leading-relaxed list-disc list-inside">
                    <li>Brokerages</li>
                    <li>Research firms</li>
                    <li>Wealth desks</li>
                    <li>FinTech platforms</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-10 rounded-2xl border border-border bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
              <h3 className="text-2xl md:text-3xl font-black text-foreground">
                Know More: Trimester-wise Curriculum
              </h3>
              <div className="mt-6 space-y-5">
                {curriculumRows.map((semester) => (
                  <div
                    key={semester.title}
                    className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_6px_18px_rgba(15,23,42,0.05)]"
                  >
                    <div className="bg-primary px-4 py-3 text-sm md:text-base font-bold text-primary-foreground">
                      S.No | {semester.title}
                    </div>
                    <div className="divide-y divide-border/70">
                      {semester.rows.map((subject, index) => (
                        <div
                          key={subject}
                          className="grid grid-cols-[60px_1fr] px-4 py-2.5 text-sm md:text-base text-foreground"
                        >
                          <span className="font-semibold text-primary">
                            {index + 1}
                          </span>
                          <span>{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-5 md:p-6">
                <p className="font-bold text-foreground">
                  Electives* (Choose 2): Please Overlook for now
                </p>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-foreground">
                  {electives.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium shadow-sm"
                    >
                      {index + 1}. {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
              <h3 className="text-2xl md:text-3xl font-black text-foreground">
                Career Pathways
              </h3>
              <p className="mt-2 text-muted-foreground">
                Graduates of the PGDM-Securities Markets will be ready for
                leadership roles such as:
              </p>
              <div className="mt-5 grid md:grid-cols-3 gap-4">
                {careerPathways.map((path, idx) => (
                  <div
                    key={path.title}
                    className="rounded-2xl border border-primary/30 bg-background p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-transform hover:-translate-y-1"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                      0{idx + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-black text-foreground">
                      {path.title}
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed">
                      {path.roles.map((role) => (
                        <li key={role}>{role}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link
                  to="/contact-us"
                  className="inline-flex rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="mt-8 rounded-[1.8rem] border border-border bg-gradient-to-br from-white to-secondary/20 p-5 md:p-7 shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-black text-foreground">
                  What Students Graduate With
                </h3>
                <span className="hidden md:inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  Outcomes
                </span>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {studentsGraduateWith.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground font-medium shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[11px] font-black text-primary">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mt-10 text-2xl md:text-3xl font-black text-foreground">
                Admissions
              </h3>
              <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl border border-border bg-white p-5 text-muted-foreground leading-relaxed shadow-sm">
                  <ul className="space-y-2">
                    <li>Open to graduates from any discipline</li>
                    <li>
                      Ideal for students with curiosity, discipline, and
                      interest in markets
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 shadow-sm">
                  <p className="font-semibold text-foreground">
                    Selection via:
                  </p>
                  <ol className="mt-3 list-decimal list-inside space-y-1 text-foreground/90">
                    <li>Entrance test</li>
                    <li>Personal interview</li>
                  </ol>
                </div>
              </div>

              <h3 className="mt-10 text-2xl md:text-3xl font-black text-foreground">
                Final One Line Summary
              </h3>
              <div className="mt-4 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-5 py-5 shadow-sm">
                <p className="text-base md:text-lg font-semibold text-foreground leading-relaxed">
                  This program trains students to respect money, understand
                  markets deeply, and build stable careers in modern
                  finance-without gambling or shortcuts.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
              <h3 className="text-2xl md:text-3xl font-black text-foreground">
                Recruiter Category
              </h3>
              <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white">
                <table className="w-full min-w-[1100px] text-sm">
                  <thead>
                    <tr className="bg-[linear-gradient(120deg,rgba(220,38,38,0.12),rgba(2,132,199,0.08))] text-left">
                      <th className="px-4 py-3 text-left font-bold text-foreground">
                        Recruiter Category
                      </th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">
                        Who These Recruiters Are (Examples)
                      </th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">
                        Core Business (What They Actually Do)
                      </th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">
                        What the Student Learns in This PGDM
                      </th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">
                        Why Parents Can Trust This Career Path
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recruiterTable.map((row, index) => (
                      <tr
                        key={row.category}
                        className={
                          index % 2 === 0
                            ? "bg-secondary/20 hover:bg-secondary/30"
                            : "bg-background hover:bg-secondary/15"
                        }
                      >
                        <td className="px-4 py-3 align-top font-semibold text-foreground">
                          {row.category}
                        </td>
                        <td className="px-4 py-3 align-top text-muted-foreground">
                          {row.examples}
                        </td>
                        <td className="px-4 py-3 align-top text-muted-foreground">
                          {row.business}
                        </td>
                        <td className="px-4 py-3 align-top text-muted-foreground">
                          {row.learn}
                        </td>
                        <td className="px-4 py-3 align-top text-muted-foreground">
                          {row.trust}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </div>
  );
};

export default PGDMSecuritiesPage;
