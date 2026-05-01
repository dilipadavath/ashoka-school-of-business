import SectionFadeIn from "@/components/SectionFadeIn";
import committeeImage from "@/assets/Women_in_academic_discussion.jpeg";

const committeeMembers = [
  {
    sno: "1",
    name: "Dr. Swathi Kumari",
    designation: "Dean",
    duty: "Convenor",
  },
  {
    sno: "2",
    name: "Dr. G. Sabitha",
    designation: "Associate Professor",
    duty: "Member",
  },
  {
    sno: "3",
    name: "Dr. T. Sudha",
    designation: "Professor",
    duty: "Member",
  },
  {
    sno: "4",
    name: "Ms. P. Parijatha",
    designation: "Assistant Professor",
    duty: "Member",
  },
  {
    sno: "5",
    name: "Ms. Mallam Aashritha",
    designation: "Student",
    duty: "Member",
  },
];

const WomenProtectionCellPage = () => {
  return (
    <main className="pt-0 md:pt-20 bg-background overflow-x-clip">
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_15%_20%,rgba(220,38,38,0.2),transparent_45%),radial-gradient(circle_at_82%_8%,rgba(2,132,199,0.2),transparent_40%),linear-gradient(145deg,#0f172a,#1e293b)] text-primary-foreground section-padding">
        <div className="container-wide relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <SectionFadeIn>
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em]">
                Ref No: ASB/PGDM/Women Protection Committee/2025-2026
              </p>
              <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight">
                Women Protection Cell
              </h1>
              <h2 className="mt-4 text-xl md:text-2xl font-black leading-tight">
                STUDENT GRIEVANCES REDRESSAL COMMITTEE
              </h2>
              <p className="mt-5 text-sm md:text-base leading-relaxed text-primary-foreground/90">
                This office order (Ref No: ASB/PGDM/Women Protection
                Committee/2025-2026), dated 05/09/2025, is issued regarding the
                appointment of the Women Protection Committee/Cell. The decision
                is made in accordance with the UGC guideline letter and the
                AICTE approval process handbook for the period 2024-27.
              </p>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-primary-foreground/90">
                As per the requirements of AICTE regarding formation of Women
                protection Committee/Cell at our Institute. The following Women
                protection Committee is constituted.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-[1.6rem] border border-primary/25 bg-white/10 p-3 shadow-[0_24px_60px_rgba(2,8,23,0.32)] backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-secondary aspect-[4/3]">
                <img
                  src={committeeImage}
                  alt="Women Protection Cell"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding bg-[linear-gradient(to_bottom,rgba(248,250,252,0.8),rgba(255,255,255,1))]">
        <div className="container-wide max-w-6xl mx-auto space-y-8">
          <SectionFadeIn>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-black text-foreground">
                Submit Your Grievance
              </h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-border bg-secondary/20 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                    Email
                  </p>
                  <a
                    href="mailto:dr.swathikumari@theasb.in"
                    className="mt-2 inline-block text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    dr.swathikumari@theasb.in
                  </a>
                </div>
                <div className="rounded-2xl border border-border bg-secondary/20 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                    Address
                  </p>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    NH65, near Ramoji Film City, Hyderabad, Toopranpet,
                    Telangana 508252
                  </p>
                </div>
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.08}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] overflow-x-auto backdrop-blur-sm">
              <table className="w-full min-w-[760px] border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-[linear-gradient(120deg,rgba(220,38,38,0.12),rgba(2,132,199,0.08))] text-left">
                    <th className="border border-border px-4 py-3 font-bold text-foreground">
                      Sl. No
                    </th>
                    <th className="border border-border px-4 py-3 font-bold text-foreground">
                      Name of the staff member
                    </th>
                    <th className="border border-border px-4 py-3 font-bold text-foreground">
                      Department &amp; Designation
                    </th>
                    <th className="border border-border px-4 py-3 font-bold text-foreground">
                      Duties to be performed
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {committeeMembers.map((row, idx) => (
                    <tr
                      key={`${row.sno}-${row.name}`}
                      className={idx % 2 === 0 ? "bg-white" : "bg-secondary/20"}
                    >
                      <td className="border border-border px-4 py-3 text-foreground">
                        {row.sno}
                      </td>
                      <td className="border border-border px-4 py-3 text-foreground font-semibold">
                        {row.name}
                      </td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">
                        {row.designation}
                      </td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">
                        {row.duty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                The Women protection Committee will monitor and endeavor to
                resolve issues / grievances relating to students and staff at
                the Institute level. The complaint if any will be forwarded to
                the said Committee/cell by the Principal. The said
                committee/cell will look into the complaint and
              </p>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                call the concerned Complainant personally for hearing the
                grievance. The Coordinator of the committee/cell will forward
                their report in the sealed envelope to the Principal within one
                week from the date of the receipt of complaint.
              </p>
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </main>
  );
};

export default WomenProtectionCellPage;
