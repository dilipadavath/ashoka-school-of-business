import SectionFadeIn from "@/components/SectionFadeIn";
import researchConsultingImg from "@/assets/Research and Consulting.webp";

const focusedFunctions = [
  "Publishing an Annual Journal",
  "Publishing a Bi-monthly Newsletter",
  "Providing updated information on the various research opportunities",
  "Providing database and statistical support services for analysis and reporting",
  "Facilitating/Networking/Liaising/Partnering with Funding agencies and Regulatory bodies such as AICTE, ICSSR for sponsored Minor research projects.",
  "Organizing Workshops, Symposia, FDPs, National and International Conferences and Seminars.",
  "Promoting Consultancy and Management Development Programmes (MDPs)",
];

const ResearchAndConsultingPage = () => {
  return (
    <div className="pt-20 bg-background overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground px-4 md:px-8 py-14 md:py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-16 top-6 h-52 w-52 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        </div>

        <div className="container-wide relative z-10 px-4 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <SectionFadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.96]">Research and Consulting</h1>
            <p className="mt-6 max-w-2xl text-primary-foreground/80 text-base md:text-lg leading-relaxed">
              The Centre is to monitor and administer Research programs for faculty and students and to encourage them
              to be focused on research activities by providing the necessary infrastructural set up including reputed
              journals and information materials on timely basis to facilitate quality research output. The objectives
              of the Cell are to Create and promote a culture of research among the faculty and staff , to organize
              various workshops/ seminars/ trainings related to promotion of research, to enhance the research output
              of the institute by research paper publication in referred journals and reputed conferences, to publish
              an ISSN/refereed research journal of the college on annual basis, to facilitate application of research
              projects and to encourage and motivate seminar and conference participations and paper presentations.
            </p>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="relative rounded-[1.4rem] border border-primary/30 bg-white/95 p-3 shadow-[0_20px_70px_rgba(2,8,23,0.35)]">
              <div className="overflow-hidden rounded-[1rem] border border-border bg-secondary">
                <img
                  src={researchConsultingImg}
                  alt="Research and Consulting at ASB"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-20 pt-4">
        <div className="container-wide px-4">
          <SectionFadeIn>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-charcoal/20 bg-charcoal p-6 md:p-8 md:p-10 shadow-[0_24px_70px_rgba(2,8,23,0.22)]">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-8 right-10 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />
                <div className="absolute -bottom-10 left-8 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
              </div>

              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-black text-primary-foreground">Hence ASB's focused functions are:</h2>

                <div className="mt-8 relative">
                  <div className="hidden md:block pointer-events-none absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

                  <div className="space-y-4 md:space-y-5">
                    {focusedFunctions.map((item, index) => (
                      <div key={item} className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-5">
                        <div className={index % 2 === 0 ? "md:col-start-1" : "md:col-start-3"}>
                          <div className="group relative h-full overflow-hidden rounded-2xl border border-primary/35 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-primary/70 hover:bg-white/15 hover:-translate-y-1">
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary via-primary/70 to-transparent" />
                            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/20 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="relative flex items-start gap-3 px-4 py-4 md:px-5 md:py-5">
                              <span className="md:hidden mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-primary-foreground">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <p className="text-sm md:text-[0.95rem] text-primary-foreground/90 leading-relaxed">{item}</p>
                            </div>
                          </div>
                        </div>

                        <div className="hidden md:flex md:col-start-2 md:items-center md:justify-center">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/60 bg-primary text-xs font-black text-primary-foreground shadow-[0_0_0_6px_rgba(15,23,42,0.55)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </div>
  );
};

export default ResearchAndConsultingPage;
