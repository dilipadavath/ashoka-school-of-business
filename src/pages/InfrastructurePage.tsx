import SectionFadeIn from "@/components/SectionFadeIn";
import TextReveal from "@/components/TextReveal";
import HoverCardAnimation from "@/components/HoverCardAnimation";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import infrastructureVideo from "@/asb-event-Made-with-Clipchamp.compressed.mp4";

const galleryModules = import.meta.glob(
  "../assets/gallery/*.{png,webp,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const galleryImages = Object.entries(galleryModules)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
  )
  .map(([, src]) => src);

const InfrastructurePage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    bookingDate: Yup.string().required("Date is required"),
    time: Yup.string().required("Time is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      bookingDate: "",
      time: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      // Handle form submission here
      setShowSuccess(true);
      formik.resetForm();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    },
  });

  const showPreviousImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  const showNextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryImages.length);
  };

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
            <TextReveal variant="word" delay={0.1} stagger={0.08}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] text-primary-foreground">
                Infrastructure
              </h1>
            </TextReveal>
            <p className="mt-6 max-w-2xl text-primary-foreground/75 text-base md:text-lg leading-relaxed">
              ASB offers access to various facilities to render a remarkable
              learning experience to the students. The campus is located on the
              scenic outskirts of Hyderabad and provides facilities for both
              academic and leisure purposes. ASB houses interactive and digital
              classrooms. It also has 2 Seminar halls with a capacity of 100 -
              200+ students respectively to organise various programs. ASB
              consists of a space known as the Ashoka Hub which offers
              brainstorming sessions to aspiring entrepreneurs and students from
              different disciplines. It also constitutes a seminar hall with a
              capacity of 200+ students to hold guest lectures. ASB comprises a
              library with the latest journals and books and exceptional hostel
              facilities for both boys and girls within the campus.
            </p>
            <p className="mt-6 max-w-2xl text-primary-foreground/90 text-base md:text-lg leading-relaxed font-medium">
              Experience the energy of learning, growth, and ambition at Ashoka
              School of Business, Hyderabad
            </p>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-[1.6rem] border border-primary/25 bg-white/10 p-3 shadow-[0_24px_60px_rgba(2,8,23,0.32)] backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-secondary aspect-video">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover"
                  src={infrastructureVideo}
                />
              </div>
            </div>
          </SectionFadeIn>
        </div>


      </section>


      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-7xl mx-auto flex gap-3 flex-col sm:flex-row items-stretch sm:items-center rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
          >
            <label className="sr-only" htmlFor="campus-visit-name">
              Name
            </label>
            <input
              id="campus-visit-name"
              name="name"
              type="text"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="flex-1 h-11 rounded-xl border border-white/15 bg-white/95 px-4 text-sm font-medium text-charcoal placeholder:text-charcoal/35 shadow-sm outline-none transition focus:border-primary/60 font-body"
            />

            <label className="sr-only" htmlFor="campus-visit-date">
              Booking date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="flex-1 h-11 rounded-xl border border-white/15 bg-white/95 px-4 text-sm font-medium text-charcoal shadow-sm outline-none transition focus:border-primary/60 font-body flex items-center justify-between"
                >
                  <span>{formik.values.bookingDate || "Select date"}</span>
                  <CalendarIcon className="h-4 w-4 text-charcoal" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={formik.values.bookingDate ? new Date(formik.values.bookingDate) : undefined}
                  onSelect={(date) => {
                    if (date) {
                      const dateString = date.toISOString().split('T')[0];
                      formik.setFieldValue('bookingDate', dateString);
                    }
                  }}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <label className="sr-only" htmlFor="campus-visit-time">
              Time
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="flex-1 h-11 rounded-xl border border-white/15 bg-white/95 px-4 text-sm font-medium text-charcoal shadow-sm outline-none transition focus:border-primary/60 font-body flex items-center justify-between"
                >
                  <span>{formik.values.time || "Select time"}</span>
                  <Clock className="h-4 w-4 text-charcoal" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-3" align="start">
                <div className="space-y-2">
                  <input
                    type="time"
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    name="time"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm font-body"
                  />
                  <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                    {Array.from({ length: 24 }, (_, h) => {
                      return Array.from({ length: 4 }, (_, m) => {
                        const hour = String(h).padStart(2, '0');
                        const minute = String(m * 15).padStart(2, '0');
                        const timeValue = `${hour}:${minute}`;
                        return (
                          <button
                            key={timeValue}
                            type="button"
                            onClick={() => formik.setFieldValue('time', timeValue)}
                            className={`text-xs px-2 py-1 rounded ${
                              formik.values.time === timeValue
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                          >
                            {timeValue}
                          </button>
                        );
                      });
                    }).flat()}
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <button
              type="submit"
              className="h-11 sm:w-auto sm:px-8 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition whitespace-nowrap font-body"
            >
              Book Visit
            </button>
          </form>

          {showSuccess && (
            <div className="max-w-7xl mx-auto mt-4 p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-700 animate-in fade-in slide-in-from-top-2 duration-500">
              <div className="flex items-center gap-3">
                <span className="text-xl">✓</span>
                <div>
                  <p className="font-semibold">Campus visit booked successfully!</p>
                  <p className="text-sm text-green-600">We'll confirm your visit shortly.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-wide">
          <SectionFadeIn>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
              {galleryImages.map((image, index) => (
                <div
                  key={image}
                  className={`mb-4 break-inside-avoid overflow-hidden rounded-lg ${index % 7 === 0 ? "sm:translate-y-3" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className="block w-full overflow-hidden rounded-lg"
                    aria-label={`Open infrastructure gallery image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`Infrastructure gallery ${index + 1}`}
                      loading="lazy"
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </button>
                </div>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => !open && setSelectedIndex(null)}
      >
        <DialogContent
          showCloseButton={false}
          className="max-w-[min(94vw,1400px)] border-none bg-transparent p-0 shadow-none"
        >
          <DialogTitle className="sr-only">
            Infrastructure Gallery Image
          </DialogTitle>
          {selectedIndex !== null && (
            <div className="relative">
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-2 top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-charcoal text-2xl leading-none shadow-md hover:bg-white"
                aria-label="Close image preview"
              >
                ×
              </button>

              <button
                type="button"
                onClick={showPreviousImage}
                className="absolute left-2 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-charcoal text-xl shadow-md hover:bg-white"
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-2 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-charcoal text-xl shadow-md hover:bg-white"
                aria-label="Next image"
              >
                ›
              </button>

              <img
                src={galleryImages[selectedIndex]}
                alt={`Infrastructure gallery preview ${selectedIndex + 1}`}
                className="max-h-[88vh] w-auto max-w-full object-contain mx-auto rounded-xl"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <div className="h-1 w-full bg-primary" />
    </div>
  );
};

export default InfrastructurePage;
