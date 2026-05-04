import SectionFadeIn from "@/components/SectionFadeIn";
import arunImg from "@/assets/Arun-Kumar.webp";
import bhanuImg from "@/assets/Bhanu-prakash.webp";
import chetanImg from "@/assets/Chetan-Srivastava.webp";
import deviImg from "@/assets/Devi-Prasad.webp";
import durgaImg from "@/assets/Dr.-Ch-S-Durga-Prasad.webp";
import subbareddyImg from "@/assets/G.V.-Subbareddy.webp";
import harshaImg from "@/assets/Harsha-Vardhan.webp";
import kishoreImg from "@/assets/Kishore-Kumar.webp";
import muruganImg from "@/assets/Dr.-P.-Murugan.webp";
import pradeepRImg from "@/assets/Dr.-Pradeep-Racherla.webp";
import rajendraImg from "@/assets/Rajendra-Krishna-Prasad-Peddi.webp";
import ramGopalImg from "@/assets/Ram-Gopal.webp";
import raviKumarImg from "@/assets/V.-Ravi-Kumar.webp";
import ravindraImg from "@/assets/Dr.-Ravindra-Penmatsa.webp";
import srinivasRaoImg from "@/assets/Srinivas-rao.webp";
import sudhirImg from "@/assets/Sudhir-Kumar.webp";
import vamsiImg from "@/assets/c-vamsi-krishna-67f6589782a05.webp";
import vengalaraoImg from "@/assets/Dr.-Vengalarao-Pachava.webp";

const members = [
  {
    name: "Arun Kumar",
    role: "Data Scientist, Associate Manager, PepsiCo",
    img: arunImg,
    tags: ["Data Science", "AI/ML", "PepsiCo & Google"],
    bio: "Mr. Arun Kumar is an experienced Data Scientist and AI Consultant specializing in machine learning, statistical modeling, and AI integration. He has led AI initiatives at global companies like PepsiCo and Google, earning recognition for innovation and impact. Proficient in tools such as Python, TensorFlow, SQL, Power BI, and Tableau, with strong analytical and research expertise. He actively engages in academia through workshops, curriculum design, and mentoring in AI and Data Science.",
  },
  {
    name: "Bhanu Prakash",
    role: "Vice President – Head CSR, Spandana Spoorthy Financial Limited",
    img: bhanuImg,
    tags: ["CSR", "Women Empowerment", "NMIMS MBA"],
    bio: "Mr. Bhanu Prakash is a Vice President & Head of CSR at Spandana Spoorthy, with 20+ years of experience across diverse sectors. He leads initiatives in women's empowerment, health, sustainability, and financial literacy, earning national-level awards. Previously, he held leadership roles at Educomp, Tata Projects, and Dr. Reddy's Foundation, driving CSR and education programs. Bhanu holds an MBA from NMIMS and certifications in CSR and ESG from IRMA and IICA.",
  },
  {
    name: "Chetan Srivastava",
    role: "Professor, Hyderabad Central University (HCU)",
    img: chetanImg,
    tags: ["Marketing", "Strategic Management", "HCU"],
    bio: "Prof. Chetan Srivastava is a senior faculty at the School of Management Studies, University of Hyderabad, with 25 years of experience. He has held key roles including Chairman, PGAB, and Director, International Affairs at the university. An award-winning educator, he is known for his expertise in marketing, strategic management, and academic leadership. He holds a Ph.D. from Osmania University and is a respected speaker, author, and Ph.D. mentor.",
  },
  {
    name: "Devi Prasad Uppala",
    role: "Finance Professional and Academic Advisor",
    img: deviImg,
    tags: ["Investment Banking", "FinTech", "Capital Markets"],
    bio: "Mr. Devi Prasad Uppala is a finance professional and academic advisor with 17+ years of experience in investment banking, capital markets, and financial education. A Chartered FRM and former FinTech CEO, he has trained over 50,000 professionals and placed 2,000+ students in finance roles. He teaches at leading B-schools and manages HNI portfolios using data-driven investment strategies. With global credentials, he bridges academia and industry through practical, experiential learning in finance.",
  },
  {
    name: "Dr. Ch S Durga Prasad",
    role: "Academic Leader, AIMS",
    img: durgaImg,
    tags: ["OBE", "HR & Leadership", "8 PhD Scholars"],
    bio: "Dr. Ch S Durga Prasad is the Executive Director of AIMS, with nearly 35 years of experience in academics, industry, and research. He formerly served as Director of Vignana Jyothi Institute of Management, Hyderabad. His expertise includes quality assurance, outcome-based education, HR, leadership, and entrepreneurship. He has guided 8 Ph.D. scholars, published 25+ papers, and actively contributes to NHRD and HMA.",
  },
  {
    name: "G.V. Subbareddy",
    role: "Vice President – Sales & Marketing, Coromandel",
    img: subbareddyImg,
    tags: ["Agri-Sector", "Coromandel", "42+ Years"],
    bio: "Mr. G.V. Subbareddy is Vice President at Coromandel International Ltd. with 42+ years of experience in the agri-sector. He has led a ₹5000+ crore business and mentored future leaders while promoting sustainable farming practices. A strong advocate for farmer prosperity, he has conducted 500+ farmer seminars and drives rural girl child education initiatives. He serves as a mentor and expert with FAI, CII, FICCI, and PJTSAU, promoting industry-academia collaboration in agriculture.",
  },
  {
    name: "Harsha Vardhan",
    role: "Managing Director, Medha Research and Consulting",
    img: harshaImg,
    tags: ["Market Research", "Deloitte & IBM", "Strategy"],
    bio: 'Mr. Harsha Vardhan is the Managing Director of Medha Research and Consulting, specializing in strategy and market intelligence. With 20+ years of leadership experience at Deloitte, IBM, TCS, and SIS Infotech, he advises businesses across industries. He empowers startups and SMEs through research-driven strategies and AI-enhanced consulting. A visiting faculty at top B-schools, he was named a "Top 10 Market Research Leader" by CEO Insights in 2021.',
  },
  {
    name: "Kishore Kumar",
    role: "CEO, Excelytics",
    img: kishoreImg,
    tags: ["Power BI", "AI Analytics", "Microsoft Certified"],
    bio: "Mr. Kishore Kumar, Founder & CEO of Team Excelytics, has 16+ years of experience in Business Intelligence, AI, and Data Analytics across domains like healthcare and finance. He is a Microsoft Certified Trainer skilled in tools like Power BI, ChatGPT, and SAP BI. He has led training for top corporates and academic institutions, empowering teams through AI-driven analytics education. His strength lies in innovative teaching and transforming data into actionable business insights.",
  },
  {
    name: "Dr. P. Murugan",
    role: "Assistant Professor, Hyderabad Central University (HCU)",
    img: muruganImg,
    tags: ["Data Analysis", "SWAYAM", "Chancellor's Award"],
    bio: "Dr. P. Murugan is an Assistant Professor at the School of Management Studies, University of Hyderabad, with a PhD from Anna University. He is recognized for his excellence in teaching and research, receiving the Chancellor's Award from UoH. With expertise in data analysis and structural modeling, he has published in top-tier journals and delivered over 250 workshops and FDPs. He also developed online courses for the SWAYAM platform.",
  },
  {
    name: "Dr. Pradeep Racherla",
    role: "Professor, Mahindra University",
    img: pradeepRImg,
    tags: ["Digital Marketing", "ISB & XLRI", "3000+ Citations"],
    bio: "Dr. Pradeep Racherla is the Associate Dean and Professor of Marketing at Mahindra University, specializing in digital transformation and marketing strategy. He consults with global firms and teaches at ISB, XLRI, and SP Jain, with past roles at Woxsen and West Texas A&M. His research is widely published and cited, with over 3,000 citations and recognition like the Emerald Citation of Excellence. He has worked with major brands like Pepsi, Nestle, and Diageo on digital and customer-centric strategies.",
  },
  {
    name: "Rajendra Krishna Prasad Peddi",
    role: "Vice President, Hyderabad Management Association",
    img: rajendraImg,
    tags: ["Operations", "Project Management", "PRK Consultants"],
    bio: "Mr. Rajendra Krishna Prasad Peddi is a seasoned engineering professional with over 35 years of experience in production, operations, and project management across reputed industries. He holds qualifications including LME, AMIE, MTech (PE), and PGDBM. Currently, he is the Principal Consultant at PRK Consultants Consortium, offering consultancy to SMEs. He is also actively involved in professional bodies and has a passion for classical arts, travel, and sports.",
  },
  {
    name: "Ram Gopal",
    role: "CEO, ARGS Consultants",
    img: ramGopalImg,
    tags: ["CII Trainer", "Operational Excellence", "Manufacturing"],
    bio: "Mr. Ram Gopal is a Founding Director of ARGS Consultants, with 32 years of experience in industrial packaging and manufacturing operations. He is an empanelled trainer and consultant with CII, focusing on operational excellence across India. An engineering graduate with a master's in industrial engineering, he has worked globally on best practices and strategy. Passionate about mentoring and youth empowerment, he actively contributes to social and educational initiatives.",
  },
  {
    name: "V. Ravi Kumar",
    role: "Director – Alliance, AlgaEnergy S.A.",
    img: raviKumarImg,
    tags: ["Agri-Business", "Monsanto & NFCL", "Business Development"],
    bio: "Mr. Ravi Kumar is a seasoned agri-business leader with 21 years of experience in sales, marketing, and business development across fertilizers, seeds, and biostimulants. An alumnus of ANGRAU and Symbiosis, he has worked with top firms like NFCL, Monsanto, and Thomson Reuters. He currently serves as Director – Alliance at AlgaEnergy S.A., leading strategic business operations. Ravi is known for his strong leadership, communication skills, and ability to drive growth through innovation and teamwork.",
  },
  {
    name: "Dr. Ravindra Penmatsa",
    role: "Certified Life & Executive Coach, Acumentor",
    img: ravindraImg,
    tags: ["ICF Coach", "IIT Kharagpur", "1000+ Mentored"],
    bio: "Dr. Ravindra Penmatsa is a seasoned business leader with 40 years of experience across NTPC, SAIL, and Tech Mahindra, where he managed $350M+ business and led 5000+ people. An IIT Kharagpur alumnus with a PhD in Well-Being, he specializes in business strategy, IT, and people development. He is a certified ICF coach, having mentored over 1,000 professionals, including IIM and ISB alumni. Currently, as Chief Mentor at Acumentor, he advises organizations on leadership, growth, and well-being.",
  },
  {
    name: "Srinivas Rao",
    role: "General Manager – HR, L N B Group",
    img: srinivasRaoImg,
    tags: ["HR Analytics", "Talent Management", "21+ Years"],
    bio: "Mr. Srinivas Rao, with over 21 years of HR leadership experience, has driven strategic HR initiatives across sectors like agriculture, textiles, energy, and finance. Currently GM – HR at LN Bangur Group, he specializes in HR digitalization, talent management, and employee engagement. His past roles reflect expertise in M&A, compensation restructuring, and competency mapping. A certified HR analytics professional, he holds MHRM and B.Com degrees from Andhra University.",
  },
  {
    name: "Sudhir Kumar",
    role: "Former Director, Ni-MSME",
    img: sudhirImg,
    tags: ["MSME Policy", "Startup Incubation", "M.Tech"],
    bio: "Mr. Sudhir Kumar is a seasoned professional with over 30 years in the Ministry of MSME, leading entrepreneurship and MSME development initiatives. He played a key role in startup incubation, export facilitation, and industrial modernization across Telangana and Andhra Pradesh. Previously, at Andhra Pradesh Productivity Council, he led productivity and quality enhancement projects in large industries. He holds M.Tech and B.Tech degrees in Mechanical Engineering, with deep expertise in policy execution and enterprise development.",
  },
  {
    name: "C. Vamsi Krishna",
    role: "CEO, AgriSensei",
    img: vamsiImg,
    tags: ["AgriTech", "P&L Management", "MANAGE Alumni"],
    bio: "Mr. C. Vamsi Krishna is the CEO of AgriSensei and a passionate business leader with 19 years of experience in the Indian Agri-Input sector. He has held key roles in MNCs, Indian seed companies, and AgriTech firms, driving sales, marketing, and business transformation. His core strengths lie in organizational scale-up, change management, and strategic consulting across pan-India operations. An alumnus of MANAGE, Hyderabad, Vamsi specializes in AgriTech, branding, P&L management, and team development.",
  },
  {
    name: "Dr. Vengalarao Pachava",
    role: "Assistant Professor, NMIMS",
    img: vengalaraoImg,
    tags: ["Business Analytics", "AI & Data Science", "NMIMS"],
    bio: "Dr. Vengalarao Pachava is an Assistant Professor at NMIMS Hyderabad with a Ph.D. in Management and expertise in business analytics, AI, and data science. He has published research in Scopus, ABDC, and Web of Science journals and leads ICSSR-funded sustainability projects. A former Data Scientist, he brings industry experience to his academic role. He is certified in SAS and Power BI and regularly conducts workshops on analytics and research methods.",
  },
];

const AcademicCouncilPage = () => {
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
              Academic Council
            </h1>
            <div className="mt-6 flex w-fit mx-auto items-center gap-4">
              <span className="h-[2px] w-14 bg-primary/80" />
              <span className="text-primary-foreground/90 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em]">
                Members
              </span>
              <span className="h-[2px] w-14 bg-primary/80" />
            </div>
            <p className="mt-7 max-w-2xl mx-auto text-primary-foreground/75 text-base md:text-lg leading-relaxed">
              Distinguished academics, researchers, and industry experts guiding
              the academic excellence and curriculum innovation at Ashoka School
              of Business.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-primary px-4 py-4">
        <div className="container-wide mx-auto grid grid-cols-3 gap-4 text-center">
          {[
            { value: "18", label: "Council Members" },
            { value: "500+", label: "Combined Years of Experience" },
            { value: "IIMs, IITs", label: "& Global Institutions" },
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
              <SectionFadeIn key={member.name} delay={Math.min(i * 0.05, 0.36)}>
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
                        ASB Academic Council
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
                          className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary"
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

export default AcademicCouncilPage;
