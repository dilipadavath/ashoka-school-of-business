import SectionFadeIn from "@/components/SectionFadeIn";
import pathImage from "@/assets/path image.webp";

const PathPage = () => {
  return (
    <div className="pt-0 md:pt-20 bg-background overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground section-padding">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        </div>

        <div className="container-wide relative z-10 grid gap-10 lg:grid-cols-[1fr_1.05fr] items-center">
          <SectionFadeIn>
            <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em]">
              Why ASB
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] text-primary-foreground">
              PATH
            </h1>
            <p className="mt-6 max-w-2xl text-primary-foreground/75 text-base md:text-lg leading-relaxed">
              The PATH program serves to effectively connect PGDM students with
              various industries through a variety of engaging activities,
              including site visits, guest lectures, and comprehensive faculty
              guidance. This connection not only enhances students' job
              readiness but also fosters valuable networking opportunities
              within the industry. Additionally, the program plays a crucial
              role in aligning experiential field learning with the students'
              academic goals, ensuring that their practical experiences
              complement and enrich their theoretical knowledge. By integrating
              these elements, the PATH program significantly contributes to the
              holistic development of students as they prepare to enter the
              professional world.
            </p>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-[1.6rem] border border-primary/25 bg-white/10 p-3 shadow-[0_24px_60px_rgba(2,8,23,0.32)] backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-secondary">
                <img
                  src={pathImage}
                  alt="PATH Program at ASB"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <div className="h-1 w-full bg-primary" />
    </div>
  );
};

export default PathPage;
