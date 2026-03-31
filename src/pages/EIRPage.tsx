import SectionFadeIn from "@/components/SectionFadeIn";
import eirImage from "@/assets/eir image.webp";

const EIRPage = () => {
  return (
    <div className="pt-20 bg-background overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground px-4 md:px-8 py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        </div>

        <div className="container-wide relative z-10 px-4 grid gap-10 lg:grid-cols-[1fr_1.05fr] items-center">
          <SectionFadeIn>
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.28em] mb-4">Why ASB</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] text-primary-foreground">
              EIR
            </h1>
            <p className="mt-3 text-lg md:text-2xl font-semibold text-primary-foreground/90 uppercase tracking-[0.12em]">
              Executives in Residence
            </p>
            <p className="mt-6 max-w-2xl text-primary-foreground/75 text-base md:text-lg leading-relaxed">
              Students regularly interact with industry executives to gather valuable insights into the various business
              functions that drive successful operations across different sectors.
            </p>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-[1.6rem] border border-primary/25 bg-white/10 p-3 shadow-[0_24px_60px_rgba(2,8,23,0.32)] backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-secondary">
                <img src={eirImage} alt="Executives in Residence at ASB" className="h-full w-full object-cover" />
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <div className="h-1 w-full bg-primary" />
    </div>
  );
};

export default EIRPage;
