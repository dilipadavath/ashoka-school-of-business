import { useMemo, useState } from "react";
import SectionFadeIn from "@/components/SectionFadeIn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import lakshmanImg from "@/assets/Lakshman Kumar.webp";
import gajanethiImg from "@/assets/Gajanethi Swathi Kumari.webp";
import nikitaImg from "@/assets/Nikita Goel.webp";
import marutiImg from "@/assets/Maruti Prabhakar.webp";
import mirzaImg from "@/assets/Mirza Rafathulla Baig.webp";
import koustubhaImg from "@/assets/Koustubha Priya Mudigonda.webp";
import rajenderImg from "@/assets/Rajender Goud.webp";
import gandhyImg from "@/assets/Gandhy Prashanth Kumar.webp";
import rajeshImg from "@/assets/Rajesh Pershad.webp";
import sripriyaImg from "@/assets/Sripriya Gurazada.webp";
import arijitImg from "@/assets/Arijit Santikary.webp";
import deviImg from "@/assets/Devi Prasad Uppala.webp";
import harshavardhanImg from "@/assets/Harshavardhan Sathyanarayana Rao Gaddalae.webp";
import jayashreeImg from "@/assets/Jayashree.webp";
import sathishImg from "@/assets/Sathish.webp";
import pramodImg from "@/assets/Pramod K Mishra.webp";
import kishorImg from "@/assets/Kishor Kumar Ananthapalli.webp";
import padmavathiImg from "@/assets/Padmavathi.webp";
import jayaKrishnaImg from "@/assets/Jaya Krishna V.webp";
import mushtaqImg from "@/assets/Mushtaq Ali.webp";
import sudhaImg from "@/assets/Sudha.webp";
import placeholderImg from "@/assets/about img2.webp";

type FacultyMember = {
  name: string;
  role: string;
  image: string;
  qualification?: string;
  experience?: string;
  specialization?: string;
  area?: string;
  bio?: string[];
};

const facultyMembers: FacultyMember[] = [
  {
    name: "Dr. Y. Lakshman Kumar (YLK)",
    role: "Director",
    image: lakshmanImg,
    qualification:
      "M.B.A, Ph.D., C.M.C (Canada), Certified Marketing Director Course - Philip Kotler, Certified Independent Director",
    experience: "35 years (9 years industry)",
    specialization: "Marketing - Brand Management",
  },
  {
    name: "Dr. Gajanethi Swathi Kumari",
    role: "Dean - Academics",
    image: gajanethiImg,
    qualification: "MBA, MSc Applied Psychology, MS Counseling and Psychotherapy, Ph.D.",
    experience: "22 years",
    specialization: "HR",
    bio: [
      "Dr. G. Swathi Kumari holds a Ph.D. in Management from Osmania University and has over 22 years of academic, research, and leadership experience.",
      "As Dean, she leads strategic initiatives, academic reforms, and global collaborations, including international programs with UMass Amherst, France, and Dubai.",
      "She has published in ABDC, Scopus, and Web of Science journals, authored a book on HR practices, and is known for student counseling and curriculum innovation.",
    ],
  },
  {
    name: "Ms. Nikita Goel",
    role: "Assistant Professor of English",
    image: nikitaImg,
    qualification: "B.A. English, M.A. English, Ph.D. (Pursuing) in English Language Education",
    area:
      "PhD scholar in School of English Language Education (EFLU), focused on feedback and self-regulatory strategies to develop authorial voice",
    bio: [
      "Before joining Ashoka, she worked as a Teaching Assistant at EFLU and a Language Buddy at Ambedkar University, New Delhi.",
      "She earned her MA in English from Central University of Gujarat as a gold medalist and completed her BA in English from Ambedkar University Delhi.",
      "She has published in reputed journals and presented in leading academic forums including AALA and the International Conference on South Asian Perspectives.",
    ],
  },
  {
    name: "Prof. Maruti Prabhakar",
    role: "Head - Strategic initiative & Associate Professor",
    image: marutiImg,
    qualification: "MBA",
    experience: "30 years",
    specialization: "Marketing",
    bio: [
      "Enterprise leader with expertise in strategic marketing, brand building, and operational leadership.",
    ],
  },
  {
    name: "Prof. Mirza Rafathulla Baig",
    role: "Head - International Affairs & Associate Professor",
    image: mirzaImg,
    qualification: "MBA, LLM, (Ph.D)",
    experience: "19 years",
    specialization: "Finance & HR, and Corporate Law",
    bio: [
      "He has over 19 years of teaching experience with expertise in financial reporting, accounting, financial services, international finance, investment management, business environment, and business laws.",
      "He has delivered 100+ lectures across India on investor awareness, financial planning, capital markets, and mutual fund and stock market investments.",
    ],
  },
  {
    name: "Ms. Koustubha Priya Mudigonda",
    role: "Assistant Professor in the Department of AIDS",
    image: koustubhaImg,
    qualification: "B-Tech, M-Tech",
    area: "Python, Pandas, AWS, Big Data, Apache Spark, Hadoop, MySQL, Tableau, Generative AI, Reinforcement Learning",
    bio: [
      "Her professional experience includes roles in FAIR RIDE (New York) and CNC Software Solutions across AI, machine learning, data science, and healthcare software development.",
      "She has taught at multiple institutions and has seven years of teaching experience, including earlier service at Sai Ganapathi Engineering College.",
      "She has published research on COVID-19 infection detection using chest X-ray images and is extending the work with CT scan data.",
    ],
  },
  {
    name: "Dr. B Rajender Goud",
    role: "Associate Professor",
    image: rajenderImg,
    qualification: "MBA, PhD",
    experience: "22 years",
    specialization: "Marketing",
    bio: [
      "He has 19 years of teaching experience in general management and marketing along with 3 years of industry exposure.",
      "He is UGC-NET qualified and completed his PhD in Management from Mahatma Gandhi University, Nalgonda.",
    ],
  },
  {
    name: "Prof. Gandhy Prashanth Kumar",
    role: "Assistant Professor",
    image: gandhyImg,
    qualification: "PGDITM, MBA, (Ph.D)",
    experience: "15 years",
    specialization: "HR & Marketing",
    bio: [
      "He is a self-directed professional with 15+ years of experience across academia and industry and is pursuing a PhD from Annamalai University.",
      "He has been recognized with awards such as Quality Performer and Top Gun and is associated with HMA, AIMA, and ISTE.",
      "He has attended FDPs/workshops at IIT, IIM, and ISB and published in UGC special issue journals.",
    ],
  },
  {
    name: "Prof. Rajesh Pershad",
    role: "Associate Professor",
    image: rajeshImg,
    qualification: "MBA, PGDSM, (Ph.D)",
    experience: "32 years (Academic & Industry)",
    specialization: "Marketing",
    bio: [
      "He has worked as Head of MBA Department, Additional Controller of Examinations, campus recruitment trainer, and human potential trainer in autonomous colleges.",
      "He has served as visiting faculty at Symbiosis Centre for Management Studies, University College of Management Hyderabad, and JNTUH.",
    ],
  },
  {
    name: "Prof. Sripriya Gurazada",
    role: "Assistant Professor",
    image: sripriyaImg,
    qualification: "MBA (Ph.D)",
    experience: "12 years (Academic & Industry)",
    specialization: "HR",
    bio: [
      "She is pursuing a PhD in Leadership and teaches organizational behavior, business communication, and HR specializations.",
      "She is certified in Leadership Skills from IIM-A, holds a diploma in organizational psychology, and has 5+ years corporate and 7 years academic experience.",
      "She has published and presented research papers in national and international journals and conferences.",
    ],
  },
  {
    name: "Dr. Arijit Santikary",
    role: "Professor of Marketing",
    image: arijitImg,
  },
  {
    name: "Devi Prasad Uppala",
    role: "Professor of Practice",
    image: deviImg,
    qualification: "M.Sc (UoG - London), MBA (SMU - India), B.Tech",
    experience: "18 years (Academic & Industry)",
    bio: [
      "Professor Devi Prasad Uppala has trained over 45,000 professionals across India and international markets in finance.",
      "A Chartered FRM with extensive CISI certifications, he founded FinTech Studies and held strategic training roles with leading investment banks across USA, Europe, and Middle East.",
      "His expertise spans investment banking operations, risk management, algorithmic trading, and FinTech innovations.",
    ],
  },
  {
    name: "Harshavardhan Sathyanarayana Rao Gaddalae",
    role: "Professor of Practice",
    image: harshavardhanImg,
    qualification: "B.Sc (Honours - Physics), MBA (Marketing and Systems)",
    area: "Strategy consulting, market intelligence, digital marketing",
    bio: [
      "He is a seasoned B2B strategist with nearly two decades of experience across IT, telecom, automotive, and retail.",
      "He has held leadership roles at Deloitte, IBM, TCS, and SIS Infotech and works with clients across the US, Europe, and Asia.",
      "As founder of Medha Research and Consulting, he provides research-driven strategic insights.",
    ],
  },
  {
    name: "Dr. A G Jayashree",
    role: "Founder & Director KADAL Consulting Service Ltd - Capacity Building Organization",
    image: jayashreeImg,
    qualification: "MBA (HR), Ph.D, ISTD",
    experience: "25 years (Academic & Industry)",
    area: "Learning & Development, competency mapping, talent management",
    bio: [
      "Presently Founder and Director of Kadal Consulting Services Pvt Ltd, serving corporates and NGOs in building people capacity and talent management.",
    ],
  },
  {
    name: "Prof. R. Sathish",
    role: "Visiting Faculty",
    image: sathishImg,
    qualification: "BA, MBA",
    experience: "32 years",
    area: "Advertising & Brand Management",
    bio: [
      "R Sathish has over 30 years of advertising experience in leadership roles at BBDO, JWT, Bates, and Mudra DDB across Chennai, Mumbai, and Hyderabad.",
      "He has led major campaigns for Hawkins, Old Monk, Sundaram Mutual Fund, EMRI 108, ISB, Taj Hotels, Arun Ice Creams, and many more brands.",
      "He is an independent consultant in brand strategy and marketing communications and also a published literary translator.",
    ],
  },
  {
    name: "Dr. Pramod K Mishra",
    role: "Visiting Faculty",
    image: pramodImg,
    qualification: "Ph.D",
    experience: "16 years (Academic & Industry)",
    area: "OM & Decision Sciences",
    bio: [
      "Dr. Pramod K. Mishra is an alumnus of NIT Rourkela and University of Hyderabad and serves in Operations Management & Decision Sciences at University of Hyderabad.",
      "He has worked as Post Doctoral Research Fellow at IIM Bangalore and published around thirty papers in national and international journals.",
      "He has conducted multiple training programs in machine learning, optimization, research methodology, supply chain management, and quality management.",
    ],
  },
  {
    name: "Kishor Kumar Ananthapalli",
    role: "Visiting Faculty",
    image: kishorImg,
    qualification: "MBA",
    experience: "17 years (Academic & Industry)",
    specialization: "Data Analytics",
    bio: [
      "Solutions-focused MBA professional with experience in reporting, BI, data analytics, process automation, AI (Copilot and ChatGPT), and people management.",
    ],
  },
  {
    name: "V. Padmavathi",
    role: "Visiting Faculty",
    image: padmavathiImg,
    qualification: "M.Com, MBA, M.Phil, UGC-NET, Ph.D (P)",
    experience: "20 years (Academic & Industry)",
    area: "Finance",
    bio: [
      "Faculty in the Department of Management at Symbiosis International University with two decades of academic experience.",
      "She has guided MBA projects for multiple universities including JNTUH, Osmania, and Mumbai University.",
      "Her areas of interest include corporate finance, MSMEs, banking, and investment management with publications in national and international forums.",
    ],
  },
  {
    name: "Dr. Jaya Krishna V",
    role: "Visiting Faculty",
    image: jayaKrishnaImg,
    qualification: "B.Tech, PGDM, PhD",
    specialization: "IT, Marketing and Systems",
    bio: [
      "Product manager and distinguished technology leader driving digital transformation and AI-led innovation.",
    ],
  },
  {
    name: "Mushtaq Ali",
    role: "Visiting Faculty",
    image: mushtaqImg,
    qualification: "MBA",
    experience: "26 years (Academic & Industry)",
    specialization: "Finance and Data Science",
    bio: [
      "Corporate and academic professional with 25+ years in the BFSI vertical, blending practical industry expertise with strong academic grounding.",
    ],
  },
  {
    name: "Dr. T. Sudha",
    role: "Visiting Faculty",
    image: sudhaImg,
    qualification: "M.Sc, MBA, PhD",
    experience: "34 years (Academic & Industry)",
    specialization: "Operations Management",
    bio: [
      "She holds a Master's degree in Statistics from Hyderabad Central University and MPhil and PhD from Osmania University.",
      "Her specialization areas include operations management and quantitative techniques.",
    ],
  },
  {
    name: "Dr Mohsin Khan",
    role: "Visiting Faculty",
    image: placeholderImg,
    qualification: "PhD (UGC-NET)",
    experience: "5 years of PG teaching",
    area: "Management (Business Analytics)",
    bio: [
      "He is an Assistant Professor at Institute of Public Enterprise, Hyderabad, and completed his PhD from Pondicherry University in Workplace Innovation.",
      "He has qualified UGC-NET and published in national and international journals indexed in ABDC, WoS, and Scopus.",
    ],
  },
  {
    name: "V . PRAJVAL",
    role: "Assistant Professor",
    image: placeholderImg,
    qualification: "Bachelor of Technology, Master of Technology",
    experience: "9+ years of PG teaching",
    bio: [
      "Prajval V has academic and industry experience with interests in IoT, AI, digital systems, and emerging technologies.",
      "He has contributed through publications, patents, books, and conference participation and has received recognition such as Best Researcher Award.",
    ],
  },
  {
    name: "Dr. ANUPAM GUPTA",
    role: "Assistant Professor (Marketing)",
    image: placeholderImg,
    qualification: "PhD (Consumer Scepticism Behaviour and Green Marketing), UGC-NET, MBA, Bachelor of Technology",
    experience: "7 years of PG teaching",
    bio: [
      "Dr. Anupam Gupta is an Assistant Professor in Marketing with strong focus on consumer behavior and sustainable marketing.",
      "His research interests include green marketing, Gen Z consumer behavior, digital advertising, ethical branding, and quantitative methods.",
      "He has guided more than 50 undergraduate and several postgraduate research projects and is proficient in SPSS, R, and PLS-SEM.",
    ],
  },
];

const OurFacultyPage = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  const totalFaculty = useMemo(() => facultyMembers.length, []);
  const currentIndex = selectedFaculty
    ? facultyMembers.findIndex((member) => member.name === selectedFaculty.name)
    : -1;

  const showPreviousFaculty = () => {
    if (currentIndex < 0) return;
    const previousIndex = (currentIndex - 1 + facultyMembers.length) % facultyMembers.length;
    setSelectedFaculty(facultyMembers[previousIndex]);
  };

  const showNextFaculty = () => {
    if (currentIndex < 0) return;
    const nextIndex = (currentIndex + 1) % facultyMembers.length;
    setSelectedFaculty(facultyMembers[nextIndex]);
  };

  return (
    <div className="pt-20 bg-background overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground px-4 md:px-8 py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        </div>
        <div className="container-wide relative z-10 px-4 text-center">
          <SectionFadeIn>
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.28em] mb-4">Explore ASB</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] text-primary-foreground">
              Our Faculty
            </h1>
            <div className="mt-6 flex w-fit mx-auto items-center gap-4">
              <span className="h-[2px] w-14 bg-primary/80" />
              <span className="text-primary-foreground/90 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em]">
                Teaching Excellence
              </span>
              <span className="h-[2px] w-14 bg-primary/80" />
            </div>
            <p className="mt-7 max-w-3xl mx-auto text-primary-foreground/75 text-base md:text-lg leading-relaxed">
              Meet the faculty members shaping future-ready leaders through academic rigor, industry relevance,
              and mentorship at Ashoka School of Business.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      <div className="bg-primary px-4 py-4">
        <div className="container-wide mx-auto grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xl md:text-3xl font-black text-primary-foreground">{totalFaculty}</p>
            <p className="text-[0.65rem] md:text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">
              Faculty Profiles
            </p>
          </div>
          <div>
            <p className="text-xl md:text-3xl font-black text-primary-foreground">Industry + Academia</p>
            <p className="text-[0.65rem] md:text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">
              Practical Learning Lens
            </p>
          </div>
          <div>
            <p className="text-xl md:text-3xl font-black text-primary-foreground">Tap to View</p>
            <p className="text-[0.65rem] md:text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">
              Complete Profile Details
            </p>
          </div>
        </div>
      </div>

      <section className="relative px-4 md:px-8 pb-20">
        <div className="container-wide px-4">
          <div className="mx-auto max-w-7xl pt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {facultyMembers.map((member, index) => (
              <SectionFadeIn key={member.name} delay={Math.min(index * 0.05, 0.36)}>
                <button
                  type="button"
                  onClick={() => setSelectedFaculty(member)}
                  className="group text-left w-full h-full rounded-[1.2rem] border border-border/70 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.08)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.16)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-[4/4.6] w-full overflow-hidden bg-secondary">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-4 py-4">
                    <h3 className="text-sm md:text-base font-black text-primary leading-tight line-clamp-2">{member.name}</h3>
                    <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-snug line-clamp-2">{member.role}</p>
                  </div>
                </button>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedFaculty} onOpenChange={(open) => !open && setSelectedFaculty(null)}>
        {selectedFaculty ? (
          <DialogContent className="w-[94vw] max-w-4xl max-h-[85vh] overflow-y-auto p-0" showCloseButton>
            <div className="grid md:grid-cols-[260px_1fr] gap-0">
              <div className="bg-secondary p-4 md:p-6">
                <div className="overflow-hidden rounded-xl border border-border shadow-sm bg-white">
                  <img
                    src={selectedFaculty.image}
                    alt={selectedFaculty.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="p-5 md:p-6">
                <DialogHeader>
                  <DialogTitle className="text-xl md:text-2xl font-black text-primary leading-tight">
                    {selectedFaculty.name}
                  </DialogTitle>
                  <DialogDescription className="text-sm md:text-base font-semibold text-muted-foreground">
                    {selectedFaculty.role}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4 flex items-center justify-between gap-4 border-y border-border/70 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Profile {currentIndex + 1} of {facultyMembers.length}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={showPreviousFaculty}
                      className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground hover:bg-secondary transition-colors"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={showNextFaculty}
                      className="rounded-md border border-primary/60 bg-primary px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {selectedFaculty.qualification ? (
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-bold">Qualification</p>
                      <p className="mt-1 text-sm text-foreground/90 leading-relaxed">{selectedFaculty.qualification}</p>
                    </div>
                  ) : null}

                  {selectedFaculty.experience ? (
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-bold">Experience</p>
                      <p className="mt-1 text-sm text-foreground/90 leading-relaxed">{selectedFaculty.experience}</p>
                    </div>
                  ) : null}

                  {selectedFaculty.specialization ? (
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-bold">Specialization</p>
                      <p className="mt-1 text-sm text-foreground/90 leading-relaxed">{selectedFaculty.specialization}</p>
                    </div>
                  ) : null}

                  {selectedFaculty.area ? (
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-bold">Area</p>
                      <p className="mt-1 text-sm text-foreground/90 leading-relaxed">{selectedFaculty.area}</p>
                    </div>
                  ) : null}

                  {selectedFaculty.bio && selectedFaculty.bio.length > 0 ? (
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-bold">Profile</p>
                      <div className="mt-2 space-y-2">
                        {selectedFaculty.bio.map((paragraph) => (
                          <p key={paragraph} className="text-sm text-foreground/90 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </div>
  );
};

export default OurFacultyPage;
