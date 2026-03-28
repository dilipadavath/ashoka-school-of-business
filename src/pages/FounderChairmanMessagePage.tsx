import SectionFadeIn from "@/components/SectionFadeIn";
import founderChairmanImg from "@/assets/Founder and Chairman.webp";

const FounderChairmanMessagePage = () => {
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
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.24em] mb-4">Founder Message</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] text-primary-foreground">Founder and Chairman</h1>
              <div className="mt-6 flex w-fit items-center gap-3 sm:gap-4">
                <span className="h-[2px] w-8 sm:w-14 bg-primary/80" />
                <span className="text-primary-foreground/90 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em]">Nomula Ashok Kumar</span>
                <span className="h-[2px] w-8 sm:w-14 bg-primary/80" />
              </div>
              <p className="mt-7 max-w-2xl text-primary-foreground/75 text-base md:text-lg leading-relaxed">
                A founding vision rooted in values, social responsibility, and leadership that shapes future-ready professionals.
              </p>
            </SectionFadeIn>

            <SectionFadeIn className="lg:col-span-5" delay={0.08}>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/35 to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-charcoal/70 p-3 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
                  <div className="overflow-hidden rounded-[1.4rem]">
                    <img
                      src={founderChairmanImg}
                      alt="Founder and Chairman Nomula Ashok Kumar"
                      className="h-[360px] w-full object-cover object-top md:h-[430px]"
                    />
                  </div>
                  <div className="px-2 pb-2 pt-4">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-primary">ASB Leadership</p>
                    <p className="mt-1 text-base md:text-lg font-bold text-primary-foreground">Nomula Ashok Kumar</p>
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
                  <p className="mt-1 text-xl font-black text-foreground">Founder and Chairman</p>
                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl border border-border/70 bg-secondary/65 px-4 py-3">
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Focus</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">Ethical education with social impact and values-driven leadership</p>
                    </div>
                    <div className="rounded-xl border border-border/70 bg-secondary/65 px-4 py-3">
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Vision</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">Academic excellence aligned with industry demand and responsibility</p>
                    </div>
                  </div>
                </aside>

                <article className="rounded-[1.6rem] border border-border/70 bg-white p-6 md:p-8">
                  <blockquote className="border-l-4 border-primary pl-4 md:pl-5 text-base md:text-lg text-foreground font-medium leading-relaxed">
                    There can be no nobler act than leading an institution that shapes capable professionals and responsible citizens.
                  </blockquote>

                  <div className="mt-6 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
                    <p className="first-letter:float-left first-letter:mr-2 first-letter:text-4xl first-letter:font-black first-letter:text-foreground first-letter:leading-none">
                      Since the inception of Ashoka School Business our aim is to provide a scholastically exhilarating environment consenting our students to feel more responsible towards the society. It is pleasing to note that our intensive efforts under the auspices of Ashok Sailaja Educational Society have fructified and ASB today enjoys the distinction in the fields of Management Education with Tech-enabled Industry demand programs.
                    </p>
                    <p>
                      Our beliefs have influenced the way of teaching and make the students participate in philanthropy and social welfare. I have realized that there can&apos;t be a nobler act than to lead an educational institute like ASHOKA.
                    </p>
                    <p>
                      I strongly believe that education ought to be "good" or "moral" and for this reason it is important to groom the students morally for the real life of the corporate world and imbibe in them not only academic brilliance but also professional ethics.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {[
                      "Academic Excellence",
                      "Professional Ethics",
                      "Social Responsibility",
                      "Industry Readiness",
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

export default FounderChairmanMessagePage;