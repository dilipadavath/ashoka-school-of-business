import SectionFadeIn from "@/components/SectionFadeIn";

const InfosysSpringboardPage = () => {
  return (
    <div className="pt-0 md:pt-20 bg-background overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground section-padding">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        </div>

        <div className="container-wide relative z-10 grid gap-10 items-center">
          <SectionFadeIn>
            <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em]">
              Why ASB
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] text-primary-foreground">
              Infosys Springboard
            </h1>
            <p className="mt-6 max-w-3xl text-primary-foreground/75 text-base md:text-lg leading-relaxed">
              ASB partners with Infosys Springboard, offering access to over
              70,000 industry-relevant courses to equip students with essential
              technical and professional skills.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      <div className="h-1 w-full bg-primary" />
    </div>
  );
};

export default InfosysSpringboardPage;
