import SectionFadeIn from "@/components/SectionFadeIn";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import infrastructureVideo from "@/assets/Sequence 03.mp4";

const galleryModules = import.meta.glob("../assets/gallery/*.{png,webp,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const galleryImages = Object.entries(galleryModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
  .map(([, src]) => src);

const InfrastructurePage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showPreviousImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryImages.length);
  };

  return (
    <div className="pt-20 bg-background overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground px-4 md:px-8 py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        </div>

        <div className="container-wide relative z-10 px-4 grid gap-10 lg:grid-cols-[1fr_1.05fr] items-center">
          <SectionFadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] text-primary-foreground">
              Infrastructure
            </h1>
            <p className="mt-6 max-w-2xl text-primary-foreground/75 text-base md:text-lg leading-relaxed">
              ASB offers access to various facilities to render a remarkable learning experience to the students. The campus is located on the scenic outskirts of Hyderabad and provides facilities for both academic and leisure purposes. ASB houses interactive and digital classrooms. It also has 2 Seminar halls with a capacity of 100 - 200+ students respectively to organise various programs. ASB consists of a space known as the Ashoka Hub which offers brainstorming sessions to aspiring entrepreneurs and students from different disciplines. It also constitutes a seminar hall with a capacity of 200+ students to hold guest lectures. ASB comprises a library with the latest journals and books and exceptional hostel facilities for both boys and girls within the campus.
            </p>
            <p className="mt-6 max-w-2xl text-primary-foreground/90 text-base md:text-lg leading-relaxed font-medium">
              Experience the energy of learning, growth, and ambition at Ashoka School of Business, Hyderabad
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

      <section className="px-4 md:px-8 py-14 md:py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="container-wide px-4">
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

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent showCloseButton={false} className="max-w-[min(94vw,1400px)] border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">Infrastructure Gallery Image</DialogTitle>
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
