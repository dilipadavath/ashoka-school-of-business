import { ChangeEvent, FormEvent, useState } from "react";
import SectionFadeIn from "@/components/SectionFadeIn";
import { GraduationCap, Send } from "lucide-react";

type RegisterFormData = {
  name: string;
  phone: string;
  email: string;
  course: string;
  specialization: string;
  city: string;
  state: string;
};

type RegisterFormErrors = Partial<Record<keyof RegisterFormData, string>>;

const initialFormData: RegisterFormData = {
  name: "",
  phone: "",
  email: "",
  course: "",
  specialization: "",
  city: "",
  state: "",
};

const courses = ["Post Graduate Diploma in Management"];

const specializations = [
  "Artificial Intelligence & Data Science",
  "Marketing with Business Analytics",
  "HR & HR Analytics",
  "Finance with Fintech",
  "Not yet decided",
];

const validateForm = (values: RegisterFormData): RegisterFormErrors => {
  const errors: RegisterFormErrors = {};

  if (!values.name.trim()) errors.name = "This field is required";
  if (!values.phone.trim()) {
    errors.phone = "This field is required";
  } else if (values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Enter a valid phone number";
  }
  if (!values.email.trim()) {
    errors.email = "This field is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!values.course) errors.course = "This field is required";
  if (!values.specialization) errors.specialization = "This field is required";
  if (!values.city.trim()) errors.city = "This field is required";
  if (!values.state.trim()) errors.state = "This field is required";

  return errors;
};

const RegisterNowPage = () => {
  const [formData, setFormData] = useState<RegisterFormData>(initialFormData);
  const [errors, setErrors] = useState<RegisterFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputClasses = (field: keyof RegisterFormData) =>
    `w-full rounded-xl border bg-white px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition-colors ${
      errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-border focus:ring-primary/30 hover:border-slate-300"
    }`;

  const selectClasses = (field: keyof RegisterFormData) =>
    `w-full rounded-xl border bg-white px-4 py-3.5 focus:outline-none focus:ring-2 transition-colors appearance-none cursor-pointer ${
      errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-border focus:ring-primary/30 hover:border-slate-300"
    } ${formData[field] ? "text-foreground" : "text-red-400 font-medium"}`;

  const handleChange =
    (field: keyof RegisterFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleBlur = (field: keyof RegisterFormData) => {
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
            {/* Header / Banner area */}
            <div className="relative overflow-hidden rounded-t-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.24),transparent_46%),radial-gradient(circle_at_80%_0%,rgba(2,132,199,0.24),transparent_38%),linear-gradient(145deg,#0f172a,#1e293b)] px-8 py-10 text-center text-white">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-16 right-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-16 left-6 h-36 w-36 rounded-full bg-sky-400/15 blur-3xl" />
              </div>
              <div className="relative z-10">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <h1 className="text-2xl md:text-3xl font-black tracking-tight">Register Now</h1>
                <p className="mt-2 text-sm text-white/70">Fill in your details to begin your journey with ASB</p>
              </div>
            </div>

            {/* Form Card */}
            <div className="rounded-b-3xl border border-t-0 border-border/70 bg-white p-6 md:p-8 shadow-xl shadow-slate-900/5">
              {isSubmitted && (
                <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  Registration submitted successfully! Our admissions team will contact you shortly.
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange("name")}
                    onBlur={() => handleBlur("name")}
                    className={inputClasses("name")}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange("phone")}
                    onBlur={() => handleBlur("phone")}
                    className={inputClasses("phone")}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange("email")}
                    onBlur={() => handleBlur("email")}
                    className={inputClasses("email")}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Select Course */}
                <div className="relative">
                  <select
                    value={formData.course}
                    onChange={handleChange("course")}
                    onBlur={() => handleBlur("course")}
                    className={selectClasses("course")}
                  >
                    <option value="" disabled>
                      Select Course
                    </option>
                    {courses.map((c) => (
                      <option key={c} value={c} className="text-foreground">
                        {c}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {errors.course && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">{errors.course}</p>
                  )}
                </div>

                {/* Select Specialization */}
                <div className="relative">
                  <select
                    value={formData.specialization}
                    onChange={handleChange("specialization")}
                    onBlur={() => handleBlur("specialization")}
                    className={selectClasses("specialization")}
                  >
                    <option value="" disabled>
                      Select Specialization
                    </option>
                    {specializations.map((s) => (
                      <option key={s} value={s} className="text-foreground">
                        {s}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {errors.specialization && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">
                      {errors.specialization}
                    </p>
                  )}
                </div>

                {/* City */}
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange("city")}
                    onBlur={() => handleBlur("city")}
                    className={inputClasses("city")}
                  />
                  {errors.city && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">{errors.city}</p>
                  )}
                </div>

                {/* State */}
                <div>
                  <input
                    type="text"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange("state")}
                    onBlur={() => handleBlur("state")}
                    className={inputClasses("state")}
                  />
                  {errors.state && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">{errors.state}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/25 transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="h-4 w-4" />
                  Submit
                </button>
              </form>
            </div>
          </div>
        </SectionFadeIn>
      </div>
    </main>
  );
};

export default RegisterNowPage;
