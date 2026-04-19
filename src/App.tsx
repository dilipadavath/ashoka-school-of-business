import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import CursorDot from "@/components/CursorDot";
import Index from "./pages/Index";
import BBAPage from "./pages/BBAPage";
import PGDMPage from "./pages/PGDMPage";
import PGDMSecuritiesPage from "./pages/PGDMSecuritiesPage";
import PGDMAIDataSciencePage from "./pages/PGDMAIDataSciencePage";
import PGDMMarketingPage from "./pages/PGDMMarketingPage";
import PGDMFinancePage from "./pages/PGDMFinancePage";
import PGDMHRPage from "./pages/PGDMHRPage";
import PGDMAgriBizPage from "./pages/PGDMAgriBizPage";
import PlacementsPage from "./pages/PlacementsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import InfrastructurePage from "./pages/InfrastructurePage";
import FounderChairmanMessagePage from "./pages/FounderChairmanMessagePage";
import DirectorsMessagePage from "./pages/DirectorsMessagePage";
import GoverningCouncilPage from "./pages/GoverningCouncilPage";
import AcademicCouncilPage from "./pages/AcademicCouncilPage";
import FacultyPage from "./pages/FacultyPage";
import OurFacultyPage from "./pages/OurFacultyPage";
import ResearchAndConsultingPage from "./pages/ResearchAndConsultingPage";
import WhyASBPage from "./pages/WhyASBPage";
import EIRPage from "./pages/EIRPage";
import ReachPage from "./pages/ReachPage";
import PathPage from "./pages/PathPage";
import InfosysSpringboardPage from "./pages/InfosysSpringboardPage";
import CesimPage from "./pages/CesimPage";
import NewsEventsPage from "./pages/NewsEventsPage";
import BlogPage from "./pages/BlogPage";
import GIPPage from "./pages/GIPPage";
import AarohanPage from "./pages/AarohanPage";
import LifeAtASBPage from "./pages/LifeAtASBPage";
import GrievanceRedressalCommitteePage from "./pages/GrievanceRedressalCommitteePage";
import AntiDiscriminationCommitteePage from "./pages/AntiDiscriminationCommitteePage";
import AntiRaggingCommitteePage from "./pages/AntiRaggingCommitteePage";
import InternalComplaintCommitteePage from "./pages/InternalComplaintCommitteePage";
import InternalQualityAssuranceCellPage from "./pages/InternalQualityAssuranceCellPage";
import WomenProtectionCellPage from "./pages/WomenProtectionCellPage";
import ShippingPolicyPage from "./pages/ShippingPolicyPage";
import CancellationRefundPolicyPage from "./pages/CancellationRefundPolicyPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ThankYouPage from "./pages/ThankYouPage";
import FacultyOpeningsPage from "./pages/FacultyOpeningsPage";
import RegisterNowPage from "./pages/RegisterNowPage";
import EnquiryNowPage from "./pages/EnquiryNowPage";
import NotFound from "./pages/NotFound";
import ApplicationFormPage from "./pages/ApplicationFormPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CursorDot />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bba" element={<BBAPage />} />
          <Route path="/pgdm" element={<PGDMPage />} />
          <Route path="/qms" element={<PGDMSecuritiesPage />} />
          <Route path="/pgdm/securities-markets" element={<Navigate to="/qms" replace />} />
          <Route path="/pgdm-artificial-intelligence-data-science-colleges-in-hyderabad" element={<PGDMAIDataSciencePage />} />
          <Route path="/pgdm/ai-data-science" element={<Navigate to="/pgdm-artificial-intelligence-data-science-colleges-in-hyderabad" replace />} />
          <Route path="/pgdm-marketing-business-analytics-colleges-in-hyderabad" element={<PGDMMarketingPage />} />
          <Route path="/pgdm/marketing-analytics" element={<Navigate to="/pgdm-marketing-business-analytics-colleges-in-hyderabad" replace />} />
          <Route path="/pgdm-mba-finance-with-fintech-colleges-in-hyderabad" element={<PGDMFinancePage />} />
          <Route path="/pgdm/finance-fintech" element={<Navigate to="/pgdm-mba-finance-with-fintech-colleges-in-hyderabad" replace />} />
          <Route path="/pgdm-hr-management-with-analytics-courses-in-hyderabad" element={<PGDMHRPage />} />
          <Route path="/pgdm/hr-analytics" element={<Navigate to="/pgdm-hr-management-with-analytics-courses-in-hyderabad" replace />} />
          <Route path="/pgdm-agri-business-management" element={<PGDMAgriBizPage />} />
          <Route path="/pgdm/agri-business" element={<Navigate to="/pgdm-agri-business-management" replace />} />
          <Route path="/best-placements-mba-colleges-in-hyderabad" element={<PlacementsPage />} />
          <Route path="/placements" element={<Navigate to="/best-placements-mba-colleges-in-hyderabad" replace />} />
          <Route path="/admissions-for-mba-in-hyderabad" element={<AdmissionsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/founder-and-chairman-message" element={<FounderChairmanMessagePage />} />
          <Route path="/directors-message" element={<DirectorsMessagePage />} />
          <Route path="/governing-council-members" element={<GoverningCouncilPage />} />
          <Route path="/academic-council-members" element={<AcademicCouncilPage />} />
          <Route path="/our-faculty" element={<OurFacultyPage />} />
          <Route path="/research-and-consulting" element={<ResearchAndConsultingPage />} />
          <Route path="/why-asb" element={<WhyASBPage />} />
          <Route path="/gip" element={<GIPPage />} />
          <Route path="/aarohan-2025" element={<AarohanPage />} />
          <Route path="/eir" element={<EIRPage />} />
          <Route path="/reach" element={<ReachPage />} />
          <Route path="/path" element={<PathPage />} />
          <Route path="/infosys-springboard" element={<InfosysSpringboardPage />} />
          <Route path="/cesim" element={<CesimPage />} />
          <Route path="/life-at-asb" element={<LifeAtASBPage />} />
          <Route path="/grievance-redressal-committee" element={<GrievanceRedressalCommitteePage />} />
          <Route path="/internal-complaint-committee" element={<InternalComplaintCommitteePage />} />
          <Route path="/intetnal-complaint-committee" element={<Navigate to="/internal-complaint-committee" replace />} />
          <Route path="/internal-quality-assurance-cell" element={<InternalQualityAssuranceCellPage />} />
          <Route path="/women-protection-cell" element={<WomenProtectionCellPage />} />
          <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
          <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/anti-discrimination-committee" element={<AntiDiscriminationCommitteePage />} />
          <Route path="/anti-ragging-committee" element={<AntiRaggingCommitteePage />} />
          <Route path="/news-events" element={<NewsEventsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faculty-openings" element={<FacultyOpeningsPage />} />
          <Route path="/register-now" element={<RegisterNowPage />} />
          <Route path="/enquiry-now" element={<EnquiryNowPage />} />
          <Route path="/application-form" element={<ApplicationFormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
