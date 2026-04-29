import SectionFadeIn from "@/components/SectionFadeIn";

const TermsConditionsPage = () => {
  return (
    <main className="pt-0 md:pt-20 bg-background overflow-x-clip">
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_18%_24%,rgba(220,38,38,0.22),transparent_48%),radial-gradient(circle_at_80%_10%,rgba(2,132,199,0.2),transparent_40%),linear-gradient(145deg,#0f172a,#1e293b)] text-primary-foreground section-padding">
        <div className="container-wide relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <SectionFadeIn>
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em]">
                Policy
              </p>
              <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight">
                Terms &amp; Conditions
              </h1>
              <p className="mt-5 text-sm md:text-base leading-relaxed text-primary-foreground/90">
                These Terms &amp; Conditions govern your use of Ashoka School of
                Business’s website and services. By accessing or using the site,
                you agree to these terms.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="rounded-[1.8rem] border border-primary/25 bg-white/10 p-6 shadow-[0_24px_60px_rgba(2,8,23,0.32)] backdrop-blur-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-black/15 p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">
                    Scope
                  </p>
                  <p className="mt-2 text-base font-semibold">
                    Website usage and services
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/15 p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">
                    Jurisdiction
                  </p>
                  <p className="mt-2 text-base font-semibold">
                    Telangana courts
                  </p>
                </div>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding bg-[linear-gradient(to_bottom,rgba(248,250,252,0.8),rgba(255,255,255,1))]">
        <div className="container-wide max-w-5xl mx-auto space-y-8">
          <SectionFadeIn>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Overview
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                These Terms &amp; Conditions govern your use of Ashoka School of
                Business’s website and services. By accessing or using the site,
                you agree to these terms.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.04}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Scope &amp; Acceptance
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                Covers website usage, content ownership, user obligations, and
                liability limitations.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.08}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Intellectual Property
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                All content (text, logos, images, etc.) is owned by or licensed
                to ASB. Unauthorized use is prohibited.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                User Behavior
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                Users agree not to misuse or interfere with the site, harass
                others, submit false information, or engage in unlawful
                activity.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.16}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Disclaimers &amp; Liability
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                ASB provides the site “as is”—no warranties are made about
                uptime or accuracy. We are not liable for damages arising from
                site use.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.2}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                External Links
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                Links to third-party sites are for convenience. We do not
                endorse or assume responsibility for the content of external
                sites.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.24}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Changes &amp; Updates
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                We reserve the right to modify these Terms at any time.
                Continued use constitutes acceptance.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.28}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Governing Law
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                These terms are governed by laws of India. Any disputes will be
                subject to the jurisdiction of Telangana courts.
              </p>
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </main>
  );
};

export default TermsConditionsPage;
