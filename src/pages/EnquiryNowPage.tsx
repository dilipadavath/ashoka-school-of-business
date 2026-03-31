import { ChangeEvent, FormEvent, useState } from "react";
import SectionFadeIn from "@/components/SectionFadeIn";
import { Send } from "lucide-react";

type EnquiryFormData = {
  fullName: string;
  mobile: string;
  email: string;
  specialisation: string;
  agree: boolean;
};

type EnquiryFormErrors = Partial<Record<keyof EnquiryFormData, string>>;

const initialFormData: EnquiryFormData = {
  fullName: "",
  mobile: "",
  email: "",
  specialisation: "",
  agree: false,
};

const specialisations = [
  "Agri-Business Management",
  "Artificial Intelligence & Data Science",
  "BBA - General",
  "Degree in Securities Market",
  "Finance with Fintech",
  "HR with HR Analytics",
  "Marketing with Analytics",
];

const validateForm = (values: EnquiryFormData): EnquiryFormErrors => {
  const errors: EnquiryFormErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Full Name is mandatory.";
  if (!values.mobile.trim()) {
    errors.mobile = "Mobile No. is mandatory.";
  } else if (values.mobile.replace(/\D/g, "").length !== 10) {
    errors.mobile = "Enter a valid 10-digit mobile number.";
  }
  if (!values.email.trim()) {
    errors.email = "Email Id is mandatory.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.specialisation) errors.specialisation = "Please select a specialisation.";
  if (!values.agree) errors.agree = "You must agree to continue.";

  return errors;
};

const EnquiryNowPage = () => {
  const [formData, setFormData] = useState<EnquiryFormData>(initialFormData);
  const [errors, setErrors] = useState<EnquiryFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputClasses = (field: keyof EnquiryFormData) =>
    `w-full rounded-xl border bg-white px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition-colors ${
      errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-border focus:ring-primary/30 hover:border-slate-300"
    }`;

  const selectClasses = (field: keyof EnquiryFormData) =>
    `w-full rounded-xl border bg-white px-4 py-3.5 focus:outline-none focus:ring-2 transition-colors appearance-none cursor-pointer ${
      errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-border focus:ring-primary/30 hover:border-slate-300"
    } ${formData[field] ? "text-foreground" : "text-muted-foreground/60"}`;

  const handleChange =
    (field: keyof EnquiryFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleMobileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, mobile: digits }));
    setErrors((prev) => ({ ...prev, mobile: undefined }));
  };

  const handleBlur = (field: keyof EnquiryFormData) => {
    const validation = validateForm(formData);
    setErrors((prev) => ({ ...prev, [field]: validation[field] }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validateForm(formData);
    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <main className="pt-20 min-h-screen bg-[linear-gradient(135deg,#f8fafc_0%,#fff1f2_50%,#f8fafc_100%)]">
      <div className="flex items-center justify-center px-4 py-12 md:py-20">
        <SectionFadeIn className="w-full max-w-[800px]">
          <div className="w-full">
            {/* Header */}
            <div className="relative overflow-hidden rounded-t-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.24),transparent_46%),radial-gradient(circle_at_80%_0%,rgba(2,132,199,0.24),transparent_38%),linear-gradient(145deg,#0f172a,#1e293b)] px-8 py-10 text-center text-white">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-16 right-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-16 left-6 h-36 w-36 rounded-full bg-sky-400/15 blur-3xl" />
              </div>
              <div className="relative z-10">
                <h1 className="text-2xl md:text-3xl font-black tracking-tight">Enquire Now</h1>
                <p className="mt-2 text-sm text-white/70">Applications Open For 2026 – 2028 · PGDM</p>
              </div>
            </div>

            {/* Form Card */}
            <div className="rounded-b-3xl border border-t-0 border-border/70 bg-white p-6 md:p-8 shadow-xl shadow-slate-900/5">
              {isSubmitted && (
                <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  Enquiry submitted successfully! Our admissions team will contact you shortly.
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Enter Full Name*"
                    value={formData.fullName}
                    onChange={handleChange("fullName")}
                    onBlur={() => handleBlur("fullName")}
                    className={inputClasses("fullName")}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">{errors.fullName}</p>
                  )}
                </div>

                {/* Mobile Number with +91 prefix */}
                <div>
                  <div className={`flex items-center rounded-xl border bg-white transition-colors ${
                    errors.mobile ? "border-red-400" : "border-border hover:border-slate-300"
                  }`}>
                    <span className="flex items-center gap-1.5 border-r border-border pl-4 pr-3 py-3.5 text-base font-medium text-foreground select-none whitespace-nowrap">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      placeholder="Enter Mobile No.*"
                      value={formData.mobile}
                      onChange={handleMobileChange}
                      onBlur={() => handleBlur("mobile")}
                      maxLength={10}
                      className="w-full rounded-r-xl bg-transparent px-3 py-3.5 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                    />
                  </div>
                  {errors.mobile && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">{errors.mobile}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Enter Email Id*"
                    value={formData.email}
                    onChange={handleChange("email")}
                    onBlur={() => handleBlur("email")}
                    className={inputClasses("email")}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Select Specialisation */}
                <div className="relative">
                  <select
                    value={formData.specialisation}
                    onChange={handleChange("specialisation")}
                    onBlur={() => handleBlur("specialisation")}
                    className={selectClasses("specialisation")}
                  >
                    <option value="" disabled>
                      Select Specialisation*
                    </option>
                    {specialisations.map((s) => (
                      <option key={s} value={s} className="text-foreground">
                        {s}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {errors.specialisation && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">{errors.specialisation}</p>
                  )}
                </div>

                {/* Agree Checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agree}
                      onChange={handleChange("agree")}
                      className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-red-600 cursor-pointer"
                    />
                    <span className="text-sm text-muted-foreground leading-snug">
                      I agree to receive information regarding my submitted applications by signing up on Ashoka Business school*
                    </span>
                  </label>
                  {errors.agree && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">{errors.agree}</p>
                  )}
                </div>

                {/* Submit */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/25 transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="h-4 w-4" />
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </SectionFadeIn>
      </div>
    </main>
  );
};

export default EnquiryNowPage;
