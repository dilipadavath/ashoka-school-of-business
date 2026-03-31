import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import SectionFadeIn from "@/components/SectionFadeIn";

const ThankYouPage = () => {
  return (
    <main className="pt-20 bg-[linear-gradient(to_bottom,#f8fafc_0%,#ffffff_100%)] min-h-[calc(100svh-80px)] overflow-x-clip">
      <section className="relative overflow-hidden px-4 md:px-8 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
        </div>

        <div className="container-wide relative z-10 px-4 max-w-4xl mx-auto">
          <SectionFadeIn>
            <div className="rounded-3xl border border-border/70 bg-white/95 p-8 md:p-12 text-center shadow-[0_20px_55px_rgba(15,23,42,0.1)] backdrop-blur-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <h1 className="mt-6 text-3xl md:text-5xl font-black text-foreground">Thank You</h1>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                Thank you for submitting your enquiry. Our team will get back to you at the earliest.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Back to Home
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Contact Page
                </Link>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </main>
  );
};

export default ThankYouPage;