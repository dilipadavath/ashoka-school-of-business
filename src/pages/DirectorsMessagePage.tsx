import SectionFadeIn from "@/components/SectionFadeIn";
import directorImg from "@/assets/director photo.webp";

const DirectorsMessagePage = () => {
  return (
    <div className="pt-20 bg-background overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground px-4 md:px-8 py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        </div>

        <div className="container-wide relative z-10 px-4">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <SectionFadeIn className="lg:col-span-7">
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.24em] mb-4">Director&apos;s Message</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] text-primary-foreground">Director</h1>
              <div className="mt-6 flex w-fit items-center gap-3 sm:gap-4">
                <span className="h-[2px] w-8 sm:w-14 bg-primary/80" />
                <span className="text-primary-foreground/90 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em]">Dr. Y Lakshman Kumar</span>
                <span className="h-[2px] w-8 sm:w-14 bg-primary/80" />
              </div>
              <p className="mt-7 max-w-2xl text-primary-foreground/75 text-base md:text-lg leading-relaxed">
                Visionary leadership focused on industry readiness, ethical values, and transformative management education.
              </p>
            </SectionFadeIn>

            <SectionFadeIn className="lg:col-span-5" delay={0.08}>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/35 to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-charcoal/70 p-3 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
                  <div className="overflow-hidden rounded-[1.4rem]">
                    <img
                      src={directorImg}
                      alt="Director Dr. Y Lakshman Kumar"
                      className="h-[360px] w-full object-cover object-top md:h-[430px]"
                    />
                  </div>
                  <div className="px-2 pb-2 pt-4">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-primary">ASB Leadership</p>
                    <p className="mt-1 text-base md:text-lg font-bold text-primary-foreground">Dr. Y Lakshman Kumar</p>
                  </div>
                </div>
              </div>
            </SectionFadeIn>
          </div>
        </div>
      </section>

      <section className="relative px-4 md:px-8 pb-16 md:pb-20">
        <div className="container-wide px-4">
          <SectionFadeIn>
            <div className="mx-auto -mt-8 md:-mt-12 max-w-6xl rounded-[2rem] border border-border/70 bg-gradient-to-br from-white via-white to-secondary/60 p-6 md:p-10 shadow-[0_25px_70px_rgba(15,23,42,0.14)]">
              <div className="grid items-start gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
                <aside className="rounded-[1.6rem] border border-border/70 bg-white p-5 md:p-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-primary">Role</p>
                  <p className="mt-1 text-xl font-black text-foreground">Director</p>
                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl border border-border/70 bg-secondary/65 px-4 py-3">
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Focus</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">Leadership with confidence, competence, and conscience</p>
                    </div>
                    <div className="rounded-xl border border-border/70 bg-secondary/65 px-4 py-3">
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Programs</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">PGDM and PGDM (AI&amp;DS)</p>
                    </div>
                  </div>
                </aside>

                <article className="rounded-[1.6rem] border border-border/70 bg-white p-6 md:p-8">
                  <blockquote className="border-l-4 border-primary pl-4 md:pl-5 text-base md:text-lg text-foreground font-medium leading-relaxed">
                    At ASB, learning goes beyond the classroom. You are empowered to lead, create, and transform with purpose.
                  </blockquote>

                  <div className="mt-6 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
                    <p className="first-letter:float-left first-letter:mr-2 first-letter:text-4xl first-letter:font-black first-letter:text-foreground first-letter:leading-none">
                      It is my pleasure to welcome you to ASB, where we are dedicated to shaping not just professionals, but visionary leaders equipped to thrive in a dynamic global business environment. The two-year PGDM &amp; PGDM (AI&amp;DS) programs at ASB is a transformative journey that blends rigorous academic training with immersive industry exposure, preparing you to lead with confidence, competence, and conscience.
                    </p>
                    <p>
                      Our carefully crafted curriculum, designed in collaboration with top academicians and industry leaders, focuses on strengthening both core and functional business knowledge. Complementing this are value-added certifications, aptitude and personality development sessions, language and communication training, and hands-on simulations that enhance your readiness for real-world challenges.
                    </p>
                    <p>
                      Weekly interactions with corporate leaders, intensive mentoring, and the unique "Executives in Residence" series provide invaluable industry insight. In addition to academics, we strongly encourage participation in student-led clubs and events that let you apply management principles in cultural, financial, marketing, HR and agribusiness management.
                    </p>
                    <p>
                      At ASB, learning goes beyond the classroom and offers you the independence and responsibility to lead, create, and transform. This is your opportunity to engage deeply, evolve holistically, and realize the full potential that lies within you. Seize it with purpose, passion, and persistence.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {[
                      "Industry Immersion",
                      "Leadership Development",
                      "Executives in Residence",
                      "Ethics and Values",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </div>
  );
};

export default DirectorsMessagePage;