import SectionFadeIn from "@/components/SectionFadeIn";

const CesimPage = () => {
  return (
    <div className="pt-0 md:pt-20 bg-background overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground section-padding">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        </div>

        <div className="container-wide relative z-10 grid gap-10 items-center">
          <SectionFadeIn>
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.28em] mb-4">
              Why ASB
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] text-primary-foreground">
              CESIM
            </h1>
            <p className="mt-6 max-w-3xl text-primary-foreground/75 text-base md:text-lg leading-relaxed">
              ASB uses CESIM simulations to build students' strategic,
              analytical, and teamwork skills through real-world business
              scenarios.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      <div className="h-1 w-full bg-primary" />
    </div>
  );
};

export default CesimPage;
