import { useState } from "react";
import SectionFadeIn from "@/components/SectionFadeIn";
import newsPrimaryImage from "@/assets/news-events img 1.webp";
import heroVisualImage from "@/assets/news-events/DSC_0418-2-scaled-e1689070825223.webp";
import mainEventVideo from "@/asb-event-Made-with-Clipchamp.compressed.mp4";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const imageModules = import.meta.glob("@/assets/news-events/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const nestedNewsEventModules = import.meta.glob("@/assets/news-events/**/*.{webp,png,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allNewsEventImages = Object.entries(imageModules)
  .map(([path, src]) => ({
    path,
    file: path.split("/").pop()?.toLowerCase() ?? "",
    src,
  }))
  .sort((a, b) => a.file.localeCompare(b.file));

const directNewsEventsGallery = allNewsEventImages.map((image) => image.src);

const getImagesFromNewsSubFolder = (folderName: string) =>
  Object.entries(nestedNewsEventModules)
    .filter(([filePath]) => filePath.includes(`/news-events/${folderName}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
    .map(([, src]) => src);

const groupImages = (matchers: RegExp[], limit: number) =>
  allNewsEventImages
    .filter((image) => matchers.some((matcher) => matcher.test(image.file)))
    .slice(0, limit)
    .map((image) => image.src);

const aimaGallery = groupImages([/^dsc086/, /^dsc087/, /^dsc088/, /^dsc090/], 9);
const seminarGallery = getImagesFromNewsSubFolder("Student's Participated and Presented Research");
const hmaGallery = getImagesFromNewsSubFolder("Students achievement at HMA");
const icmmetcGallery = getImagesFromNewsSubFolder("PGDM 1st year (AI & DS)");

const SectionLabel = ({ text }: { text: string }) => (
  <div className="mx-auto w-full max-w-4xl rounded-sm bg-[#ef2f2f] px-6 py-3 text-center text-xs md:text-sm font-bold uppercase tracking-wide text-white">
    {text}
  </div>
);

const ImageGrid = ({
  images,
  onImageClick,
}: {
  images: string[];
  onImageClick: (index: number) => void;
}) => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={`mb-4 break-inside-avoid overflow-hidden rounded-lg ${index % 7 === 0 ? "sm:translate-y-3" : ""}`}
        >
          <button
            type="button"
            onClick={() => onImageClick(index)}
            className="block w-full overflow-hidden rounded-lg"
            aria-label={`Open news gallery image ${index + 1}`}
          >
            <img
              src={image}
              alt={`News event gallery ${index + 1}`}
              className="h-full w-full rounded-lg object-cover"
              loading="lazy"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

const NewsEventsPage = () => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openPreview = (images: string[], index: number) => {
    setPreviewImages(images);
    setSelectedIndex(index);
  };

  const showPreviousImage = () => {
    if (selectedIndex === null || previewImages.length === 0) return;
    setSelectedIndex((selectedIndex - 1 + previewImages.length) % previewImages.length);
  };

  const showNextImage = () => {
    if (selectedIndex === null || previewImages.length === 0) return;
    setSelectedIndex((selectedIndex + 1) % previewImages.length);
  };

  return (
    <main className="pt-20 bg-[#ececec] overflow-x-clip">
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_18%_24%,rgba(220,38,38,0.22),transparent_48%),radial-gradient(circle_at_80%_10%,rgba(2,132,199,0.2),transparent_40%),linear-gradient(145deg,#0f172a,#1e293b)] text-primary-foreground px-4 md:px-8 py-16 md:py-24">
        <div className="container-wide relative z-10 px-4 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <SectionFadeIn>
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em]">
                Newsroom
              </p>
              <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight uppercase">News &amp; Events</h1>
              <p className="mt-5 text-sm md:text-base leading-relaxed text-primary-foreground/90">
                News and event highlights from Ashoka School of Business.
              </p>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-[1.6rem] border border-primary/25 bg-white/10 p-3 shadow-[0_24px_60px_rgba(2,8,23,0.32)] backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-secondary aspect-[4/3]">
                <img src={heroVisualImage} alt="News and events" className="h-full w-full object-cover" />
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-5xl mx-auto px-4 space-y-10 md:space-y-14">
          <SectionFadeIn>
            <SectionLabel text="News" />
            <div className="mx-auto mt-6 max-w-3xl rounded-[1.4rem] border border-black/10 bg-[linear-gradient(145deg,#ffffff,#f3f4f6)] p-3 md:p-5 shadow-[0_20px_50px_rgba(2,8,23,0.12)]">
              <div className="rounded-[1rem] border border-black/10 bg-white p-2 md:p-3 shadow-[0_10px_24px_rgba(2,8,23,0.12)]">
                <img src={newsPrimaryImage} alt="News events image 1" className="w-full h-auto object-contain" />
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.05}>
            <SectionLabel text="Events" />
            <div className="mt-6 rounded-[1.4rem] border border-black/10 bg-[linear-gradient(145deg,#fff,#f5f6f8)] p-4 md:p-6 shadow-[0_20px_50px_rgba(2,8,23,0.12)]">
              <p className="text-center text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-[#d62e2e]">
                AIMA Chanakya Regional Finale
              </p>

              <div className="mt-4 overflow-hidden rounded-xl border border-black/15 bg-black shadow-[0_12px_34px_rgba(2,8,23,0.22)]">
                <video
                  src={mainEventVideo}
                  controls
                  className="w-full max-h-[460px] object-contain bg-black"
                  preload="metadata"
                />
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="overflow-hidden rounded-xl border border-black/15 bg-black shadow-[0_8px_24px_rgba(2,8,23,0.18)]">
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/Q0UPlmnsELo"
                    title="A moment of pride and joy as ASB hosted its Convocation Ceremony"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-black/15 bg-black shadow-[0_8px_24px_rgba(2,8,23,0.18)]">
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/SugeL8WGW_0"
                    title="A historic moment for ASB!"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <ImageGrid images={directNewsEventsGallery} onImageClick={(index) => openPreview(directNewsEventsGallery, index)} />
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.08}>
            <SectionLabel text="Student's Participated and Presented Research Paper at National Seminar on Entrepreneurship and Startups in India on 12 - 13th April 2023" />
            <div className="mt-5">
              <ImageGrid images={seminarGallery} onImageClick={(index) => openPreview(seminarGallery, index)} />
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.1}>
            <SectionLabel text="Students achievement at HMA" />
            <div className="mt-5">
              <ImageGrid images={hmaGallery} onImageClick={(index) => openPreview(hmaGallery, index)} />
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={0.12}>
            <SectionLabel text="PGDM 1st year (AI & DS) and 2nd year (AI & ML) Students of ASB Presented their research articles at an International Conference on Mathematical Modelling and Emerging Trends in Computing (ICMMETC-2023) (Collaborating with APTSMS) DST-SERB SPONSORED, June 23-25, 2023) at the School of Technology, Woxsen University, Hyderabad" />
            <div className="mt-5">
              <ImageGrid images={icmmetcGallery} onImageClick={(index) => openPreview(icmmetcGallery, index)} />
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent showCloseButton={false} className="max-w-[min(94vw,1400px)] border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">News Gallery Image</DialogTitle>
          {selectedIndex !== null && previewImages.length > 0 && (
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
                src={previewImages[selectedIndex]}
                alt={`News gallery preview ${selectedIndex + 1}`}
                className="mx-auto max-h-[88vh] w-auto max-w-full rounded-xl object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default NewsEventsPage;
