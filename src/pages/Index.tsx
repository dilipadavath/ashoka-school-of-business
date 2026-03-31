import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionFadeIn from "@/components/SectionFadeIn";
import ParallaxSection from "@/components/ParallaxSection";
import PlacementCarousel from "@/components/PlacementCarousel";
import campusBuilding from "@/assets/Modern Infrastructure.jpg";
import campusCafeteria from "@/assets/Cafeteria img.jpg";
import campusHub from "@/assets/campus-hub.png";
import awardCeremony from "@/assets/award-ceremony.png";
import smartClassroom from "@/assets/Smart Classrooms.jpg";
import library from "@/assets/library img.jpg";
import studyHall from "@/assets/study hall.jpg";
import campusImg1 from "@/assets/campus-img1.jpg";
import graduation from "@/assets/graduation.jpg";
import chanakyaVideo from "@/Chanakya.mp4";
import aboutVideoOne from "@/assets/Sequence 02_1.mp4";
import { Check, GraduationCap, BookOpen, Building2, Coffee, Gamepad2, Library, Monitor } from "lucide-react";

const Index = () => {
  const [showHeroOverlay, setShowHeroOverlay] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowHeroOverlay(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div>
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
        <div className={`absolute inset-0 bg-charcoal/60 transition-opacity duration-700 ${showHeroOverlay ? "opacity-100" : "opacity-0"}`} />
        <div className={`relative z-10 px-4 text-center transition-all duration-700 ${showHeroOverlay ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-primary-foreground mb-4 tracking-tight">
            Learn. Lead. <span className="text-primary">Conquer.</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-display font-medium mb-10">
            Ashoka School of Business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/bba"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg text-lg hover:bg-primary/90 transition-colors"
            >
              Explore Programs
            </Link>
            <Link
              to="/contact-us"
              className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* About ASB */}
      <section id="about" className="section-padding bg-background">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About ASB</p>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                  Why We Are Different?
                </h2>
                <div className="space-y-5 mb-8">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    In a world where every company wants to be more efficient, we believe that the way to do that is to create leaders who can make decisions, take action, and make initiatives in their organisation.
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
                    <div key={label} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/70">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm font-medium text-foreground leading-6">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5] md:aspect-[5/6]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                    src={aboutVideoOne}
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                  <p className="text-3xl font-bold">25+</p>
                  <p className="text-sm">Years of Excellence</p>
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
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4">A Campus Built for Ambition</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">World-class infrastructure designed to inspire the next generation of business leaders.</p>
          </SectionFadeIn>
        </div>
      </ParallaxSection>

      {/* Campus Facilities */}
      <section id="campus" className="section-padding bg-secondary">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Campus Life</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">World-Class Campus Facilities</h2>
            </div>
          </SectionFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Gamepad2, title: "Games Area", desc: "Indoor and outdoor sports facilities for holistic development", img: campusHub },
              { icon: Coffee, title: "Cafeteria", desc: "Spacious cafeteria serving nutritious and diverse cuisine", img: campusCafeteria },
              { icon: Library, title: "Library", desc: "Extensive digital and physical academic resources", img: library },
              { icon: BookOpen, title: "Study Halls", desc: "Quiet, comfortable spaces designed for focused learning", img: studyHall },
              { icon: Monitor, title: "Smart Classrooms", desc: "AV-equipped classrooms with business simulation tools", img: smartClassroom },
              { icon: Building2, title: "Modern Infrastructure", desc: "State-of-the-art campus with contemporary architecture", img: campusBuilding },
            ].map(({ icon: Icon, title, desc, img }, i) => (
              <SectionFadeIn key={title} delay={i * 0.1}>
                <div className="bg-background rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="h-48 overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="font-bold text-foreground">{title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Graduation */}
      <ParallaxSection bgImage={graduation} className="py-24 md:py-32">
        <div className="text-center px-4">
          <SectionFadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4">Shape Your Tomorrow</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">Join the ranks of successful alumni making an impact across industries worldwide.</p>
            <Link to="/contact-us" className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg text-lg hover:bg-primary/90 transition-colors inline-block">
              Start Your Journey
            </Link>
          </SectionFadeIn>
        </div>
      </ParallaxSection>

    </div>
  );
};

export default Index;
