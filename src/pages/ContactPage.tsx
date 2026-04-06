import { ChangeEvent, FormEvent, useState } from "react";
import SectionFadeIn from "@/components/SectionFadeIn";
import TextReveal from "@/components/TextReveal";
import HoverCardAnimation from "@/components/HoverCardAnimation";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const initialFormData: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const validateForm = (values: ContactFormData): ContactFormErrors => {
  const nextErrors: ContactFormErrors = {};

  if (!values.name.trim()) nextErrors.name = "Name is required.";
  if (!values.phone.trim()) {
    nextErrors.phone = "Phone is required.";
  } else if (values.phone.replace(/\D/g, "").length < 10) {
    nextErrors.phone = "Enter a valid phone number.";
  }

  if (!values.email.trim()) {
    nextErrors.email = "Email Address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = "Enter a valid email address.";
  }

  if (!values.subject.trim()) nextErrors.subject = "Subject is required.";
  if (!values.message.trim()) nextErrors.message = "Message is required.";

  return nextErrors;
};

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputClasses = (field: keyof ContactFormData) =>
    `w-full rounded-xl border bg-slate-50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 ${
      errors[field] ? "border-red-500 focus:ring-red-200" : "border-border focus:ring-primary/30"
    }`;

  const handleChange =
    (field: keyof ContactFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleBlur = (field: keyof ContactFormData) => {
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
    <div className="pt-20 bg-slate-100/60">
      <section className="relative bg-charcoal text-primary-foreground section-padding text-center overflow-hidden">
        <img src={contactHero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative z-10">
          <SectionFadeIn>
            <TextReveal variant="word" delay={0.1} stagger={0.12}>
              <h1 className="text-3xl md:text-5xl font-black mb-4">Contact Us</h1>
            </TextReveal>
            <p className="text-primary-foreground/80 text-lg">Let's Connect With us</p>
          </SectionFadeIn>
        </div>
      </section>

      <section className="relative section-padding overflow-hidden">
        <div className="pointer-events-none absolute -top-28 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

        <div className="container-wide relative z-10">
          <div className="max-w-7xl mx-auto">
            <SectionFadeIn>
              <div className="mb-8 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-sm md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Reach Out</p>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground">Choose your preferred way to connect</h2>
                    <p className="mt-2 text-muted-foreground">Quick response for admissions, campus visits, and general enquiries.</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a href="mailto:info@theasb.in" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary">
                      Email Us
                    </a>
                    <a href="tel:+917207939934" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-colors hover:bg-primary/90">
                      Call Admissions
                    </a>
                  </div>
                </div>
              </div>
            </SectionFadeIn>

          <div className="grid lg:grid-cols-2 gap-10">
            <SectionFadeIn>
              <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-white p-8 md:p-10 shadow-xl shadow-slate-900/5">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-rose-500 to-orange-400" />
                <h2 className="text-3xl font-black text-foreground mb-8">Let's Connect With us</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white p-4 border border-slate-100">
                    <div className="mt-0.5 h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Our Address</p>
                      <p className="text-muted-foreground text-sm">NH65, near Ramoji Film City, Hyderabad, Toopranpet, Telangana 508252</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white p-4 border border-slate-100">
                    <div className="mt-0.5 h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email Us</p>
                      <a href="mailto:info@theasb.in" className="text-muted-foreground text-sm hover:text-primary transition-colors">info@theasb.in</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white p-4 border border-slate-100">
                    <div className="mt-0.5 h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Call Us</p>
                      <p className="text-muted-foreground text-sm">For General Info: <a href="tel:+917207939930" className="hover:text-primary transition-colors">+91 72079 39930</a></p>
                      <p className="text-muted-foreground text-sm">For Admissions: <a href="tel:+917207939934" className="hover:text-primary transition-colors">+91 72079 39934</a></p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-3">Social Media</p>
                    <div className="flex items-center gap-3">
                      <a href="https://www.facebook.com/AshokaSchoolofBusiness/" target="_blank" rel="noreferrer" aria-label="Facebook-f" className="h-11 w-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center ring-1 ring-primary/20 hover:-translate-y-0.5 hover:bg-primary/90 transition-all">
                        <Facebook className="h-4 w-4" />
                      </a>
                      <a href="https://www.instagram.com/asb_ashokaschoolofbusiness/" target="_blank" rel="noreferrer" aria-label="Instagram" className="h-11 w-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center ring-1 ring-primary/20 hover:-translate-y-0.5 hover:bg-primary/90 transition-all">
                        <Instagram className="h-4 w-4" />
                      </a>
                      <a href="https://www.youtube.com/@asbashokaschoolofbusiness5035" target="_blank" rel="noreferrer" aria-label="Youtube" className="h-11 w-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center ring-1 ring-primary/20 hover:-translate-y-0.5 hover:bg-primary/90 transition-all">
                        <Youtube className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SectionFadeIn>

            <SectionFadeIn delay={0.12}>
              <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-white p-8 md:p-10 shadow-xl shadow-slate-900/5">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-rose-500 to-orange-400" />
                <h3 className="text-2xl font-black text-foreground mb-6">Send a Message</h3>
                {isSubmitted && (
                  <p className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    Message submitted successfully. Our team will contact you soon.
                  </p>
                )}
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange("name")}
                        onBlur={() => handleBlur("name")}
                        className={inputClasses("name")}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange("phone")}
                        onBlur={() => handleBlur("phone")}
                        className={inputClasses("phone")}
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange("email")}
                        onBlur={() => handleBlur("email")}
                        className={inputClasses("email")}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange("subject")}
                        onBlur={() => handleBlur("subject")}
                        className={inputClasses("subject")}
                      />
                      {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                    </div>
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange("message")}
                      onBlur={() => handleBlur("message")}
                      className={`${inputClasses("message")} resize-none`}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>
                  <button type="submit" className="w-full rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90">
                    Submit
                  </button>
                </form>
              </div>
            </SectionFadeIn>
          </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-wide">
          <div className="max-w-7xl mx-auto">
            <SectionFadeIn>
              <div className="mb-8 flex items-center justify-between gap-4 rounded-3xl border border-slate-200/70 bg-white/80 px-6 py-4 shadow-lg shadow-slate-900/5 backdrop-blur-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Locate Us</p>
                  <p className="text-foreground font-semibold">Campus coordinates and visitor details</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Ashoka+School+of+Business"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Open in Maps
                </a>
              </div>
            </SectionFadeIn>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <SectionFadeIn>
              <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-border/70 bg-white p-8 shadow-xl shadow-slate-900/5">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-rose-500 to-orange-400" />
                <h3 className="text-2xl font-black text-foreground mb-4">Contact Us</h3>
                <p className="text-muted-foreground mb-5">
                  For any questions or assistance, reach out to us through any of the following:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li><span className="font-semibold text-foreground">General Inquiries:</span> <a href="mailto:info@theasb.in" className="hover:text-primary transition-colors">info@theasb.in</a></li>
                  <li><span className="font-semibold text-foreground">Admissions &amp; Enquiries:</span> <a href="mailto:admissions@theasb.in" className="hover:text-primary transition-colors">admissions@theasb.in</a></li>
                  <li>
                    <span className="font-semibold text-foreground">Postal Address:</span>
                    <address className="not-italic mt-1 leading-6">
                      Ashoka School of Business
                      <br />
                      Malkapur Village, Choutuppal Mandal,
                      <br />
                      Nalgonda District, Telangana - 508252, India
                    </address>
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Phone:</span>{" "}
                    <a href="tel:+917207939930" className="hover:text-primary transition-colors">+91 72079 39930</a>{" "}(Info);{" "}
                    <a href="tel:+917207939934" className="hover:text-primary transition-colors">+91 72079 39934</a>{" "}(Admissions)
                  </li>
                </ul>
              </div>
            </SectionFadeIn>

            <SectionFadeIn delay={0.1}>
              <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-border/70 bg-white shadow-xl shadow-slate-900/5">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-rose-500 to-orange-400" />
                <iframe
                  title="Ashoka School of Business Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.468388897212!2d78.7713332!3d17.292935600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb0c4276da336f%3A0xce523fa5c24710e4!2sAshoka%20School%20of%20Business!5e0!3m2!1sen!2sin!4v1774702275717!5m2!1sen!2sin"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[420px] md:min-h-[520px]"
                />
              </div>
            </SectionFadeIn>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
