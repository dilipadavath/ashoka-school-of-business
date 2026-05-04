import SectionFadeIn from "@/components/SectionFadeIn";

const CancellationRefundPolicyPage = () => {
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
                Cancellation &amp; Refund Policy
              </h1>
              <p className="mt-5 text-sm md:text-base leading-relaxed text-primary-foreground/90">
                While ASB is an educational institution (typically not
                e-commerce), this policy can cover cases such as admissions fees
                or program-related charges.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="rounded-[1.8rem] border border-primary/25 bg-white/10 p-6 shadow-[0_24px_60px_rgba(2,8,23,0.32)] backdrop-blur-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-black/15 p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">
                    Cancellation Window
                  </p>
                  <p className="mt-2 text-base font-semibold">
                    Within 7 working days
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/15 p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">
                    Refund Processing
                  </p>
                  <p className="mt-2 text-base font-semibold">Within 30 days</p>
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
                Applicability Recognized
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                While ASB is an educational institution (typically not
                e-commerce), this policy can cover cases such as admissions fees
                or program-related charges.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.04}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Cancellation
              </h2>
              <ul className="mt-5 space-y-3 text-sm md:text-base leading-relaxed text-muted-foreground list-disc list-inside">
                <li>
                  Students can cancel their admission/enrollment in writing
                  within 7 working days of confirmation.
                </li>
                <li>Cancellations should be sent to admissions@asb.org.in.</li>
              </ul>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.08}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Refunds
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                Refund eligibility depends on timing and administrative costs.
                For example:
              </p>
              <ul className="mt-5 space-y-3 text-sm md:text-base leading-relaxed text-muted-foreground list-disc list-inside">
                <li>Within 7 days: 90% refund after deductions.</li>
                <li>
                  Beyond deadline: Subject to ASB’s discretion and policies
                  detailed in admission guidelines.
                </li>
              </ul>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Exceptions &amp; Processing
              </h2>
              <ul className="mt-5 space-y-3 text-sm md:text-base leading-relaxed text-muted-foreground list-disc list-inside">
                <li>
                  No refunds are typically granted after classes begin, except
                  under exceptional circumstances.
                </li>
                <li>
                  Refunds processed within 30 days to the original payment
                  method.
                </li>
              </ul>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.16}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Contact for Queries
              </h2>
              <a
                href="mailto:admissions@asb.org.in"
                className="mt-4 inline-block text-sm md:text-base font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                admissions@asb.org.in
              </a>
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </main>
  );
};

export default CancellationRefundPolicyPage;
