import SectionFadeIn from "@/components/SectionFadeIn";
import TextReveal from "@/components/TextReveal";
import HoverCardAnimation from "@/components/HoverCardAnimation";

const FacultyPage = () => {
  return (
    <main className="pt-20 bg-background overflow-x-clip">
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_18%_24%,rgba(220,38,38,0.22),transparent_48%),radial-gradient(circle_at_80%_10%,rgba(2,132,199,0.2),transparent_40%),linear-gradient(145deg,#0f172a,#1e293b)] text-primary-foreground px-4 md:px-8 py-16 md:py-24">
        <div className="container-wide relative z-10 px-4 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <SectionFadeIn>
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em]">
                Academic Excellence
              </p>
              <TextReveal variant="word" delay={0.1} stagger={0.12}>
                <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight">Faculty</h1>
              </TextReveal>
              <p className="mt-5 text-sm md:text-base leading-relaxed text-primary-foreground/90">
                Our faculty members are world-renowned for their cutting-edge research and impact on current business practices.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="rounded-[1.8rem] border border-primary/25 bg-white/10 p-6 shadow-[0_24px_60px_rgba(2,8,23,0.32)] backdrop-blur-sm">
              <HoverCardAnimation glowing>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/15 bg-black/15 p-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">Faculty</p>
                    <p className="mt-2 text-lg font-bold">World-renowned</p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-black/15 p-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">Research</p>
                    <p className="mt-2 text-lg font-bold">Cutting-edge</p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-black/15 p-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">Impact</p>
                    <p className="mt-2 text-lg font-bold">Business Practice</p>
                  </div>
                </div>
              </HoverCardAnimation>
            </div>
          </SectionFadeIn>
        </div>
      </section>

    </main>
  );
};

export default FacultyPage;
