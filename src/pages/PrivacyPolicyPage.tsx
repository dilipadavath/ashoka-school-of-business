import SectionFadeIn from "@/components/SectionFadeIn";

const PrivacyPolicyPage = () => {
  return (
    <main className="pt-20 bg-background overflow-x-clip">
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_18%_24%,rgba(220,38,38,0.22),transparent_48%),radial-gradient(circle_at_80%_10%,rgba(2,132,199,0.2),transparent_40%),linear-gradient(145deg,#0f172a,#1e293b)] text-primary-foreground px-4 md:px-8 py-16 md:py-24">
        <div className="container-wide relative z-10 px-4 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <SectionFadeIn>
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em]">
                Policy
              </p>
              <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight">Privacy Policy</h1>
              <p className="mt-5 text-sm md:text-base leading-relaxed text-primary-foreground/90">
                Ashoka School of Business (ASB) respects your privacy. This policy explains how we collect, use, and protect personal information shared through our website.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="rounded-[1.8rem] border border-primary/25 bg-white/10 p-6 shadow-[0_24px_60px_rgba(2,8,23,0.32)] backdrop-blur-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-black/15 p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">Data Controller</p>
                  <p className="mt-2 text-base font-semibold">Ashoka School of Business</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/15 p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">Contact</p>
                  <a
                    href="mailto:info@asb.org.in"
                    className="mt-2 inline-block text-base font-semibold text-primary-foreground hover:text-primary"
                  >
                    info@asb.org.in
                  </a>
                </div>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding bg-[linear-gradient(to_bottom,rgba(248,250,252,0.8),rgba(255,255,255,1))]">
        <div className="container-wide max-w-5xl mx-auto px-4 space-y-8">
          <SectionFadeIn>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">Introduction</h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                Ashoka School of Business ("ASB", "we", "our", "us") respects your privacy. This policy describes how we collect, use, and protect your personal information when you visit or interact with our website at asb.org.in.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.04}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">Information We Collect</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-border bg-secondary/20 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Personal Data</p>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
                    Name, email, phone number, address, and academic details submitted through inquiries, applications, subscriptions, or events.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-secondary/20 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Technical Data</p>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
                    IP address, browser type, usage logs, and cookie data, including analytics tools such as Google Analytics or similar services.
                  </p>
                </div>
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.08}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">How We Use Your Information</h2>
              <ul className="mt-5 space-y-3 text-sm md:text-base leading-relaxed text-muted-foreground list-disc list-inside">
                <li>To process applications, registrations, and requests.</li>
                <li>To communicate about programs, updates, and services.</li>
                <li>For legal compliance and administration.</li>
                <li>To analyze and improve our website and offerings.</li>
              </ul>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">Third-Party Sharing</h2>
              <ul className="mt-5 space-y-3 text-sm md:text-base leading-relaxed text-muted-foreground list-disc list-inside">
                <li>We do not sell or lease your personal information.</li>
                <li>We may share data with trusted service providers, such as analytics and email partners, under confidentiality commitments.</li>
              </ul>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.16}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">Cookies and Tracking</h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                Our website uses cookies for site performance, analytics, and user experience. You can control or disable cookies through your browser settings.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.2}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">Data Retention and Your Rights</h2>
              <ul className="mt-5 space-y-3 text-sm md:text-base leading-relaxed text-muted-foreground list-disc list-inside">
                <li>We retain personal data as needed for operational, legal, or academic purposes.</li>
                <li>You may request access, correction, or deletion of your personal data by contacting us.</li>
              </ul>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.24}>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">Changes to This Policy and Contact</h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                We may update this policy from time to time. For privacy queries or requests, please contact us at:
              </p>
              <a
                href="mailto:info@asb.org.in"
                className="mt-4 inline-block text-sm md:text-base font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                info@asb.org.in
              </a>
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;