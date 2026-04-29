import SectionFadeIn from "@/components/SectionFadeIn";
import reachImage from "@/assets/Reach image.webp";

const ReachPage = () => {
  return (
    <div className="pt-0 md:pt-20 bg-background overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground section-padding">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        </div>

        <div className="container-wide relative z-10 grid gap-10 lg:grid-cols-[1fr_1.05fr] items-center">
          <SectionFadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] text-primary-foreground">
              REACH
            </h1>
            <p className="mt-6 max-w-2xl text-primary-foreground/75 text-base md:text-lg leading-relaxed">
              The REACH program plays a vital role in bridging the gap between
              management education and the unique challenges faced by rural
              communities. By concentrating on the Sustainable Development Goals
              (SDGs), it emphasizes the importance of developing sustainable
              solutions that address these specific issues. Through its efforts,
              the program aims not only to promote community development but
              also to cultivate impactful leadership that can drive positive
              change in these areas. This holistic approach ensures that the
              educational experience is directly connected to real-world needs,
              empowering participants to make a meaningful difference in their
              communities.
            </p>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-[1.6rem] border border-primary/25 bg-white/10 p-3 shadow-[0_24px_60px_rgba(2,8,23,0.32)] backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-secondary">
                <img
                  src={reachImage}
                  alt="REACH at ASB"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <div className="h-1 w-full bg-primary" />
    </div>
  );
};

export default ReachPage;
