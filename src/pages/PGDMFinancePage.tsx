import SectionFadeIn from "@/components/SectionFadeIn";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const objectives = [
  "To provide a perspective view of Finance and Banking.",
  "To provide the students with transactional approach and the transformational experience.",
  "Moulding the students into future leaders of business.",
];

const takeaways = [
  "Strong knowledge across different sub-domains of Finance function",
  "Right foundation for future CFO/ Finance Director roles",
  "Deep understanding of the rapidly growing Fintech industry",
];

const curriculumRows = [
  {
    title: "TRIMESTER - I",
    hasCategory: false,
    rows: [
      { subject: "Business Communication and Cognitive skills 1" },
      { subject: "Organizational behavior 1" },
      { subject: "Microeconomics" },
      { subject: "Financial Accounting" },
      { subject: "Marketing Management" },
      { subject: "Quantitative Techniques 1 (BS)" },
    ],
  },
  {
    title: "TRIMESTER - II",
    hasCategory: false,
    rows: [
      { subject: "Computer Applications for Business" },
      { subject: "Introduction to R/Python Programming" },
      { subject: "Operations Management" },
      { subject: "Quantitative Techniques 2 (OR)" },
      { subject: "Business Communication and Cognitive Skills 2" },
      { subject: "Macroeconomics" },
    ],
  },
  {
    title: "TRIMESTER - III",
    hasCategory: true,
    rows: [
      { category: "Core", subject: "Auditing and Attestation" },
      { category: "Core", subject: "Cost Accounting" },
      { category: "Core", subject: "Cyber Security and Block chain 1" },
      { category: "Elective", subject: "Investment Management" },
      { category: "Elective", subject: "Information system management" },
      { category: "Elective", subject: "Digital Transformation" },
      { category: "Elective", subject: "Negotiations and Conflict Management" },
      {
        category: "Elective",
        subject: "Financial modelling (using Excel & XLMiner)",
      },
      { category: "Elective", subject: "Crypto Currency" },
      { category: "Elective", subject: "SAP End user training" },
    ],
  },
  {
    title: "TRIMESTER - IV",
    hasCategory: true,
    rows: [
      { category: "Core", subject: "Cyber Security and Block Chain 2" },
      { category: "Core", subject: "Financial Derivatives" },
      {
        category: "Core",
        subject: "Introduction to AI and ML from a front end user perspective.",
      },
      { category: "Elective", subject: "Mergers and Acquisitions" },
      { category: "Elective", subject: "Business Simulations" },
      { category: "Elective", subject: "Strategic Management & analysis" },
      { category: "Elective", subject: "Entrepreneurship" },
      { category: "Elective", subject: "Portfolio Management" },
      { category: "Elective", subject: "Direct & Indirect Taxes" },
      { category: "Elective", subject: "Entrepreneurial Finance" },
    ],
  },
  {
    title: "TRIMESTER - V",
    hasCategory: true,
    rows: [
      { category: "Elective", subject: "Integrated Marketing Communications" },
      { category: "Elective", subject: "Business Valuation" },
      { category: "Elective", subject: "Fixed Income Securities" },
      { category: "Elective", subject: "Business Law" },
      { category: "Elective", subject: "Planning, Budgeting & Consolidation" },
      { category: "Elective", subject: "B2B Marketing" },
    ],
  },
];

const PGDMFinancePage = () => {
  return (
    <div className="pt-0 md:pt-20 bg-background overflow-x-clip">
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.22),transparent_46%),radial-gradient(circle_at_80%_0%,rgba(2,132,199,0.24),transparent_38%),linear-gradient(145deg,#0f172a,#1e293b)] text-primary-foreground section-padding">
        <div className="container-wide relative z-10">
          <SectionFadeIn>
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em]">
                Our Programs
              </p>
              <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight">
                PGDM - FINANCE AND FINTECH
              </h1>
              <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-primary-foreground/90">
                With the advent and use of technology in all domains of finance
                the shelf life of each process has been reduced considerably.
                This regulations and practices approved by the apex bodies.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="/pgdm-mba-finance-with-fintech-colleges-in-hyderabad#curriculum"
                  className="inline-flex items-center rounded-lg border border-primary-foreground/35 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
                >
                  View Curriculum
                </a>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-6xl mx-auto">
          <SectionFadeIn>
            <div className="grid gap-5 lg:grid-cols-3">
              <div className="rounded-2xl border border-primary/20 bg-primary p-6 text-primary-foreground shadow-[0_16px_34px_rgba(220,38,38,0.35)]">
                <h2 className="text-2xl font-black">Objectives</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                  {objectives.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-[2px] h-4 w-4 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                <h2 className="text-2xl font-black text-foreground">
                  Key Takeaways
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {takeaways.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-[2px] h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary/50 to-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                <h2 className="text-2xl font-black text-foreground">
                  Potential Recruiters
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The students will get placed in Corporate Finance roles across
                  a wide array of industries, Fintech companies, Financial
                  consulting companies, Banks and Investment banking
                  organizations.
                </p>
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn>
            <div className="mt-10 rounded-[1.7rem] border border-border bg-white p-4 md:p-6 shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
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
                    MBA Finance Colleges in Hyderabad
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Choosing the right MBA finance colleges in Hyderabad is
                      crucial for aspiring finance professionals looking to
                      build a successful career in the dynamic world of finance
                      and fintech. Hyderabad, a thriving hub for business and
                      technology, offers some of the best institutions for
                      finance and fintech education. If you are seeking
                      top-quality education, MBA in finance colleges in
                      Hyderabad provide a comprehensive curriculum that equips
                      students with financial management, investment analysis,
                      risk assessment, and fintech innovations.
                    </p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      With excellent placement records should explore MBA
                      colleges in Hyderabad. These institutions provide rigorous
                      training, industry internships, and strong corporate
                      connections, ensuring high placement rates.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Why Choose Hyderabad for an MBA in Finance?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Hyderabad is home to some of the top MBA finance colleges
                      in Hyderabad, offering industry-oriented programs that
                      integrate financial studies with emerging fintech trends.
                      These colleges provide hands-on learning experiences,
                      state-of-the-art financial labs, and collaborations with
                      leading financial institutions. The growing financial
                      sector in Hyderabad makes it an ideal destination for
                      students aspiring to make a mark in banking, investment,
                      and financial technology.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Advanced Curriculum in Finance and Fintech
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      The MBA finance colleges in Hyderabad offer a
                      well-structured program covering core financial subjects
                      such as corporate finance, portfolio management,
                      international finance, and fintech applications. With an
                      increasing emphasis on technology in finance, institutions
                      are now incorporating fintech specializations, making MBA
                      in finance colleges in Hyderabad more relevant to the
                      current industry demands. Students gain knowledge of
                      blockchain, digital banking, and data-driven financial
                      decision-making, ensuring they are well-prepared for the
                      evolving financial landscape.
                    </p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      For students with an interest in analytics and its impact
                      on finance, MBA business analytics colleges in Hyderabad
                      offer specialized courses that enhance data-driven
                      decision-making skills. These programs complement finance
                      studies by integrating financial analytics, risk
                      management, and investment modeling, making graduates
                      highly sought after in the financial sector.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Career Opportunities and Industry Demand
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Graduating from one of the top MBA finance colleges in
                      Hyderabad, MBA in finance colleges in Hyderabad, opens
                      doors to lucrative career opportunities in banking,
                      investment firms, financial consultancy, fintech startups,
                      and multinational corporations. With a strong network of
                      alumni and placement assistance, students can secure
                      high-paying roles in asset management, risk analysis, and
                      financial planning. Institutions that focus on fintech
                      provide a competitive edge by aligning their curriculum
                      with digital advancements in the financial industry.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Best Colleges for MBA Finance in Hyderabad
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      For students aiming to specialize in financial technology,
                      pgdm fintech colleges in Hyderabad, MBA fintech colleges
                      in Hyderabad, offer specialized courses that blend
                      financial principles with technological innovations. These
                      programs help students stay ahead in the competitive
                      financial sector by understanding the impact of artificial
                      intelligence, cryptocurrency, and digital transactions in
                      finance. If you are looking for the best colleges for MBA
                      finance in Hyderabad, MBA banking and finance colleges in
                      Hyderabad, consider institutions that integrate fintech
                      studies into their finance programs.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    The Rise of Fintech Education
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      With the rapid growth of digital financial services,
                      fintech colleges in Hyderabad, top MBA finance colleges in
                      Hyderabad, are gaining popularity among students who wish
                      to explore opportunities in digital banking, blockchain
                      technology, and fintech startups. Institutions that offer
                      MBA fintech colleges in Hyderabad, MBA finance management
                      colleges in Hyderabad, focus on equipping students with
                      the necessary skills to excel in a technology-driven
                      financial ecosystem. This makes an MBA finance management
                      colleges in Hyderabad program even more valuable for those
                      looking to specialize in financial strategy and fintech
                      solutions.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-7"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Leading Institutions with Excellent Placements
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Students looking for reputed MBA finance colleges in
                      Hyderabad, top MBA finance colleges in Hyderabad,
                      Furthermore, those interested in specialized fintech roles
                      should explore programs at colleges listed under Top MBA
                      colleges in Hyderabad with placements, where students
                      benefit from strong industry ties and job opportunities.
                    </p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      By choosing the right MBA finance colleges in Hyderabad,
                      MBA banking and finance colleges in Hyderabad, students
                      can ensure they receive top-notch education, practical
                      exposure, and strong career prospects in the ever-evolving
                      world of finance and fintech.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </SectionFadeIn>

          <SectionFadeIn>
            <div
              id="curriculum"
              className="mt-10 rounded-2xl border border-border bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
            >
              <h3 className="text-2xl md:text-3xl font-black text-foreground text-center">
                CURRICULUM
              </h3>
              <div className="mt-6 space-y-5">
                {curriculumRows.map((semester) => (
                  <div
                    key={semester.title}
                    className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_6px_18px_rgba(15,23,42,0.05)]"
                  >
                    <div className="bg-primary px-4 py-3 text-sm md:text-base font-bold text-primary-foreground">
                      {semester.hasCategory
                        ? `${semester.title} | S.No | Category | Subject`
                        : `${semester.title} | S.No | Subject`}
                    </div>
                    <div className="divide-y divide-border/70">
                      {semester.rows.map((row, index) => (
                        <div
                          key={`${semester.title}-${row.subject}`}
                          className={
                            semester.hasCategory
                              ? "grid grid-cols-[60px_120px_1fr] px-4 py-2.5 text-sm md:text-base text-foreground"
                              : "grid grid-cols-[60px_1fr] px-4 py-2.5 text-sm md:text-base text-foreground"
                          }
                        >
                          <span className="font-semibold text-primary">
                            {index + 1}
                          </span>
                          {semester.hasCategory ? (
                            <span className="font-medium">{row.category}</span>
                          ) : null}
                          <span>{row.subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </div>
  );
};

export default PGDMFinancePage;
