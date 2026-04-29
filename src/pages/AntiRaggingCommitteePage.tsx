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
    name: "Dr.G.Swathi Kumari",
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
    name: "Mr.I Gopi Naik",
    designation: "Assistant Professor",
    role: "Member",
  },
  {
    sno: "5.",
    name: "Mr.Rajesh Pershad",
    designation: "Associate Professor",
    role: "Member",
  },
  {
    sno: "6.",
    name: "Mr.G.Prasanth",
    designation: "Associate Professor",
    role: "Member",
  },
  {
    sno: "7.",
    name: "Mallam Aashritha",
    designation: "Student",
    role: "Member",
  },
  {
    sno: "8",
    name: "Vavilala Chanti",
    designation: "Student",
    role: "Member",
  },
  {
    sno: "9",
    name: "Indrakanti Srinivasa Chary",
    designation: "Parent",
    role: "Member",
  },
  {
    sno: "10",
    name: "Karnati Shiva Laxmi",
    designation: "Parent",
    role: "Member",
  },
  {
    sno: "11",
    name: "K.Raghupathi",
    designation: "News Reporter(Enadu)",
    role: "Media Coordinator",
  },
];

const responsibilities = [
  "To be vigilant at all hours all around the campus and other places vulnerable to incidents of, and having the potential of, ragging and shall be empowered to inspect such places",
  "To make surprise raids on hostels, and other places vulnerable to incidents and having the potential for ragging.",
  "To conduct an on-the-spot enquiry into any incident of ragging referred to it by the faculty or student or parent or guardian, as the case may be: and the enquiry report along with recommendations shall be submitted to the Head of the Institution for action.",
  "To ensure the display of posters on Institution and Department Notice Boards and other prominent designated places.",
  "To formulate a procedure to collect an affidavit from all the first year students at the time of admission.",
];

const AntiRaggingCommitteePage = () => {
  return (
    <main className="pt-0 md:pt-20 bg-background overflow-x-clip">
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_18%_24%,rgba(220,38,38,0.18),transparent_48%),radial-gradient(circle_at_80%_10%,rgba(2,132,199,0.16),transparent_40%),linear-gradient(145deg,#0f172a,#1e293b)] text-primary-foreground section-padding">
        <div className="container-wide relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <SectionFadeIn>
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em]">
                ASB/SGRC/2025-26/01
              </p>
              <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-black leading-[1.04]">
                Anti Ragging Committee
              </h1>
              <h2 className="mt-4 text-lg md:text-xl font-black tracking-wide leading-tight text-primary-foreground/90">
                ANTI RAGGING COMMITTEE
              </h2>
              <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-primary-foreground/90">
                Ragging in any form is a criminal offense and strictly
                prohibited inside and outside the institute. As per the
                directives of the Hon. Supreme Court, the All India Council for
                Technical Education (AICTE), and the Govt. of Telangana, strict
                actions are recommended against students for indulging in and
                abetting ragging.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-[1.6rem] border border-primary/20 bg-white/10 p-3 shadow-[0_20px_50px_rgba(2,8,23,0.28)] backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-secondary aspect-[4/3]">
                <img
                  src={committeeImage}
                  alt="Anti Ragging Committee"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding bg-[linear-gradient(to_bottom,rgba(248,250,252,0.9),rgba(255,255,255,1))]">
        <div className="container-wide max-w-6xl mx-auto space-y-8">
          <SectionFadeIn>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_42px_rgba(15,23,42,0.08)] backdrop-blur-sm space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                Policy Note
              </p>
              <p>
                Whosoever directly or indirectly commits, participates in,
                abets, or propagates ragging within or outside any educational
                institution shall, on conviction, be punished as per the rules.
                If a student is involved in any act of ragging prior to taking
                admission, then such a student will be denied admission to the
                institute.
              </p>
              <p>
                However, if at a later stage it is found that an admitted
                student has indulged in any act of ragging, then such a student
                will be rusticated.
              </p>
              <p>
                Ragging is a criminal offense. Ragging is strictly prohibited by
                both the state government and the central government. Punishment
                for ragging will be as follows:
              </p>
              <ul className="list-disc pl-5 space-y-1 font-medium text-foreground">
                <li>Imprisonment up to three years and fine of Rs.50,000.</li>
                <li>Dismissal from the college</li>
              </ul>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.08}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_42px_rgba(15,23,42,0.08)] backdrop-blur-sm space-y-5">
              <h3 className="text-2xl md:text-3xl font-black text-foreground">
                OBJECTIVES
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                To prohibit, prevent and eliminate the scourge of ragging
                including any conduct by any student whether by words spoken or
                written or by an act which has the effect of teasing, treating
                or handling with rudeness a fresher or any other student, or
                indulging in rowdy or undisciplined activities by any student.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                To monitor, direct and oversee the functions and performance of
                the Anti-Ragging Squads in prevention and curbing of ragging in
                the institution.
              </p>

              <h3 className="pt-2 text-2xl md:text-3xl font-black text-foreground">
                RESPONSIBILITIES
              </h3>
              <ul className="space-y-2 list-disc pl-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                {responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_42px_rgba(15,23,42,0.08)] backdrop-blur-sm">
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

          <SectionFadeIn delay={0.16}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_42px_rgba(15,23,42,0.08)] overflow-x-auto backdrop-blur-sm">
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
                      Role in ARC
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {facultyRows.map((row, idx) => (
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

export default AntiRaggingCommitteePage;
