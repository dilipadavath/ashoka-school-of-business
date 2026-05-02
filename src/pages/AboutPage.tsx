import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SectionFadeIn from "@/components/SectionFadeIn";
import TextReveal from "@/components/TextReveal";
import HoverCardAnimation from "@/components/HoverCardAnimation";
import AnimatedButton from "@/components/AnimatedButton";
import { Eye, Target, GraduationCap } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import heroAbout from "@/assets/About_banner.jpeg";
import aboutImg1 from "@/assets/about img 1.webp";
import aboutImg2 from "@/assets/about img2.webp";
import founderChairmanImg from "@/assets/Founder and Chairman.webp";

const AboutPage = () => {
  const location = useLocation();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);

  return (
    <div className="pt-0 md:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[240px] md:min-h-[320px] section-padding">
        <img
          src={heroAbout}
          alt="About Ashoka School of Business"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/70 to-charcoal/55" />
        <div className="container-wide relative z-10">
          <SectionFadeIn>
            <div className="max-w-3xl">
              <p className="text-lg text-primary font-semibold uppercase tracking-[0.28em] mb-4">
                About
              </p>
              <TextReveal variant="word" delay={0.1} stagger={0.08}>
                <h1 className="font-display text-4xl md:text-6xl font-black text-primary mb-5 tracking-tight">
                  About
                </h1>
              </TextReveal>
              <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                A business school environment built to develop industry-ready
                leaders with global outlook, entrepreneurial thinking, and
                strong professional ethics.
              </p>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* About ASB */}
      <section
        id="about"
        className="section-padding bg-background scroll-mt-28"
      >
        <div className="container-wide">
          <SectionFadeIn>
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
              <div className="max-w-2xl">
                <p className="text-primary font-semibold text-sm uppercase tracking-[0.28em] mb-4">
                  Why Choose Us
                </p>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  ABOUT ASB
                </h2>
                <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Set up in a 30-acre lush green environs, ASB offers PGDM
                    programs and promises a very high ROI. The students will
                    have an advantage of studying in Hyderabad, a city which is
                    throbbing with start-ups by young graduates with
                    out-of-the-box concepts.
                  </p>
                  <p>
                    ASB offers PGDM programs blended with disruptive
                    technologies. With faculty from across the globe, a
                    curriculum that is unique and exclusive to ASB, with
                    Industry experts adopting students for industrial training
                    and personality development, ASB aspires to be among the top
                    B-Schools in India. ASB symbolizes the maturing of Indian
                    Technical and Management ability and “can-do”
                    entrepreneurial spirit, especially as derived from the
                    private sector.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0.72fr_1fr] gap-4 lg:gap-5">
                <div className="pt-10 md:pt-14">
                  <div className="overflow-hidden rounded-[1.75rem] shadow-xl shadow-slate-900/10">
                    <img
                      src={aboutImg1}
                      alt="ASB students and faculty"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-[1.75rem] shadow-xl shadow-slate-900/10 min-h-[360px] md:min-h-[460px]">
                  <img
                    src={aboutImg2}
                    alt="Ashoka School of Business boardroom"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/90 px-4 py-2 backdrop-blur text-xs font-semibold uppercase tracking-[0.2em] text-charcoal">
                    About
                  </div>
                  <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        aria-label="Play Why Healthcare Management at ASB video"
                        className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#3b37a8] text-primary-foreground shadow-[0_20px_40px_rgba(59,55,168,0.35)] transition-transform hover:scale-105"
                      >
                        <span className="ml-1 text-4xl leading-none">▶</span>
                      </button>
                    </DialogTrigger>
                    <DialogContent
                      showCloseButton={false}
                      className="max-w-[min(1100px,calc(100vw-2rem))] overflow-visible border-white/10 bg-black p-0 shadow-2xl"
                    >
                      <DialogClose className="absolute -right-3 -top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-charcoal text-primary-foreground shadow-lg transition-colors hover:bg-primary">
                        <span className="text-2xl leading-none">×</span>
                        <span className="sr-only">Close</span>
                      </DialogClose>
                      <DialogTitle className="sr-only">
                        Why Healthcare Management at ASB?
                      </DialogTitle>
                      <div className="aspect-video w-full overflow-hidden rounded-lg">
                        {isVideoOpen && (
                          <iframe
                            className="h-full w-full"
                            src="https://www.youtube.com/embed/c4000TtkGlk?autoplay=1&rel=0"
                            title="Why Healthcare Management at ASB?"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        id="vision-mission"
        className="section-padding pt-0 bg-background scroll-mt-28"
      >
        <div className="container-wide">
          <HoverCardAnimation glowing>
            <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              <div className="rounded-[1.75rem] bg-primary p-8 md:p-10 text-primary-foreground shadow-[0_16px_40px_rgba(226,34,43,0.18)]">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                  <h3 className="text-2xl font-bold text-primary-foreground">
                    Our Vision
                  </h3>
                </div>
                <p className="text-primary-foreground/90 text-lg leading-relaxed">
                  To deliver world class facilities that support brilliance in
                  Management Education, Research, Teaching and Learning.
                </p>
              </div>
              <div className="rounded-[1.75rem] bg-charcoal p-8 md:p-10 text-primary-foreground shadow-[0_16px_40px_rgba(17,24,39,0.18)]">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-primary-foreground" />
                  <h3 className="text-2xl font-bold text-primary-foreground">
                    Our Mission
                  </h3>
                </div>
                <p className="text-primary-foreground/90 text-lg leading-relaxed">
                  Our Mission is to contribute to the society through the
                  pursuit of Education Learning and Research at the
                  International level of Excellence.
                </p>
              </div>
            </div>
          </HoverCardAnimation>
        </div>
      </section>

      {/* Founder Message */}
      <section id="leadership" className="section-padding bg-background">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.28em] mb-3">
                Founder
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-foreground">
                Message
              </h2>
            </div>
          </SectionFadeIn>

          <div className="max-w-6xl mx-auto">
            <SectionFadeIn>
              <section
                id="founder-chairman-message"
                className="scroll-mt-28 grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start"
              >
                <div className="rounded-[2rem] border border-border bg-secondary p-6 md:p-8 text-center shadow-lg shadow-slate-900/5">
                  <div className="mx-auto mb-6 h-44 w-44 overflow-hidden rounded-[2rem] shadow-lg shadow-slate-900/10 ring-1 ring-border/60">
                    <img
                      src={founderChairmanImg}
                      alt="Founder and Chairman Nomula Ashok Kumar"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-2">
                    Founder and Chairman
                  </p>
                  <h3 className="text-2xl font-black text-foreground leading-tight">
                    Nomula Ashok Kumar
                  </h3>
                </div>

                <div className="rounded-[2rem] border border-border bg-background p-6 md:p-10 shadow-lg shadow-slate-900/5">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <span className="text-sm text-primary font-semibold uppercase tracking-[0.22em]">
                      Founder and Chairman
                    </span>
                  </div>
                  <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      Since the inception of Ashoka School Business our aim is
                      to provide a scholastically exhilarating environment
                      consenting our students to feel more responsible towards
                      the society. It is pleasing to note that our intensive
                      efforts under the auspices of Ashok Sailaja Educational
                      Society have fructified and ASB today enjoys the
                      distinction in the fields of Management Education with
                      Tech-enabled Industry demand programs. Our beliefs have
                      influenced the way of teaching and make the students
                      participate in philanthropy and social welfare. I have
                      realized that there can’t be a nobler act than to lead an
                      educational institute like ASHOKA.
                    </p>
                    <p>
                      I strongly believe that education ought to be “good” or
                      “moral” and for this reason it is important to groom the
                      students morally for the real life of the corporate world
                      and imbibe in them not only academic brilliance but also
                      professional ethics.
                    </p>
                  </div>
                </div>
              </section>
            </SectionFadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
