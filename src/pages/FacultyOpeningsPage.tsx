import SectionFadeIn from "@/components/SectionFadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Download,
  Phone,
  Mail,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  BookOpen,
  Users,
} from "lucide-react";

const focusAreas = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    label: "Artificial Intelligence & Data Science",
  },
  { icon: <Users className="h-6 w-6" />, label: "Marketing" },
  { icon: <Briefcase className="h-6 w-6" />, label: "Human Resources" },
  { icon: <GraduationCap className="h-6 w-6" />, label: "Finance" },
];

const contributions = [
  "Teaching and training",
  "Research and",
  "Academic Administration / Services",
];

const FacultyOpeningsPage = () => {
  return (
    <main className="pt-0 md:pt-20 bg-[linear-gradient(to_bottom,#f8fafc_0%,#f8fafc_30%,#ffffff_100%)] overflow-x-clip">
      {/* ───── HERO SECTION ───── */}
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.24),transparent_46%),radial-gradient(circle_at_80%_0%,rgba(2,132,199,0.24),transparent_38%),linear-gradient(145deg,#0f172a,#1e293b)] text-primary-foreground section-padding">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
        </div>

        <div className="container-wide relative z-10 max-w-5xl mx-auto text-center">
          <SectionFadeIn>
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm mb-6">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Faculty <span className="text-red-400">Openings</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-white/75 leading-relaxed">
              Shape the future of management education at one of Telangana's
              most dynamic business schools.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      {/* ───── ABOUT ASB ───── */}
      <section className="section-padding">
        <div className="container-wide max-w-5xl mx-auto space-y-10">
          <SectionFadeIn>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-10 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                Why Join ASB?
              </h2>

              <div className="space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Ashoka School of Business (ASB), one of the budding business
                  schools in Telangana; started in 2020, with 13 years of legacy
                  in Engineering, Architecture and Management education. ASB
                  lays great emphasis on the holistic development of the
                  student, in addition to his/her intellectual growth and
                  development. ASB believes that faculty has a great role to
                  play in achieving this. ASB looks for faculty, who like to be
                  a part of such a journey. The campus has state-of-the-art
                  facilities for quality management teaching and research.
                </p>
                <p>
                  Being an autonomous institute and with great academic and
                  administrative freedom, Faculty members have always involved
                  themselves in the Strategic as well as operational
                  decision-making. ASB is a faculty driven institute. Faculty
                  are encouraged to excel and contribute through:
                </p>
              </div>

              <ul className="mt-5 space-y-3">
                {contributions.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm md:text-base text-foreground font-medium"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-red-600" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  The type of collegiality among faculty, academic freedom and
                  the culture of research in ASBs has made it a preferred
                  destination for many good and aspiring faculty to join. ASB
                  invites talented, experienced and academically oriented
                  practitioners also to apply for faculty positions in the
                  following areas:
                </p>
              </div>

              {/* ── Focus Areas Cards ── */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {focusAreas.map((area) => (
                  <div
                    key={area.label}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-border/70 bg-gradient-to-br from-red-50/60 to-white p-5 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-red-200"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      {area.icon}
                    </div>
                    <span className="text-sm font-bold text-foreground leading-snug">
                      {area.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm md:text-base text-muted-foreground leading-relaxed">
                While the above areas are our immediate priorities, candidates
                from any other discipline such as Economics, Commerce,
                Statistics etc. are also welcome to apply. Candidates with Ph.D
                or FPM from reputed Institutions or NET/SET/SLET/JRF qualified
                with evidence of excellent teaching, research and publications
                in Scopus indexed journals are welcome to apply. Fresh Ph.Ds
                from National Institutions like IIMs, IITs, etc., with good
                potential are also welcome to apply. In fact, PGDM candidates
                with a fairly good length of industry stint are most preferred.
              </p>
            </div>
          </SectionFadeIn>

          {/* ───── ELIGIBILITY CRITERIA ACCORDION ───── */}
          <SectionFadeIn delay={0.05}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-10 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                Eligibility Criteria
              </h2>

              <Accordion type="single" collapsible className="w-full space-y-3">
                {/* ── Professor ── */}
                <AccordionItem
                  value="professor"
                  className="rounded-2xl border border-border/80 bg-secondary/20 px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Professor
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <div>
                      <h4 className="font-bold text-foreground mb-3">
                        Essential Qualifications:
                      </h4>
                      <ol className="list-[lower-alpha] pl-5 space-y-2">
                        <li>
                          Ph.D. degree in relevant field and First class at
                          Master's level in the relevant subject.
                        </li>
                        <li>
                          A minimum of ten years' experience of
                          teaching/industry/research / out of which at least
                          three years shall be at a post equivalent to that of
                          an Associate Professor.
                        </li>
                        <li>
                          At least 6 research publications at the level of
                          Associate Professor in Scopus Indexed/ABDC/UGC/ AICTE
                          approved list of journals and at least 2 successful
                          Ph.D. guided as Supervisor/Co-supervisor.
                          <p className="mt-3 font-semibold text-foreground">
                            Or
                          </p>
                          <p className="mt-1">
                            At least 10 research publications at the level of
                            Associate Professor in Scopus Indexed/ABDC/UGC/
                            AICTE approved list of journals.
                          </p>
                        </li>
                      </ol>
                      <p className="mt-4">
                        In the event, the candidate is from Industry and the
                        Profession, he/she should have professional work
                        experience which is significant and can be recognized at
                        National / International level as equivalent to Ph.D and
                        12 Years Managerial experience in Industry of which at
                        least 8 years should be at the level comparable to that
                        of Associate Professor/Assistant Professor.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-3">
                        Desirable Qualifications:
                      </h4>
                      <ol className="list-[lower-alpha] pl-5 space-y-2">
                        <li>
                          Teaching, research, and/or professional experience in
                          a reputed organization;
                        </li>
                        <li>
                          Published work, such as research papers, books and/or
                          technical reports;
                        </li>
                        <li>
                          Experience of guiding the project work/dissertation of
                          PG/ Research
                        </li>
                        <li>Supervising R&D projects in industry</li>
                        <li>
                          Demonstrated leadership in planning and organizing
                          academic, research, industrial and/or professional
                          activities; and
                        </li>
                        <li>
                          Capacity to undertake/lead MDPs, sponsored R&D,
                          consultancy and related activities.
                        </li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* ── Associate Professor ── */}
                <AccordionItem
                  value="associate-professor"
                  className="rounded-2xl border border-border/80 bg-secondary/20 px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Associate Professor
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <div>
                      <h4 className="font-bold text-foreground mb-3">
                        Essential Qualifications:
                      </h4>
                      <ol className="list-[lower-alpha] pl-5 space-y-2">
                        <li>
                          Ph.D. degree in the relevant field and First class or
                          equivalent at either Bachelor's or Master's level in
                          the relevant branch
                        </li>
                        <li>
                          A minimum of eight years of experience of
                          teaching/research/industry in an academic/research
                          position equivalent to that of Assistant Professor in
                          a University, College or Accredited Research
                          Institution/industry out of which at least 2 years
                          shall be post Ph.D. experience.
                        </li>
                        <li>
                          At least total 6 research publications in Scopus
                          Indexed/ABDC/UGC/AICTE approved list of journals.
                        </li>
                        <li>
                          Contribution to educational innovation, design of new
                          curricula and courses, and technology-mediated
                          teaching/learning process with evidence of having
                          guided research student
                        </li>
                        <li>
                          Experience in conducting MDPs, Research and
                          Consultancy projects
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-3">
                        Desirable Qualifications:
                      </h4>
                      <ol className="list-[lower-alpha] pl-5 space-y-2">
                        <li>
                          Teaching, research, and/or professional experience in
                          a reputed organization;
                        </li>
                        <li>
                          Published work, such as research papers, books and/or
                          technical reports;
                        </li>
                        <li>
                          Demonstrated leadership in planning and organizing
                          academic research, industrial and/or professional
                          activities;
                        </li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* ── Assistant Professor ── */}
                <AccordionItem
                  value="assistant-professor"
                  className="rounded-2xl border border-border/80 bg-secondary/20 px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Assistant Professor
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <div>
                      <h4 className="font-bold text-foreground mb-3">
                        Essential Qualifications:
                      </h4>
                      <p>
                        Master's Degree in the relevant field with First Class
                        or equivalent and two years of professional experience
                        after acquiring the Master's degree (Eg. MBA / PGDM / C.
                        A. / ICWA/ M. Com., or other relevant branches)
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-3">
                        Preferred Qualifications:
                      </h4>
                      <ol className="list-[lower-alpha] pl-5 space-y-2">
                        <li>Candidates with Ph.D.</li>
                        <li>
                          Teaching, research, industrial and/or professional
                          experience in a reputed organization;
                        </li>
                        <li>
                          Papers published in refereed journals Scopus
                          Indexed/ABDC/UGC Care Listed.
                        </li>
                        <li>
                          Fellow from Indian Institutes of Management, Ph.D from
                          IITs or reputed Universities from India and Abroad.
                        </li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* ── Placement Officer ── */}
                <AccordionItem
                  value="placement-officer"
                  className="rounded-2xl border border-border/80 bg-secondary/20 px-5"
                >
                  <AccordionTrigger className="text-left text-lg md:text-2xl font-black text-foreground">
                    Placement Officer
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <div>
                      <h4 className="font-bold text-foreground mb-3">
                        Essential Qualifications:
                      </h4>
                      <p>
                        Master's Degree with First Class and proven track record
                        in the placement activity with a reputed PGDM/ MBA
                        institution for at least 10 years.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-3">
                        Salary:
                      </h4>
                      <p>
                        Emoluments would be commensurate with the qualifications
                        and experience. In exceptional cases, Salary is no bar.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </SectionFadeIn>

          {/* ───── HOW TO APPLY ───── */}
          <SectionFadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.18),transparent_46%),linear-gradient(145deg,#0f172a,#1e293b)] p-6 md:p-10 text-white shadow-xl">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-16 right-10 h-40 w-40 rounded-full bg-red-500/20 blur-3xl" />
                <div className="absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-sky-400/15 blur-3xl" />
              </div>

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-black mb-5">
                  How to Apply?
                </h2>
                <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-3xl">
                  To apply, download ASB's Application form. Filled in
                  application form along with all the documentary proof in
                  support of your claim vis-à-vis your educational
                  qualifications and experience should be sent to the Email ID:{" "}
                  <a
                    href="mailto:careers@theasb.in"
                    className="text-red-400 underline underline-offset-2 hover:text-red-300 transition-colors"
                  >
                    careers@theasb.in
                  </a>
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <a
                    href="/APPLICATION-FOR-FACULTY-POSITIONS.docx"
                    download
                    className="inline-flex items-center gap-2.5 rounded-xl bg-red-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Download className="h-5 w-5" />
                    Download Application
                  </a>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-5 text-sm md:text-base">
                  <p className="font-bold text-white/90">
                    For any Queries Contact:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+919908119224"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <Phone className="h-4 w-4 text-red-400" />
                      +91 99081 19224
                    </a>
                    <a
                      href="tel:+919182695190"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <Phone className="h-4 w-4 text-red-400" />
                      +91 91826 95190
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </main>
  );
};

export default FacultyOpeningsPage;
