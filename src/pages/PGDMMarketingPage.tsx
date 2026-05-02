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
  "To prepare students to comprehend the changing face of marketing by equipping them with the requisite knowledge and skills.",
  "Strongly drive data driven methods into Marketing.",
  "Imparting technology enabled marketing practices.",
];

const takeaways = [
  "Cutting-edge skillsets involving digital interventions in Marketing",
  "Hands-on exposure to the application of technology in Marketing",
  "Industry-ready methodologies to be successful in any Marketing role",
];

const curriculumRows = [
  {
    title: "TRIMESTER - I",
    hasCategory: false,
    rows: [
      { subject: "Business Communication & Cognitive skills 1" },
      { subject: "Organizational behavior 1" },
      { subject: "Micro Economics" },
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
      { subject: "Marketing research" },
      { subject: "Managerial Accounting" },
      { subject: "Sales and Distribution" },
    ],
  },
  {
    title: "TRIMESTER - IV",
    hasCategory: true,
    rows: [
      { category: "Core", subject: "Business Model Innovation" },
      { category: "Core", subject: "International Business & Globalization" },
      { category: "Core", subject: "Services Marketing" },
      {
        category: "Elective",
        subject: "Neuro-Marketing and Consumer Behaviour",
      },
      { category: "Elective", subject: "Value Proposition design" },
      { category: "Elective", subject: "Integrated Marketing Communication" },
      { category: "Elective", subject: "Negotiations & Conflict Management" },
      {
        category: "Elective",
        subject: "Decision Modeling Analysis with Spread sheets",
      },
      { category: "Elective", subject: "SAS for Data Analytics" },
      { category: "Elective", subject: "Business Intelligence and Analytics" },
    ],
    note: "*Choose 3 electives out of 7",
  },
  {
    title: "TRIMESTER - V",
    hasCategory: true,
    rows: [
      {
        category: "Core",
        subject: "Digital Marketing and Social Media Strategy",
      },
      { category: "Core", subject: "Strategic Marketing" },
      { category: "Core", subject: "Brand Management" },
      {
        category: "Core",
        subject: "Marketing Analysis & Decision Making with SPSS",
      },
      { category: "Elective", subject: "Innovation Analytics with SAS" },
      { category: "Elective", subject: "Customer Analytics with SAS" },
      { category: "Elective", subject: "Conquering Complexity in Business" },
      { category: "Elective", subject: "Blue Ocean Strategy" },
      { category: "Elective", subject: "Business Forecasting" },
    ],
    note: "*Choose 3 electives out of 6",
  },
  {
    title: "TRIMESTER - VI",
    hasCategory: true,
    rows: [
      { category: "Elective", subject: "Design Thinking & Innovation" },
      { category: "Elective", subject: "Advanced Business Analytics" },
      { category: "Elective", subject: "Strategy for Business Analytics" },
      { category: "Elective", subject: "Marketing Optimization" },
      { category: "Elective", subject: "Customer Relationship Management" },
      { category: "Elective", subject: "Predictive Marketing" },
    ],
  },
];

const PGDMMarketingPage = () => {
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
                PGDM - MARKETING AND BUSINESS ANALYTICS
              </h1>
              <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-primary-foreground/90">
                In the present world, the consumers are changing with a
                lightning pace. Every day they are being exposed to new gadgets,
                new media, new types of messaging and new brands. The
                attention-expansion of the new-age customers is shortening, and
                hence the competition to grab their mindshare is intensifying.
                Marketing has never been so challenging yet interesting.
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
                  href="/pgdm-marketing-business-analytics-colleges-in-hyderabad#curriculum"
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
                  The students, after completion of this course, will become a
                  perfect choice for the recruiters over a wide range of
                  industries - FMCG, B2B, Retail Marketing, Digital Marketing &
                  Branding, Management Consulting, Data Science, Strategic
                  Planning and the like.
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
                    MBA Business Analytics Colleges in Hyderabad - Transform
                    Your Career with ASB
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      In today's data-driven world, pursuing an MBA in Business
                      Analytics, MBA marketing colleges in Hyderabad, is an
                      excellent career choice. If you are looking for the best
                      MBA business analytics colleges in Hyderabad, ASB offers a
                      comprehensive curriculum that blends marketing strategies
                      with analytical insights. With industry-oriented training,
                      expert faculty, and state-of-the-art facilities, ASB
                      stands out among the top business analytics colleges in
                      Hyderabad.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Why Choose an MBA in Business Analytics?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      An MBA in Business Analytics equips students with skills
                      in data-driven decision-making, predictive analytics, and
                      business intelligence. ASB, one of the top MBA business
                      analytics colleges in Hyderabad, ensures that students
                      gain hands-on experience in real-world projects and case
                      studies. By integrating analytics with marketing, the
                      program prepares graduates to make strategic business
                      decisions that drive success.
                    </p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      Explore more MBA colleges in Hyderabad to find the right
                      program for your career.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Top MBA Marketing Colleges in Hyderabad
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Marketing is a core function of any business, and pursuing
                      an MBA in Marketing enhances your ability to understand
                      consumer behavior, branding strategies, and digital
                      marketing trends. Among the leading MBA marketing colleges
                      in Hyderabad, ASB provides an industry-focused curriculum
                      that blends theoretical knowledge with practical
                      application. With specialized courses in business
                      analytics, ASB bridges the gap between marketing and
                      data-driven decision-making.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    PGDM in Marketing and Business Analytics - A Career-Oriented
                    Program
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      For students looking for an advanced diploma, the PGDM in
                      Marketing and Business Analytics in Hyderabad, pgdm
                      marketing management colleges in Hyderabad, at ASB is an
                      ideal choice. Recognized as one of the best PGDM marketing
                      and business analytics colleges in Hyderabad, this program
                      emphasizes both marketing management and analytical
                      skills. It is tailored to meet the evolving needs of the
                      industry, making ASB a preferred choice among PGDM
                      marketing colleges in Hyderabad.
                    </p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      If you are interested in AI-driven business solutions,
                      check out Artificial intelligence colleges in Hyderabad
                      for more insights.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Best PGDM Marketing and Business Analytics Colleges in
                    Hyderabad
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      ASB is ranked among the top PGDM marketing and business
                      analytics institutes in Hyderabad, offering students an
                      industry-relevant curriculum designed to equip them with
                      the latest tools and technologies in marketing analytics.
                      The PGDM marketing and business analytics course in
                      Hyderabad MBA business analytics colleges in Hyderabad, at
                      ASB covers essential topics such as data mining, customer
                      insights, and digital marketing analytics, making it one
                      of the most sought-after programs in the city.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Career Prospects After Completing the Course
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Graduates from the best business schools in Hyderabad for
                      PGDM in Marketing and Analytics can explore a wide range
                      of career opportunities, including:
                    </p>
                    <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                      <li>Marketing Analyst</li>
                      <li>Business Intelligence Analyst</li>
                      <li>Digital Marketing Strategist</li>
                      <li>Consumer Insights Manager</li>
                      <li>Data Analyst</li>
                    </ul>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      With businesses relying more on data for decision-making,
                      professionals with a strong foundation in both marketing
                      and analytics are in high demand.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-7"
                  className="rounded-2xl border border-border bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Explore More Programs at ASB
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Apart from business analytics and marketing, ASB also
                      offers top-notch programs in finance and artificial
                      intelligence. If you are interested in other
                      specializations, explore:
                    </p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      MBA finance colleges in Hyderabad to master financial
                      strategies and fintech innovations.
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
                      ASB stands as a premier destination for those seeking the
                      best MBA business analytics colleges in Hyderabad. By
                      integrating marketing with business analytics, the program
                      prepares students for the evolving business landscape.
                      Whether you are looking for the best PGDM marketing and
                      business analytics colleges in Hyderabad or specialized
                      MBA programs, ASB provides an unmatched educational
                      experience that shapes future business leaders. Take the
                      next step in your career with ASB and unlock your
                      potential in the world of business analytics and
                      marketing.
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
                        ? `S.No | ${semester.title} | Category | Subject`
                        : `S.No | ${semester.title} | Subject`}
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

export default PGDMMarketingPage;
