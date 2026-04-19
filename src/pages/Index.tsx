import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionFadeIn from "@/components/SectionFadeIn";
import ParallaxSection from "@/components/ParallaxSection";
import PlacementCarousel from "@/components/PlacementCarousel";
import TextReveal from "@/components/TextReveal";
import HoverCardAnimation from "@/components/HoverCardAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import AnimatedButton from "@/components/AnimatedButton";
import FloatingElement from "@/components/FloatingElement";
import campusBuilding from "@/assets/Modern Infrastructure.jpg";
import campusCafeteria from "@/assets/Cafeteria img.jpg";
import campusHub from "@/assets/campus-hub.png";
import awardCeremony from "@/assets/award-ceremony.png";
import smartClassroom from "@/assets/Smart Classrooms.jpg";
import library from "@/assets/library img.jpg";
import studyHall from "@/assets/study hall.jpg";
import campusImg1 from "@/assets/campus-img1.jpg";
import graduation from "@/assets/graduation.jpg";
import chanakyaVideo from "@/asb-event-Made-with-Clipchamp.compressed.mp4";
import {
  Check,
  Compass,
  GraduationCap,
  BookOpen,
  Building2,
  Coffee,
  Gamepad2,
  Globe2,
  Library,
  Monitor,
  Sparkles,
} from "lucide-react";

const whyChooseUsSlides = [
  {
    title: "AI-Driven PGDM in Securities Market",
    description:
      "Practice-led learning with a Rs. 50 Lakhs practice fund and market-aligned exposure through Bloomberg, NSE SMART, and NISM.",
    image: smartClassroom,
    bgColor: "bg-[#7C1F36]",
    icon: GraduationCap,
  },
  {
    title: "Global Immersion Program",
    description:
      "International exposure through GIP to build a global mindset and cross-cultural leadership skills.",
    image: awardCeremony,
    bgColor: "bg-[#1F3A5F]",
    icon: Globe2,
  },
  {
    title: "Innovation & EIR Ecosystem",
    description:
      "Innovation-led learning with startup thinking and mentorship from experienced executives in residence.",
    image: campusHub,
    bgColor: "bg-[#2B5B4F]",
    icon: Sparkles,
  },
  {
    title: "Sprawling Smart Campus",
    description:
      "A vibrant campus designed for collaboration, experiential learning, and all-round student growth.",
    image: campusBuilding,
    bgColor: "bg-[#3F3D56]",
    icon: Compass,
  },
  {
    title: "360 Degree Grooming",
    description:
      "Personality development, communication, and career preparation that improve placement outcomes.",
    image: campusCafeteria,
    bgColor: "bg-[#5A3E2B]",
    icon: Building2,
  },
];

const Index = () => {
  const [showHeroOverlay, setShowHeroOverlay] = useState(false);
  const [whyChooseApi, setWhyChooseApi] = useState<CarouselApi>();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowHeroOverlay(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!whyChooseApi) return;

    const autoplay = window.setInterval(() => {
      whyChooseApi.scrollNext();
    }, 4500);

    return () => window.clearInterval(autoplay);
  }, [whyChooseApi]);

  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={chanakyaVideo}
        />
        <div
          className={`absolute inset-0 bg-charcoal/60 transition-opacity duration-700 ${showHeroOverlay ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`relative z-10 px-4 text-center transition-all duration-700 ${showHeroOverlay ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        >
          <TextReveal
            variant="word"
            delay={0.2}
            stagger={0.08}
            duration={0.6}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-primary-foreground mb-4 tracking-tight"
          >
            Learn. Lead. Conquer.
          </TextReveal>
          <SectionFadeIn delay={0.6} className="mb-10">
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-display font-medium">
              Ashoka School of Business
            </p>
          </SectionFadeIn>
          <SectionFadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                href="/bba"
                className="text-lg"
                size="lg"
                glowing={true}
              >
                Explore Programs
              </AnimatedButton>
              <AnimatedButton
                href="/contact-us"
                variant="outline"
                className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                size="lg"
              >
                Apply Now
              </AnimatedButton>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* About ASB */}
      <section
        id="about"
        className="section-padding bg-background overflow-x-clip"
      >
        <div className="container-wide">
          <SectionFadeIn>
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
              <div className="min-w-0">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                  About ASB
                </p>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                  Why We Are Different?
                </h2>
                <div className="space-y-5 mb-8">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    In a world where every company wants to be more efficient,
                    we believe that the way to do that is to create leaders who
                    can make decisions, take action, and make initiatives in
                    their organisation.
                  </p>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground mb-8"
                >
                  Read More
                </Link>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Global Standard",
                    "The Global Immersion Program (GIP)",
                    "Experiential Learning",
                    "Innovation Hub",
                    "A Sprawling Campus",
                    "360° Grooming",
                    "A Unique Executives in Residence (EIR)",
                    "Well Designed Course Structure",
                  ].map((label) => (
                    <div
                      key={label}
                      className="flex items-start gap-3 p-3 rounded-lg bg-secondary/70"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm font-medium text-foreground leading-6">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-w-0 w-full max-w-full sm:max-w-xl mx-auto lg:max-w-none bg-white">
                <Carousel
                  setApi={setWhyChooseApi}
                  opts={{
                    loop: true,
                    align: "start",
                  }}
                  className="relative w-full max-w-full overflow-hidden rounded-2xl sm:rounded-[2rem] bg-white p-2 sm:p-3"
                >
                  <CarouselContent className="-ml-0 w-full rounded-[1.6rem] bg-white">
                    {whyChooseUsSlides.map((slide) => {
                      const Icon = slide.icon;

                      return (
                        <CarouselItem
                          key={slide.title}
                          className="basis-full pl-0"
                        >
                          <article
                            className={`w-full rounded-2xl sm:rounded-[2rem] ${slide.bgColor} flex min-h-[440px] flex-col p-4 sm:min-h-[500px] sm:p-5 md:min-h-[560px] md:p-6 shadow-[0_10px_28px_rgba(15,23,42,0.08)]`}
                          >
                            <div className="mb-4 sm:mb-5 flex items-center justify-between gap-4">
                              <div className="inline-grid h-16 w-16 sm:h-20 sm:w-20 place-content-center rounded-full bg-white/15">
                                <Icon className="h-7 w-7 sm:h-9 sm:w-9 text-white" />
                              </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-[2rem] font-black uppercase tracking-tight text-white mb-3 leading-tight break-words">
                              {slide.title}
                            </h3>
                            <p className="text-primary-foreground/85 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6 md:mb-7 max-w-lg">
                              {slide.description}
                            </p>
                            <div className="mt-auto overflow-hidden rounded-xl sm:rounded-[1.25rem] border border-white/20 bg-white/10">
                              <img
                                src={slide.image}
                                alt={slide.title}
                                className="h-36 w-full object-cover sm:h-44 md:h-52"
                                loading="lazy"
                              />
                            </div>
                          </article>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>

                  <div className="pointer-events-none absolute right-5 top-5 z-20 hidden sm:flex items-center gap-2">
                    <CarouselPrevious
                      variant="ghost"
                      size="icon"
                      className="pointer-events-auto static h-11 w-11 translate-y-0 rounded-full border border-border/70 bg-background/95 text-foreground shadow-md backdrop-blur hover:bg-primary hover:text-primary-foreground"
                    />
                    <CarouselNext
                      variant="ghost"
                      size="icon"
                      className="pointer-events-auto static h-11 w-11 translate-y-0 rounded-full border border-border/70 bg-background/95 text-foreground shadow-md backdrop-blur hover:bg-primary hover:text-primary-foreground"
                    />
                  </div>
                </Carousel>
                <div className="absolute -bottom-2 -left-5 bg-primary text-primary-foreground p-5 rounded-xl shadow-lg hidden md:block">
                  <FloatingElement duration={3} offset={14}>
                    <div>
                      <p className="text-3xl font-bold">99%</p>
                      <p className="text-sm">Success</p>
                    </div>
                  </FloatingElement>
                </div>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Placement Success Stories */}
      <PlacementCarousel />

      {/* Parallax CTA */}
      <ParallaxSection bgImage={campusImg1} className="py-24 md:py-32">
        <div className="text-center px-4">
          <SectionFadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4">
              A Campus Built for Excellence
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              World-class infrastructure designed to inspire the next generation
              of business leaders.
            </p>
          </SectionFadeIn>
        </div>
      </ParallaxSection>

      {/* Campus Facilities */}
      <section id="campus" className="section-padding bg-secondary">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Campus Life
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                World-Class Campus Facilities
              </h2>
            </div>
          </SectionFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Gamepad2,
                title: "Games Area",
                desc: "Indoor and outdoor sports facilities for holistic development",
                img: campusHub,
              },
              {
                icon: Coffee,
                title: "Cafeteria",
                desc: "Spacious cafeteria serving nutritious and diverse cuisine",
                img: campusCafeteria,
              },
              {
                icon: Library,
                title: "Library",
                desc: "Extensive digital and physical academic resources",
                img: library,
              },
              {
                icon: BookOpen,
                title: "Study Halls",
                desc: "Quiet, comfortable spaces designed for focused learning",
                img: studyHall,
              },
              {
                icon: Monitor,
                title: "Smart Classrooms",
                desc: "AV-equipped classrooms with business simulation tools",
                img: smartClassroom,
              },
              {
                icon: Building2,
                title: "Modern Infrastructure",
                desc: "State-of-the-art campus with contemporary architecture",
                img: campusBuilding,
              },
            ].map(({ icon: Icon, title, desc, img }, i) => (
              <HoverCardAnimation
                key={title}
                index={i}
                glowing={true}
                className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="font-bold text-foreground">{title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </HoverCardAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Graduation */}
      <ParallaxSection bgImage={graduation} className="py-24 md:py-32">
        <div className="text-center px-4">
          <SectionFadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4">
              Shape Your Tomorrow
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
              Join the ranks of successful alumni making an impact across
              industries worldwide.
            </p>
            <AnimatedButton
              href="/contact-us"
              className="text-lg"
              size="lg"
              glowing={true}
            >
              Start Your Journey
            </AnimatedButton>
          </SectionFadeIn>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Index;
