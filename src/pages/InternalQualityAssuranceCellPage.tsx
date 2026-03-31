import SectionFadeIn from "@/components/SectionFadeIn";

const objectiveItems = [
  "To ensure the progressive and efficient performance of overall academic activities.",
  "To improve the system as an accelerator for agile academic practices.",
  "To assess and progress the performance of administrative and financial tasks.",
  "Institute and excel in research activities by meeting the industry needs.",
  "Guaranteeing the credibility of the evaluation process.",
];

const functionItems = [
  "Developing and monitoring the QUALITY Culture of the institute.",
  "Setting the quality standards, measuring and regulating the performance of academic and administrative activities.",
  "Creating a Learner-centric Learning Environment by adopting various experiential learning methods.",
  "Advancing the Research culture and equipping the environment for it.",
  "Promoting the Quality conscious by conducting FDPs, Workshops and Seminars for both internal and external members of the institute.",
  "Enhancing the Feedback mechanism and ensuring a timely response to it.",
  "Maintaining the data culture by instituting proper database management system and the MIS.",
];

const iqacMembers = [
  {
    sno: "1",
    name: "Dr.Y.Lakshman Kumar",
    designation: "Director",
    role: "Convener",
  },
  {
    sno: "2",
    name: "Dr.G.Swathi kumari",
    designation: "Dean",
    role: "Coordinator",
  },
  {
    sno: "3",
    name: "Mr.G.Prasanth",
    designation: "Associate Professor",
    role: "Member",
  },
  {
    sno: "4",
    name: "Dr.G.Sabitha",
    designation: "Associate Professor",
    role: "Member",
  },
  {
    sno: "5",
    name: "Mr.Rajesh Pershad",
    designation: "Associate Professor",
    role: "Member",
  },
  {
    sno: "6",
    name: "Dr.T.Sudha",
    designation: "Professor",
    role: "Member",
  },
];

const InternalQualityAssuranceCellPage = () => {
  return (
    <main className="pt-20 bg-background overflow-x-clip">
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_14%_18%,rgba(220,38,38,0.2),transparent_42%),radial-gradient(circle_at_84%_10%,rgba(2,132,199,0.18),transparent_40%),linear-gradient(145deg,#0f172a,#1e293b)] text-primary-foreground px-4 md:px-8 py-16 md:py-24">
        <div className="container-wide relative z-10 px-4 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <SectionFadeIn>
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em]">
                Internal Quality Framework
              </p>
              <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight">INTERNAL QUALITY ASSURANCE CELL</h1>
              <h2 className="mt-4 text-xl md:text-2xl font-black leading-tight">INTERNAL QUALITY ASSURANCE CELL</h2>
              <p className="mt-5 text-sm md:text-base leading-relaxed text-primary-foreground/90">
                In compliance with the AICTE norms and to ensure that quality education is imparted to the students, Ashoka School of Business (ASB) established Internal Quality Assurance (IQAC) Cell that caters to the aspects such student&apos;s feedback on Teacher and Leader Effectiveness process, regular Academic audits, preparations for Accreditation of academic programs and processes etc.
              </p>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-primary-foreground/90">
                The tenure of IQAC members shall be for a period of three years.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-[1.6rem] border border-primary/25 bg-white/10 p-6 shadow-[0_24px_60px_rgba(2,8,23,0.32)] backdrop-blur-sm">
              <div className="rounded-[1.2rem] border border-white/20 bg-white/10 p-6 md:p-7">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-primary-foreground/80">IQAC</p>
                <p className="mt-3 text-3xl md:text-4xl font-black leading-none">Quality First</p>
                <p className="mt-4 text-sm md:text-base text-primary-foreground/85 leading-relaxed">
                  Regular academic audits, accreditation readiness, and continuous quality checks across academic, administrative, and institutional processes.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/20 bg-black/20 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">Tenure</p>
                    <p className="mt-1 text-base font-semibold">3 Years</p>
                  </div>
                  <div className="rounded-xl border border-white/20 bg-black/20 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">Focus</p>
                    <p className="mt-1 text-base font-semibold">Academic Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding bg-[linear-gradient(to_bottom,rgba(248,250,252,0.75),rgba(255,255,255,1))]">
        <div className="container-wide max-w-6xl mx-auto px-4 space-y-8">
          <SectionFadeIn>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground">OBJECTIVES OF THE IQAC</h3>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground">
                    The primary objectives of the Internal Quality Assurance Cell (IQAC) are to...
                  </p>
                  <ul className="mt-5 space-y-3">
                    {objectiveItems.map((item, index) => (
                      <li key={item} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-secondary/20 p-4">
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          {index + 1}
                        </span>
                        <span className="text-sm md:text-base leading-relaxed text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground">FUNCTIONS OF THE IQAC</h3>
                  <ul className="mt-5 space-y-3">
                    {functionItems.map((item, index) => (
                      <li key={item} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-secondary/20 p-4">
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                          {index + 1}
                        </span>
                        <span className="text-sm md:text-base leading-relaxed text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.06}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-black text-foreground">Submit Your Grievance</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-border bg-secondary/20 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Email</p>
                  <a href="mailto:Director@theasb.in" className="mt-2 inline-block text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors">
                    Director@theasb.in
                  </a>
                </div>
                <div className="rounded-2xl border border-border bg-secondary/20 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Address</p>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    NH65, near Ramoji Film City, Hyderabad, Toopranpet, Telangana 508252
                  </p>
                </div>
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.1}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] overflow-x-auto backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-black text-foreground">The following are the details of IQAC members:</h3>
              <table className="mt-6 w-full min-w-[760px] border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-[linear-gradient(120deg,rgba(220,38,38,0.12),rgba(2,132,199,0.08))] text-left">
                    <th className="border border-border px-4 py-3 font-bold text-foreground">S.N</th>
                    <th className="border border-border px-4 py-3 font-bold text-foreground">Name of the IQAC members</th>
                    <th className="border border-border px-4 py-3 font-bold text-foreground">Designation</th>
                    <th className="border border-border px-4 py-3 font-bold text-foreground">Mobile Number</th>
                  </tr>
                </thead>
                <tbody>
                  {iqacMembers.map((row, idx) => (
                    <tr key={`${row.sno}-${row.name}`} className={idx % 2 === 0 ? "bg-white" : "bg-secondary/20"}>
                      <td className="border border-border px-4 py-3 text-foreground">{row.sno}</td>
                      <td className="border border-border px-4 py-3 text-foreground font-semibold">{row.name}</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">{row.designation}</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">{row.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </main>
  );
};

export default InternalQualityAssuranceCellPage;
