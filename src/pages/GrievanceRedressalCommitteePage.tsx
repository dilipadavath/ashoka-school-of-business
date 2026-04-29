import SectionFadeIn from "@/components/SectionFadeIn";
import committeeImage from "@/assets/grievances-redressal-committee.webp";

const facultyRows = [
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
    name: "Dr.G.Sabitha",
    designation: "Associate Professor",
    role: "Member",
  },
  {
    sno: "4",
    name: "Mr.Rajesh Pershad",
    designation: "Associate Professor",
    role: "Member",
  },
  {
    sno: "5",
    name: "Mr.G.Prasanth",
    designation: "Associate Professor",
    role: "Member",
  },
  {
    sno: "6",
    name: "Dr.T.Sudha",
    designation: "Associate Professor",
    role: "Member",
  },
];

const GrievanceRedressalCommitteePage = () => {
  return (
    <main className="pt-0 md:pt-20 bg-background overflow-x-clip">
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_18%_24%,rgba(220,38,38,0.22),transparent_48%),radial-gradient(circle_at_80%_10%,rgba(2,132,199,0.2),transparent_40%),linear-gradient(145deg,#0f172a,#1e293b)] text-primary-foreground section-padding">
        <div className="container-wide relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <SectionFadeIn>
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em]">
                C/2025-26/01
              </p>
              <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight">
                GRIEVANCES REDRESSAL COMMITTEE
              </h1>
              <h2 className="mt-4 text-xl md:text-2xl font-black leading-tight">
                STUDENT GRIEVANCES REDRESSAL COMMITTEE
              </h2>
              <p className="mt-5 text-sm md:text-base leading-relaxed text-primary-foreground/90">
                The Student Grievances Redressal Committee is reconstituted with
                the following faculty members for the academic year 2025-2026,
                to handle the student grievances related to the Academic and
                Non-Academic matters. The roles and functions as per the UGC
                Guidelines.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-[1.6rem] border border-primary/25 bg-white/10 p-3 shadow-[0_24px_60px_rgba(2,8,23,0.32)] backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-secondary aspect-[4/3]">
                <img
                  src={committeeImage}
                  alt="Grievances Redressal Committee"
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
                    href="mailto:Director@theasb.in"
                    className="mt-2 inline-block text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    Director@theasb.in
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
                      S.No
                    </th>
                    <th className="border border-border px-4 py-3 font-bold text-foreground">
                      Name of the Faculty
                    </th>
                    <th className="border border-border px-4 py-3 font-bold text-foreground">
                      Designation
                    </th>
                    <th className="border border-border px-4 py-3 font-bold text-foreground">
                      SGRC – Role
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {facultyRows.map((row, idx) => (
                    <tr
                      key={row.sno}
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
                        {row.role}
                      </td>
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

export default GrievanceRedressalCommitteePage;
