import SectionFadeIn from "@/components/SectionFadeIn";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const objectives = [
  "Sharpening Decision making skills using AI-DS tools.",
  "All round development of Personality.",
  "High managerial efficiency in resource utilization.",
  "Learning mindset to improve Knowledge, Skills, Attitude and Habits",
  "Problem Solving and Critical Thinking to create Socio-Economic impact.",
  "Empower the students with the data driven decision making capabilities",
];

const highlights = [
  "Two thirds of the program involves practical engagement.",
  "One Week Global Immersion Programme (Global Experience).",
  "Industry interface - Knowledge sharing.",
  "Technology enhanced classroom for interactive learning",
  "Well established computer labs facilitating hands on learning",
  "Value addition through NPTEL online certification",
  "Excellent start-up ecosystem in place",
];

const takeaways = [
  "Knowledge to build technology-driven businesses",
  "Skills to manage and own tech-enabled businesses",
  "Data driven decision making",
  "Recruiters Students with their all-round decision making skills would be engaged by a number of industries including Management Consulting, IT Consulting, Retail, E-tail, Pharma, Healthcare, Edutech and infotainment firms, Tech-enabled start-ups, Business Aggregators etc.",
];

const curriculumRows = [
  {
    title: "TRIMESTER - I",
    rows: [
      "Management and Organization Behavior",
      "Accounting for Management",
      "Management Information System",
      "Fundamentals of Programming",
      "Introduction to Statistics",
      "Marketing Management",
      "Spreadsheet Modelling",
      "Introduction to R",
    ],
  },
  {
    title: "TRIMESTER - II",
    rows: [
      "Human Resource Management",
      "Operations Management",
      "Managerial Economics",
      "Financial Management",
      "Business Communication",
      "Query Language for Data Science",
      "Introduction to Python",
      "Project-1",
    ],
  },
  {
    title: "TRIMESTER - III",
    rows: [
      "Project Management",
      "Business Research Methods",
      "Artificial Intelligence Introduction",
      "Design Thinking",
      "Predictive Analytics",
      "Python for Data Science",
      "Machine Learning Theory and Applications",
      "Visual Analytics using Power BI",
      "Industry Analysis - Project",
    ],
  },
  {
    title: "TRIMESTER - IV",
    rows: [
      "Innovation and Entrepreneurship",
      "Big Data",
      "Operational Analytics",
      "Introduction to Deep Learning",
      "IoT Analytics for Managers",
      "Financial Analytics",
      "Social Media and Web Analytics",
      "Marketing Analytics",
      "Data Science Project-1 (Hybrid Mode with Industry)",
    ],
  },
  {
    title: "TRIMESTER - V",
    rows: [
      "Advanced Deep Learning Techniques",
      "Text Analytics",
      "Supply Chain Analytics",
      "Case Studies and Practices in Data Science",
      "HR Analytics",
      "Software Project Management",
      "Campus Recruitment Training (CRT)",
      "Data Science Project 2 (Hybrid Mode with Industry)",
    ],
  },
  {
    title: "TRIMESTER - VI",
    rows: ["Guided Open Learning (online certification)", "Full Time Industry Project"],
  },
];

const PGDMAIDataSciencePage = () => {
  return (
    <div className="pt-20 bg-background overflow-x-clip">
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.22),transparent_46%),radial-gradient(circle_at_80%_0%,rgba(2,132,199,0.24),transparent_38%),linear-gradient(145deg,#0f172a,#1e293b)] text-primary-foreground px-4 md:px-8 py-16 md:py-24">
        <div className="container-wide relative z-10 px-4">
          <SectionFadeIn>
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em]">
                Our Programs
              </p>
              <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight">PGDM - ARTIFICIAL INTELLIGENCE AND DATA SCIENCE</h1>
              <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-primary-foreground/90">
                This program provides a hands-on experience for demystifying the data science ecosystem and makes the student a more conscientious consumer of information. The PGDM program in Artificial Intelligence and Data Science is designed with a vision to skill students in the areas of data science and analytics for better employability and career prospects. The program is designed to teach students the effective use of data for better business decision making.
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
                  href="/pgdm-artificial-intelligence-data-science-colleges-in-hyderabad#curriculum"
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
                <h2 className="text-2xl font-black">Program Objectives</h2>
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
                <h2 className="text-2xl font-black text-foreground">Program Highlights</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-[2px] h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary/50 to-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                <h2 className="text-2xl font-black text-foreground">KEY Takeaways</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {takeaways.map((item) => (
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
            <div className="mt-10 rounded-[1.7rem] border border-border bg-white p-4 md:p-6 shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
              <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
                <AccordionItem value="item-1" className="rounded-2xl border border-border bg-white px-5">
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">Artificial Intelligence and Data Science</AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Artificial Intelligence and Data Science have become the backbone of modern industries, driving innovation and efficiency across various sectors. For students aspiring to build a successful career in these fields, choosing the right institution is crucial. If you are searching for artificial intelligence colleges in Hyderabad, you will find top-rated institutes that offer comprehensive courses in AI and Data Science. These programs are designed to equip students with the latest skills in machine learning, deep learning, and big data analytics.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="rounded-2xl border border-border bg-white px-5">
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">Best Data Science Colleges in Hyderabad</AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Hyderabad is home to some of the best data science colleges in Hyderabad, offering industry-oriented curriculums, expert faculty, and hands-on training. The growing demand for data-driven decision-making has made Data Science one of the most sought-after careers. Students enrolling in these courses gain proficiency in statistical analysis, programming languages like Python and R, and AI-driven applications. The top data science colleges in Hyderabad provide state-of-the-art labs, industry collaborations, and placement opportunities with leading tech firms.
                    </p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      If you are looking for the best institutes that offer AI and Data Science programs, you can also explore MBA colleges in Hyderabad for a diverse range of management and technology-driven courses.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="rounded-2xl border border-border bg-white px-5">
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">Why Choose PGDM in Artificial Intelligence and Data Science?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      A PGDM in Artificial Intelligence and Data Science Colleges in Hyderabad provides a unique blend of business management and cutting-edge technology, making graduates highly desirable in the job market. These programs focus on real-world applications, ensuring students develop practical skills in AI modeling, natural language processing, and predictive analytics. If you are looking for pgdm artificial intelligence colleges in Hyderabad, pgdm artificial intelligence and data science colleges in Hyderabad, you will find institutes that offer AI-driven business solutions, enhancing employability and career growth.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="rounded-2xl border border-border bg-white px-5">
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">Explore Top AI and Data Science Colleges</AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Additionally, those interested in finance and AI integration can check out MBA finance colleges in Hyderabad, where students gain expertise in financial analytics and fintech solutions.
                    </p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      For those aspiring to specialize further, pgdm data science colleges in Hyderabad offer advanced analytics and AI-based decision-making courses. These programs are tailored to meet the evolving industry standards, ensuring students gain hands-on experience with real-world projects.
                    </p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      For individuals who want to explore AI applications in human resource management, Human resource management courses in Hyderabad offer specialized programs that integrate AI and analytics to streamline HR operations.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="rounded-2xl border border-border bg-white px-5">
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">Career Opportunities in Artificial Intelligence and Data Science</AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Graduates from artificial intelligence colleges in Hyderabad and best data science colleges in Hyderabad have access to lucrative career opportunities in top tech companies, finance, healthcare, and e-commerce industries. The growing reliance on AI and data analytics has made these fields indispensable in driving business success. With skills in machine learning, neural networks, and big data analytics, professionals can explore roles such as AI engineer, data scientist, and business intelligence analyst.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="rounded-2xl border border-border bg-white px-5">
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">Conclusion</AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Pursuing a course in AI and Data Science opens doors to endless career possibilities. Hyderabad boasts some of the best data science colleges in Hyderabad and artificial intelligence colleges in Hyderabad, ensuring students receive world-class education with practical exposure. Choosing the right college can significantly impact your career growth and industry readiness. Enroll in top data science colleges in Hyderabad and embark on a rewarding career in AI and Data Science today.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </SectionFadeIn>

          <SectionFadeIn>
            <div id="curriculum" className="mt-10 rounded-2xl border border-border bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
              <h3 className="text-2xl md:text-3xl font-black text-foreground text-center">CURRICULUM</h3>
              <div className="mt-6 space-y-5">
                {curriculumRows.map((semester) => (
                  <div key={semester.title} className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_6px_18px_rgba(15,23,42,0.05)]">
                    <div className="bg-primary px-4 py-3 text-sm md:text-base font-bold text-primary-foreground">S.No | {semester.title}</div>
                    <div className="divide-y divide-border/70">
                      {semester.rows.map((subject, index) => (
                        <div key={subject} className="grid grid-cols-[60px_1fr] px-4 py-2.5 text-sm md:text-base text-foreground">
                          <span className="font-semibold text-primary">{index + 1}</span>
                          <span>{subject}</span>
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

export default PGDMAIDataSciencePage;
