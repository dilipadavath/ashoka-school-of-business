import SectionFadeIn from "@/components/SectionFadeIn";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import eligibilityImage from "@/assets/Admissions.jpeg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const feeRows = [
  {
    phase: "Admission Fee (At the time of admission)",
    details: "",
    amount: "50,000",
  },
  {
    phase: "1st Year",
    details:
      "First term fee to be paid before the reporting date. *Students have to pay and register for the 1st Semester.",
    amount: "2,50,000",
  },
  {
    phase: "1st Year",
    details:
      "Second term fee to be paid before 1st December, 2026. *Students have to pay and register for the 2nd Semester.",
    amount: "1,70,000",
  },
  {
    phase: "2nd Year",
    details:
      "Third term fee to be paid before 1st June, 2027. *Students have to pay and register for the 3rd Semester",
    amount: "1,70,000",
  },
  {
    phase: "2nd Year",
    details:
      "Fourth term fee to be paid before 1st November, 2027. *Students have to pay and register for the 4th Semester",
    amount: "1,70,000",
  },
];

const meritRows = [
  { criterion: "Management Aptitude Test Score", marks: "50 Marks" },
  { criterion: "Previous Academic Performance", marks: "10 Marks" },
  { criterion: "Work Experience", marks: "5 Marks" },
  { criterion: "Group Discussion", marks: "20 Marks" },
  { criterion: "Personal Interview", marks: "15 Marks" },
];

const processFlow = [
  "APPLICATION SUBMISSION",
  "SELECTION PROCESS",
  "SUBMISSION OF STATEMENT OF PURPOSE",
  "SCHOLARSHIP ALLOCATION",
  "OFFER LETTER AND CONFIRMATION",
  "FINAL CONFIRMATION",
];

const specializedPrograms = [
  "MBA marketing admissions in Hyderabad – Designed for those who want to excel in marketing strategies and brand management.",
  "Business analytics admission in Hyderabad – A perfect choice for those interested in data- driven decision-making and business intelligence.",
  "MBA finance admissions in Hyderabad – Prepares students for careers in financial management, banking, and investment sectors.",
  "MBA HR admissions in Hyderabad – Focuses on talent management, employee relations, and leadership development.",
  "HR analytics admissions in Hyderabad – Equips students with analytical tools for human resource planning and workforce management.",
  "Artificial intelligence admissions in Hyderabad – Ideal for those keen on integrating AI technologies in business processes.",
  "Data science admissions in Hyderabad – Provides expertise in handling and analyzing large datasets for business insights.",
];

const supportingDocs = [
  "Copy of Aadhaar Card",
  "10th Class Mark sheet",
  "12th Class Mark Sheet",
  "Certificates and Mark sheets of undergraduate Programme.",
  "Copy of qualifying admission test / entrance examination – state / national level test.",
];

const AdmissionsPage = () => {
  return (
    <main className="pt-0 md:pt-20 bg-[linear-gradient(to_bottom,#f8fafc_0%,#f8fafc_30%,#ffffff_100%)] overflow-x-clip">
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.24),transparent_46%),radial-gradient(circle_at_80%_0%,rgba(2,132,199,0.24),transparent_38%),linear-gradient(145deg,#0f172a,#1e293b)] text-primary-foreground section-padding">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
        </div>
        <div className="container-wide relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <SectionFadeIn>
            <div className="max-w-5xl">
              <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em]">
                Admissions
              </p>
              <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
                Admissions
              </h1>
              <p className="mt-5 max-w-4xl text-sm md:text-base leading-relaxed text-primary-foreground/90">
                ASB offers a 2-year full-time tech-blended PGDM program in
                Marketing with Analytics, HR Analytics,Finance with
                FinTech,Artificial Intelligence and Data Science,Securities in
                Market. We have designed a robust curriculum that would equip
                students with all the necessary skills and knowledge for
                management of healthcare organizations like Hospitals,
                Industries, NGOs, IOT and Equipment Manufacturing, NGOs etc,.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_rgba(220,38,38,0.35)] transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  REGISTRATION FORM
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {/* <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/35 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  DOWNLOAD BROCHURE
                  <Download className="h-4 w-4" />
                </a> */}
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-[1.6rem] border border-primary/25 bg-white/10 p-3 shadow-[0_24px_60px_rgba(2,8,23,0.32)] backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-secondary aspect-[4/3]">
                <img
                  src={eligibilityImage}
                  alt="Admissions eligibility"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding bg-[linear-gradient(to_bottom,rgba(248,250,252,0.75),rgba(255,255,255,1))]">
        <div className="container-wide max-w-6xl mx-auto space-y-10">
          <SectionFadeIn>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Eligibility
              </h2>
              <ul className="mt-5 space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed list-disc pl-5">
                <li>
                  Candidates with Bachelor's degree of minimum three-year
                  duration (or equivalent) in any discipline, from a recognized
                  University, with at least 50% marks in aggregate or equivalent
                  CGPA.
                </li>
                <li>
                  Final-year graduation students can apply, but must submit
                  required documents by the specified deadline.
                </li>
                <li>
                  The applicants should have a valid score card of
                  CAT/XAT/MAT/CMAT/GMAT/ATMA/Any other national level/State
                  level admission test for PGDM admission in ASB.
                </li>
              </ul>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.05}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Application &amp; Selection Procedure
              </h2>
              <ul className="mt-5 space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed list-disc pl-5">
                <li>
                  The candidates can apply in both online and offline mode for
                  admission
                </li>
                <li>
                  Further, students need to appear for the Group Discussion
                  &amp; Personal Interview as scheduled communication through
                  mail and registered phone number
                </li>
                <li>
                  Candidates need to fill the Application Form and pay the
                  Application Fee of Rs.1000
                </li>
              </ul>
              <p className="mt-6 text-base font-bold text-foreground">
                Multiply Your Research
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.1}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                ADMISSION PROCESS FLOW
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {processFlow.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-primary/20 bg-[linear-gradient(140deg,rgba(220,38,38,0.10),rgba(2,132,199,0.08))] px-4 py-4"
                  >
                    <p className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[0.7rem] font-black text-primary-foreground">
                      {index + 1}
                    </p>
                    <p className="mt-2 text-sm font-bold text-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.15}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] overflow-x-auto backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                FEE STRUCTURE: PGDM Batch 2026-28
              </h2>
              <table className="mt-6 w-full min-w-[760px] border-collapse text-sm">
                <thead>
                  <tr className="bg-[linear-gradient(120deg,rgba(220,38,38,0.12),rgba(2,132,199,0.08))] text-left">
                    <th className="border border-border px-4 py-3 font-bold text-foreground">
                      Fee Payment Schedule
                    </th>
                    <th className="border border-border px-4 py-3 font-bold text-foreground">
                      Details
                    </th>
                    <th className="border border-border px-4 py-3 font-bold text-foreground">
                      Amount (INR)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((row, idx) => (
                    <tr
                      key={`${row.phase}-${idx}`}
                      className={`align-top ${idx % 2 === 0 ? "bg-white" : "bg-secondary/20"}`}
                    >
                      <td className="border border-border px-4 py-3 font-semibold text-foreground">
                        {row.phase}
                      </td>
                      <td className="border border-border px-4 py-3 text-muted-foreground leading-relaxed">
                        {row.details || "-"}
                      </td>
                      <td className="border border-border px-4 py-3 font-bold text-foreground">
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-primary/30 bg-[linear-gradient(125deg,rgba(220,38,38,0.12),rgba(2,132,199,0.08))] px-5 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                    Program Fee Snapshot
                  </p>
                  <p className="mt-2 text-lg md:text-xl font-black text-foreground">
                    *Total Fees (for 2 years PGDM Program) – 8,10,000/-
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-border bg-secondary/20 px-4 py-3">
                    <p className="text-sm text-muted-foreground">
                      » The scholarship amount will be deducted from the Fourth
                      term fee.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/20 px-4 py-3">
                    <p className="text-sm text-muted-foreground">
                      » An additional amount of INR 10,000/- must be paid along
                      with the Ist term fee.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white px-5 py-4">
                  <p className="text-sm font-semibold text-foreground">
                    » The breakdown of this amount is as follows:
                  </p>
                  <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Alumni Association Fee – INR 5,000/-</li>
                    <li>Student Welfare &amp; Affairs Fee – INR 5,000/-</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-dashed border-border bg-secondary/10 px-5 py-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    After payment of registration fee and verification of the
                    documents by the Admissions Committee, the candidate is
                    provided with Admission Letter. The candidate should submit
                    original marks sheet, final degree completion certificate
                    and the other original documents required.
                  </p>
                </div>
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.2}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] overflow-x-auto backdrop-blur-sm">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-[linear-gradient(120deg,rgba(220,38,38,0.12),rgba(2,132,199,0.08))] text-left">
                    <th className="border border-border px-4 py-3 font-bold text-foreground">
                      S.No
                    </th>
                    <th className="border border-border px-4 py-3 font-bold text-foreground">
                      Criteria
                    </th>
                    <th className="border border-border px-4 py-3 font-bold text-foreground">
                      Weightage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {meritRows.map((row, idx) => (
                    <tr
                      key={row.criterion}
                      className={idx % 2 === 0 ? "bg-white" : "bg-secondary/20"}
                    >
                      <td className="border border-border px-4 py-3 text-foreground">
                        {idx + 1}
                      </td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">
                        {row.criterion}
                      </td>
                      <td className="border border-border px-4 py-3 font-semibold text-foreground">
                        {row.marks}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="border border-border px-4 py-3" />
                    <td className="border border-border px-4 py-3 font-black text-foreground">
                      Total
                    </td>
                    <td className="border border-border px-4 py-3 font-black text-foreground">
                      100 Marks
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.25}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Supporting documents to be submitted
              </h2>
              <ul className="mt-5 space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed list-disc pl-5">
                {supportingDocs.map((doc) => (
                  <li key={doc}>{doc}</li>
                ))}
              </ul>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-6xl mx-auto space-y-8">
          <SectionFadeIn>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Admissions for MBA in Hyderabad
              </h2>
              <Accordion
                type="single"
                collapsible
                className="mt-5 w-full space-y-3"
              >
                <AccordionItem
                  value="overview"
                  className="rounded-2xl border border-border/80 bg-secondary/20 px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Admissions for MBA in Hyderabad
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Looking to advance your career with a professional MBA
                    degree? The MBA admissions in Hyderabad are now open,
                    offering aspiring students the opportunity to enroll in one
                    of the top management programs in the country. Whether you
                    are interested in MBA marketing admissions in Hyderabad,
                    business analytics admission in Hyderabad, or other
                    specialized fields, this is your chance to gain in-depth
                    knowledge and industry-relevant skills.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="why-hyderabad"
                  className="rounded-2xl border border-border/80 bg-secondary/20 px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Why Choose Hyderabad for Your MBA?
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      Hyderabad is home to some of the best management
                      institutions, known for their academic excellence and
                      industry-focused curriculum. Admission for MBA in
                      Hyderabad ensures that students receive top-tier education
                      and hands-on learning experiences. The city offers a
                      dynamic business environment, making it a great place for
                      networking and career growth.
                    </p>
                    <p>
                      For students interested in specialized domains, options
                      like MBA finance admissions in Hyderabad, MBA HR
                      admissions in Hyderabad, and HR analytics admissions in
                      Hyderabad provide diverse career opportunities. These
                      courses are designed to align with current industry
                      trends, ensuring graduates have the right skills for
                      today’s competitive job market. If you are exploring
                      institutions, check out MBA colleges in Hyderabad for
                      top-tier programs and expert faculty.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="specialized-programs"
                  className="rounded-2xl border border-border/80 bg-secondary/20 px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Explore Specialized MBA Programs
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <ul className="space-y-2 list-disc pl-5">
                      {specializedPrograms.map((program) => (
                        <li key={program}>{program}</li>
                      ))}
                    </ul>
                    <p>
                      For those inclined towards analytics-driven careers,
                      explore MBA business analytics colleges in Hyderabad to
                      gain expertise in data-driven business strategies.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="admissions-process"
                  className="rounded-2xl border border-border/80 bg-secondary/20 px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Admissions Process
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    The MBA admissions in Hyderabad follow a systematic process,
                    ensuring a seamless application experience. Candidates must
                    meet the eligibility criteria, submit the required
                    documents, and complete the selection procedure, which may
                    include entrance tests and personal interviews. Students who
                    successfully secure admission for MBA in Hyderabad benefit
                    from state-of-the-art facilities, expert faculty, and
                    industry collaborations that enhance their learning journey.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="career-opportunities"
                  className="rounded-2xl border border-border/80 bg-secondary/20 px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Career Opportunities After MBA
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      Pursuing an MBA opens doors to multiple career avenues.
                      Graduates from reputed institutions in Hyderabad secure
                      high-paying jobs in multinational companies, financial
                      firms, marketing agencies, and technology sectors. Whether
                      you choose MBA marketing admissions in Hyderabad or a
                      specialized field like HR analytics admissions in
                      Hyderabad, you are well- equipped to succeed in the
                      corporate world.
                    </p>
                    <p>
                      If your interest lies in human resource management,
                      consider enrolling in Human resource management courses in
                      Hyderabad to gain specialized knowledge in HR analytics
                      and workforce planning.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="conclusion"
                  className="rounded-2xl border border-border/80 bg-secondary/20 px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Conclusion
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    With MBA admissions in Hyderabad now open, this is the
                    perfect time to take the next step in your career. The
                    city’s top institutions provide comprehensive courses,
                    expert mentorship, and excellent placement support. Secure
                    your spot today and unlock new career possibilities with
                    admission for MBA in Hyderabad.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </main>
  );
};

export default AdmissionsPage;
