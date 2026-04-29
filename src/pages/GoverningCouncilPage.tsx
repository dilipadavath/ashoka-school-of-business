import SectionFadeIn from "@/components/SectionFadeIn";
import debashishImg from "@/assets/Debashish Ghosh.webp";
import srinivasImg from "@/assets/Srinivas Taluka.webp";
import laxminarayananImg from "@/assets/Laxminarayanan G.webp";
import eltonImg from "@/assets/Elton Ron Nathan.webp";
import murthyImg from "@/assets/Murthy Devarabhotla.webp";
import pavanImg from "@/assets/Dr.-Pavan-Kumar-Damaraju.webp";
import rajaImg from "@/assets/Raja Vadlamani.webp";
import puneetImg from "@/assets/Puneet Gupta.webp";
import navishImg from "@/assets/Navish Reddy.webp";
import shivaImg from "@/assets/Shiva Rao.webp";
import pradeepImg from "@/assets/Pradeep Bharade.webp";

const members = [
  {
    name: "Debashish Ghosh",
    role: "SVP & Country HR Head, Berkadia",
    img: debashishImg,
    tags: ["HR Leadership", "IIM Calcutta", "Forbes Top 50"],
    bio: 'Mr. Debashish Ghosh is Senior VP & Country HR Head at Berkadia with 20+ years of experience across leading global organizations. An alumnus of IIM Calcutta and XLRI, he holds SHRM-SCP® and GTML™ certifications. He was featured among "India\'s 50 Best HR Leaders" by Forbes and "Top 10 HR Leaders" by Silicon India. Debashish actively mentors professionals and serves on advisory boards of universities and B-schools.',
  },
  {
    name: "Srinivas Taluka",
    role: "Vice President, T-Hub",
    img: srinivasImg,
    tags: ["Entrepreneurship", "T-Hub", "Innovation"],
    bio: "Mr. Srinivas Taluka is a seasoned management professional with 25 years of experience, currently contributing to T-Hub's mission of fostering innovation and entrepreneurship. Has led operations across sectors like IT, pharma, BPO, and manufacturing, excelling in facility and infrastructure management. Known for driving operational excellence, team leadership, and enhancing employee experience. Passionate about mentoring students, impacting over 10,000 through talks on entrepreneurship and innovation.",
  },
  {
    name: "Laxminarayanan G",
    role: "Head, AI & Transformation, IIM Faculty",
    img: laxminarayananImg,
    tags: ["AI Strategy", "IIM Lucknow", "Fortune 500"],
    bio: "Mr. Laxminarayanan G is a business leader and consultant with nearly two decades of experience in AI, data analytics, and digital strategy. An IIM Lucknow alumnus with advanced training from IIIT Bangalore, he has led transformative projects for Fortune 500 firms. He is also a visiting faculty at top institutions like IIMs and IITs, known for mentoring future leaders. As a sought-after speaker and mentor, he empowers professionals and students with career-shaping insights.",
  },
  {
    name: "Dr. Elton Ron Nathan",
    role: "Group Head – L&D, Apollo Health and Lifestyle Limited",
    img: eltonImg,
    tags: ["L&D", "AI-driven HR", "Apollo"],
    bio: "Dr. Elton Ron Nathan is Head of L&D at Apollo Health & Lifestyle Ltd., with 25+ years of HR and OD experience. He has led award-winning leadership and talent development initiatives, recognized by ET, ISTD, and Newsweek. A certified coach and NLP practitioner, he specializes in AI-driven HR, trust-based leadership, and workforce transformation. He is a prominent speaker at IIMs, ISB, SHRM, and actively promotes inclusion and male allyship in workplaces.",
  },
  {
    name: "Dr. Murthy Devarabhotla",
    role: "Global President, The Diplomatic Club",
    img: murthyImg,
    tags: ["Trade Diplomacy", "Strategic Consulting", "Sustainability"],
    bio: "Dr. Murthy Devarabhotla is a global leader in trade diplomacy, cultural collaboration, and strategic consulting. He serves as Global President of The Diplomatic Club and Chairman of Travian Group. He has received numerous international awards for contributions to peace, diplomacy, and business. His work focuses on strengthening Indo-Thai relations and sustainable development.",
  },
  {
    name: "Dr. Pavan Kumar Damaraju",
    role: "Program Director, TCS",
    img: pavanImg,
    tags: ["Data Science", "AI/GenAI", "TCS"],
    bio: "Dr. Pavan Kumar Damaraju is a seasoned data science and statistics expert with over 28 years of experience, currently serving as Senior Manager at TCS, leading AI/GenAI programs. He holds a Ph.D. in Statistics from Osmania University and has been awarded a patent in HR analytics. His expertise spans solution architecture across domains like supply chain and HR. A prolific speaker and researcher, he has published in various national and international journals.",
  },
  {
    name: "Raja Vadlamani",
    role: "President – Supply Chain, Seed Works International",
    img: rajaImg,
    tags: ["Agriculture", "Supply Chain", "FICCI Award"],
    bio: "Mr. Raja Vadlamani is a veteran in the agricultural seed supply chain industry with over 38 years of experience, currently serving as President – Supply Chain at SeedWorks International. He has led SeedWorks' transformation from a startup to a top-tier seed company through innovation, sustainability, and digital integration. Raja is known for building high-performing teams and driving operational excellence across supply chains. He has received numerous awards, including FICCI's Sustainable Agriculture Award and HMA's Manager of the Year.",
  },
  {
    name: "Puneet Gupta",
    role: "Vice President, Tech Mahindra",
    img: puneetImg,
    tags: ["Global Sales", "Strategy", "Tech Mahindra"],
    bio: "Mr. Puneet Gupta is a global executive with 30 years of experience in Sales, Strategy, Operations, and Technology Consulting across top firms like IBM, Deloitte, Accenture, and TechM. He has led multi-million-dollar deals and built large global teams, including a 400-member center in the Philippines. Known for driving growth and efficiency, he has won several industry and company awards. Puneet is also a recognized speaker and guest at leading industry and academic forums.",
  },
  {
    name: "Navish Reddy",
    role: "CEO & Co-Founder, LEO1",
    img: navishImg,
    tags: ["Edu-Fintech", "IIT Bombay", "LEO1"],
    bio: "Mr. Naveesh Reddy is the Co-Founder and COO of LEO1, an edu-fintech firm transforming education financing in India. An IIT Bombay alumnus, he leads operations, strategy, and partnerships to drive LEO1's innovative solutions. Under his leadership, LEO1 has impacted over 12,000 institutions with fee reimbursement and alumni reward programs. Recognized for his national contributions, he continues to champion tech-driven financial inclusion in education.",
  },
  {
    name: "T.V. Shiva Rao",
    role: "CEO, Future Labs",
    img: shivaImg,
    tags: ["Manufacturing", "Business Leadership", "Mentorship"],
    bio: "Mr. T.V. Shiva Rao is a management professional with 30 years of experience in manufacturing, services, and business leadership. He currently serves as Regional Director at IOD, Consultant at TGCHE, and Chief Adviser at Future Labs. He has held senior roles in companies like ELICO and Anton Paar and contributed to industry bodies like CII and SAE. An MBA with multiple degrees, Shiva is also a mentor and guest faculty at leading educational institutions.",
  },
  {
    name: "Pradeep Bharade",
    role: "CEO and Founder, PowerUrBiz Solutions Pvt Ltd",
    img: pradeepImg,
    tags: ["Consulting", "Paytm AVP", "Startup Growth"],
    bio: "Mr. Pradeep Bharade is the Founder & CEO of PowerUrBiz, a consulting and marketing firm focused on scaling businesses through strategy and digital innovation. With 15+ years of experience, he previously led expansion initiatives at Paytm as AVP. He hosts the podcast PowerUp with Pradeep, featuring conversations with founders and leaders. Passionate about growth, he empowers startups and professionals through content, communities, and coaching.",
  },
];

const GoverningCouncilPage = () => {
  return (
    <div className="pt-0 md:pt-20 bg-background overflow-x-clip">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground section-padding">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        </div>
        <div className="container-wide relative z-10 text-center">
          <SectionFadeIn>
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.28em] mb-4">
              Explore ASB
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] text-primary-foreground">
              Governing Council
            </h1>
            <div className="mt-6 flex w-fit mx-auto items-center gap-4">
              <span className="h-[2px] w-14 bg-primary/80" />
              <span className="text-primary-foreground/90 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em]">
                Members
              </span>
              <span className="h-[2px] w-14 bg-primary/80" />
            </div>
            <p className="mt-7 max-w-2xl mx-auto text-primary-foreground/75 text-base md:text-lg leading-relaxed">
              Industry titans, academic leaders, and global strategists —
              shaping the vision and governance of Ashoka School of Business.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-primary px-4 py-4">
        <div className="container-wide mx-auto grid grid-cols-3 gap-4 text-center">
          {[
            { value: "11", label: "Council Members" },
            { value: "300+", label: "Combined Years of Experience" },
            { value: "Top", label: "IIMs, IITs & Global Firms" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-xl md:text-3xl font-black text-primary-foreground">
                {s.value}
              </p>
              <p className="text-[0.65rem] md:text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Members grid */}
      <section className="relative section-padding">
        <div className="container-wide">
          <div className="mx-auto -mt-2 max-w-7xl pt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, i) => (
              <SectionFadeIn key={member.name} delay={Math.min(i * 0.06, 0.36)}>
                <div className="group flex flex-col h-full rounded-[1.6rem] border border-border/70 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.07)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.14)] transition-all duration-300 overflow-hidden">
                  {/* Photo + name header */}
                  <div className="relative bg-charcoal px-6 pt-7 pb-5 flex items-center gap-5">
                    <div className="absolute inset-0 opacity-30 pointer-events-none">
                      <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-primary/30 blur-2xl" />
                    </div>
                    <div className="relative shrink-0 h-20 w-20 overflow-hidden rounded-2xl ring-2 ring-primary/40 shadow-lg">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative min-w-0">
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-primary mb-1">
                        ASB Governing Council
                      </p>
                      <h3 className="text-base md:text-lg font-black text-primary-foreground leading-tight">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-xs text-primary-foreground/65 leading-snug">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="flex flex-col flex-1 p-6 gap-5">
                    <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                      {member.bio}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoverningCouncilPage;
