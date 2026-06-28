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
  "To train the students to be abreast of changing HR Practices.",
  "To familiarize the students with technology applications in HRM.",
  "To create and sustain data driven organization culture.",
];

const takeaways = [
  "The ability to become game-changers in the HR functions",
  "Strong ability to analyze data to develop future strategies related to HR",
  "Data driven Human Capital Management capabilities",
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
    hasCategory: false,
    rows: [
      { subject: "Business Research Methods (using R)" },
      { subject: "Corporate Finance" },
      { subject: "Organizational Behaviour 2" },
      { subject: "Human Resource Management" },
      { subject: "Introduction to HR Analytics" },
      { subject: "Information Systems Management" },
    ],
  },
  {
    title: "TRIMESTER - IV",
    hasCategory: true,
    rows: [
      { category: "Core", subject: "Data visualisation and Power BI" },
      { category: "Core", subject: "Learning and Development" },
      {
        category: "Core",
        subject: "Decision making skills using data analytics",
      },
      {
        category: "Conflict and negotiation skills",
        subject: "Performance management & competency mapping",
      },
      { category: "Elective", subject: "Conflict and negotiation skills" },
      {
        category: "Elective",
        subject: "Cross cultural & interpersonal human resources management",
      },
      { category: "Elective", subject: "Design thinking and innovation" },
      {
        category: "Elective",
        subject: "Strategy execution including economics of strategy",
      },
      { category: "Elective", subject: "Labour Laws" },
      { category: "Elective", subject: "Digital Marketing" },
    ],
    note: "*Choose 2 electives out of 6",
  },
  {
    title: "TRIMESTER - V",
    hasCategory: true,
    rows: [
      {
        category: "Core",
        subject:
          "Projecting future performance by using associative statistics",
      },
      { category: "Core", subject: "Compensation management and HR audit" },
      {
        category: "Core",
        subject: "Analysis of attrition using descriptive statistics",
      },
      { category: "Elective", subject: "New Venture planning" },
      {
        category: "Elective",
        subject: "Analysis of Attrition using descriptive analytics",
      },
      { category: "Elective", subject: "People analytics" },
      { category: "Elective", subject: "Risk Management" },
      { category: "Elective", subject: "Managing Change and Transformation" },
      { category: "Elective", subject: "Project management" },
    ],
    note: "*Choose 3 electives out of 6",
  },
  {
    title: "TRIMESTER - VI",
    hasCategory: true,
    rows: [
      {
        category: "Elective",
        subject: "Data driven decision making and reporting",
      },
      { category: "Elective", subject: "Motivation and Incentives" },
      { category: "Elective", subject: "Design thinking and innovation" },
      {
        category: "Elective",
        subject: "Managing interpersonal and group process",
      },
      { category: "Elective", subject: "Fundamentals of industrial relations" },
      { category: "Elective", subject: "Business intelligence" },
    ],
  },
];

const PGDMHRPage = () => {
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
                PGDM - HR AND HR ANALYTICS
              </h1>
              <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-primary-foreground/90">
                With the winds of change sweeping across the globe, the
                organizations have to address the cataclysmic changes in the
                eternal triangle of People, Structure and Technology to stay
                afloat; to meet competition and emerge winners. Such being the
                importance human resource management has to adapt a model which
                constantly absorbs all the shocks waiting for it in the
                environment and excel to meet the stakeholders aspirations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/apply"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="/pgdm-hr-management-with-analytics-courses-in-hyderabad#curriculum"
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
                  Human Resource department in any industry, HR department of
                  start-ups, HR consulting firms, HCM software companies,
                  Technology driven recruitment firms
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
                    Human Resource Management Courses in Hyderabad
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Pursuing Human resource management courses in Hyderabad is
                      an excellent choice for individuals who want to build a
                      rewarding career in HR. With the increasing demand for
                      skilled HR professionals, many students are seeking
                      admission to MBA HR colleges in Hyderabad to gain
                      expertise in workforce management, employee relations, and
                      HR analytics. Choosing one of the best MBA HR colleges in
                      Hyderabad ensures access to comprehensive training,
                      industry exposure, and excellent placement opportunities.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Top MBA HR Colleges in Hyderabad
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Among the top MBA HR colleges in Hyderabad, Human resource
                      management colleges in Hyderabad, ASB stands out for
                      offering specialized courses that integrate HR with
                      analytics. The program is designed to equip students with
                      advanced HRM concepts, strategic decision-making skills,
                      and analytical capabilities. For those aiming for
                      leadership roles, enrolling in Human resource management
                      courses in Hyderabad provides a deep understanding of
                      talent acquisition, performance management, and workforce
                      planning.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    HR Analytics Programs and Demand
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Aspirants looking for a career in HR analytics should
                      explore pgdm HR management colleges in Hyderabad, which
                      focus on integrating data-driven insights into HR
                      functions. As organizations shift towards digital HR
                      solutions, professionals with expertise from pgdm hr
                      colleges in Hyderabad are in high demand. Choosing HR
                      analytics colleges in Hyderabad provides students with
                      knowledge of HR technologies, predictive analytics, and
                      strategic workforce planning, making them valuable assets
                      to organizations.
                    </p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      Additionally, those interested in other management fields
                      can explore MBA colleges in Hyderabad to find a program
                      that aligns with their career aspirations.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Analytics-Driven HR Strategies
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      For students interested in analytics-driven HR strategies,
                      pgdm HR analytics colleges in Hyderabad offer cutting-edge
                      curricula. These programs cover essential HR management
                      concepts and advanced analytics tools that aid in
                      effective decision-making. Pursuing HR studies from HR
                      management colleges in Hyderabad ensures exposure to
                      practical training, industry-relevant projects, and
                      networking opportunities with HR leaders.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Faculty, Partnerships, and Curriculum Strength
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      One of the key advantages of studying at MBA HR colleges
                      in Hyderabad is access to top-tier faculty and industry
                      partnerships that enhance learning outcomes. Leading
                      institutions provide specialized training that aligns with
                      the latest industry trends. When selecting from the best
                      MBA HR colleges in Hyderabad, students should consider
                      factors like curriculum quality, placement records, and
                      faculty expertise.
                    </p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      Moreover, candidates seeking tech-integrated HR courses
                      can check Artificial intelligence colleges in Hyderabad to
                      explore AI-driven HR programs. Choosing the right
                      institution, such as ASB, ensures access to modern HR
                      methodologies and analytical tools essential for a
                      successful HR career.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Industry Readiness and Outcomes
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      With a strong emphasis on HR analytics, top MBA HR
                      colleges in Hyderabad prepare students for evolving
                      industry challenges. Advanced HR tools and techniques
                      taught in Human resource management courses in Hyderabad
                      help students gain practical insights into talent
                      management, compensation structuring, and workforce
                      analytics. Graduates from the best MBA HR colleges in
                      Hyderabad are equipped to handle diverse HR functions
                      across various industries.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-7"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Placement Support and Career Guidance
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      ASB offers a comprehensive HR program that integrates
                      traditional HR practices with data analytics, making it
                      one of the preferred choices among top MBA HR colleges in
                      Hyderabad, Human resource management colleges in
                      Hyderabad. The institution's placement support ensures
                      students secure roles in reputed organizations.
                    </p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      For students looking for the best institutions offering
                      placement support, Top mba colleges in Hyderabad with
                      placements provide extensive career guidance and
                      networking opportunities. With increasing industry demand
                      for HR professionals with analytics expertise, pursuing
                      Human resource management courses in Hyderabad from a
                      reputed institute like ASB enhances career prospects
                      significantly.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-8"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Conclusion
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      In conclusion, selecting one of the MBA HR colleges in
                      Hyderabad with a focus on HR analytics is a strategic
                      decision for aspiring HR professionals. With courses
                      designed to meet industry needs, best MBA HR colleges in
                      Hyderabad ensure students are equipped with practical
                      knowledge and analytical skills. The right choice among
                      top MBA HR colleges in Hyderabad, Human resource
                      management courses in Hyderabad can open doors to
                      rewarding career opportunities in HR and analytics.
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
                              ? "grid grid-cols-[60px_180px_1fr] px-4 py-2.5 text-sm md:text-base text-foreground"
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
                    {semester.note ? (
                      <p className="px-4 py-3 text-xs md:text-sm font-semibold text-muted-foreground">
                        {semester.note}
                      </p>
                    ) : null}
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

export default PGDMHRPage;
