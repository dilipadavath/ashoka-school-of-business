import { useState } from "react";
import SectionFadeIn from "@/components/SectionFadeIn";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const galleryModules = import.meta.glob(
  "../assets/life-at-asb/*.{png,webp,jpg,jpeg}",
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

const LifeAtASBPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

        <div className="container-wide relative z-10">
          <SectionFadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] text-primary-foreground">
              Life at ASB
            </h1>
            <p className="mt-6 max-w-5xl text-primary-foreground/80 text-base md:text-lg leading-relaxed">
              The life of the student at ASB is no different from that of any
              student of any other Institute. However, it proves to be different
              once they go beyond portals of the institute and step into the
              unkind corporate world in terms of the challenges they face; the
              disappointments they suffer; the compromises they make; the
              realities they encounter and the success they enjoy. This is made
              possible by the academic content, the delivery toolbox, and the
              measurement process. All these processes are not only
              scientifically devised but also scrupulously observed and
              implemented. In sum, the life at ASB is a miniature of the stark
              realities of the large sized world outside the academic world.
            </p>
          </SectionFadeIn>
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
                    aria-label={`Open life at ASB gallery image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`Life at ASB gallery ${index + 1}`}
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
            Life at ASB Gallery Image
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
                alt={`Life at ASB gallery preview ${selectedIndex + 1}`}
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

export default LifeAtASBPage;
