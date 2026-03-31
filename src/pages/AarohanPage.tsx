import { useState } from "react";
import SectionFadeIn from "@/components/SectionFadeIn";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const allAarohanModules = import.meta.glob("../assets/aarohan-2025/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allAarohanVideos = import.meta.glob("../assets/aarohan-2025/**/*.{mp4,webm,mov,avi,mkv}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getFolder = (subfolderName: string): string[] =>
  Object.entries(allAarohanModules)
    .filter(([path]) => path.includes(`/aarohan-2025/${subfolderName}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
    .map(([, src]) => src);

const getVideosForDay = (dayNumber: number): string[] =>
  Object.entries(allAarohanVideos)
    .filter(([path]) => {
      const fileName = path.split("/").pop()?.toLowerCase() ?? "";
      const match = fileName.match(/day\s*(\d+)/i);
      return !!match && Number(match[1]) === dayNumber;
    })
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
    .map(([, src]) => src);

const aarohanDays = [
  {
    day: "DAY 01",
    title: "AAROHAN 2025 Inaugural Ceremony",
    images: getFolder("AAROHAN 2025 Inaugural Ceremony"),
    videos: getVideosForDay(1),
  },
  {
    day: "DAY 02",
    title: "Orientation on PGDM Handbook & Ice Breaking Activity",
    images: getFolder("Day 02"),
    videos: getVideosForDay(2),
  },
  {
    day: "DAY 03",
    title: "A Session on Business Etiquette & Personal Branding and Panel Discussion on The Future of Work: Skills that Matter in 2025 and Beyond",
    images: getFolder("Day 03"),
    videos: getVideosForDay(3),
  },
  {
    day: "DAY 04",
    title: "Becoming a Better Negotiator — Fundamentals You Will Use Every Day and Emerging Technologies on AI & DS",
    images: getFolder("Day 04"),
    videos: getVideosForDay(4),
  },
  {
    day: "DAY 05",
    title: "Workshop on MS Excel",
    images: getFolder("Day 05"),
    videos: getVideosForDay(5),
  },
  {
    day: "DAY 06",
    title: "A Workshop on OCTANE",
    images: getFolder("Day 06"),
    videos: getVideosForDay(6),
  },
  {
    day: "DAY 07",
    title: "Workshop on Emotional Intelligence",
    images: getFolder("Day 07"),
    videos: getVideosForDay(7),
  },
  {
    day: "DAY 08",
    title: "Workshop on HR Collaborative Intelligence and Inspiring Alumni",
    images: getFolder("Day 08"),
    videos: getVideosForDay(8),
  },
  {
    day: "DAY 09",
    title: "A Session on Know Thyself and One Dream & One Team",
    images: getFolder("Day 09"),
    videos: getVideosForDay(9),
  },
  {
    day: "DAY 10",
    title: "Session on Goal Setting and Choose to Challenge",
    images: getFolder("Day 10"),
    videos: getVideosForDay(10),
  },
  {
    day: "DAY 11",
    title: "Session on Importance of Well-Being for Business Students",
    images: getFolder("Day 11"),
    videos: getVideosForDay(11),
  },
  {
    day: "DAY 12",
    title: "Sessions on Agri Input 2025 & Startup Ecosystem, Agri Field Visit",
    images: getFolder("Day 12"),
    videos: getVideosForDay(12),
  },
  {
    day: "DAY 13",
    title: "Workshop on Pottery",
    images: getFolder("Day 13"),
    videos: getVideosForDay(13),
  },
  {
    day: "DAY 14",
    title: "Industrial Visit to MSME Tool Room",
    images: getFolder("Day 14"),
    videos: getVideosForDay(14),
  },
  {
    day: "DAY 15",
    title: "Innovators Conclave",
    images: getFolder("Day 15"),
    videos: getVideosForDay(15),
  },
];

const AarohanPage = () => {
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
    <main className="pt-20 bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.22),transparent_46%),radial-gradient(circle_at_80%_0%,rgba(2,132,199,0.24),transparent_38%),linear-gradient(145deg,#0f172a,#1e293b)] text-primary-foreground px-4 md:px-8 py-16 md:py-24">
        <div className="container-wide relative z-10 px-4">
          <SectionFadeIn>
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em]">
                Why ASB
              </p>
              <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight">AAROHAN — 2025</h1>
              <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-primary-foreground/90">
                A 15-day high-energy orientation and induction program designed to ignite ambition, build community, and
                equip ASB students with the skills, mindset, and networks needed for a successful management career.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#itinerary"
                  className="inline-flex items-center rounded-lg border border-primary-foreground/35 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
                >
                  View Program
                </a>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Day-by-day gallery */}
      <section id="itinerary" className="section-padding bg-background">
        <div className="container-wide max-w-6xl">
          {aarohanDays.map((day, dayIndex) => (
            <SectionFadeIn key={dayIndex} delay={Math.min(dayIndex * 0.04, 0.3)}>
              <div className="mb-14">
                {/* Day header */}
                <div className="bg-primary text-primary-foreground px-6 py-4 rounded-t-lg">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary-foreground/70">
                    {day.day}
                  </p>
                  <h2 className="mt-1 text-lg md:text-xl font-black leading-snug">{day.title}</h2>
                </div>

                {/* Gallery grid */}
                <div className="border border-t-0 border-border rounded-b-lg px-6 py-6">
                  {day.images.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {day.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="aspect-video overflow-hidden rounded-lg">
                          <button
                            type="button"
                            onClick={() => openPreview(day.images, imgIndex)}
                            className="block h-full w-full overflow-hidden rounded-lg"
                            aria-label={`Open ${day.day} image ${imgIndex + 1}`}
                          >
                            <img
                              src={img}
                              alt={`${day.title} - Image ${imgIndex + 1}`}
                              className="h-full w-full rounded-lg object-cover"
                              loading="lazy"
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">Images coming soon.</p>
                  )}

                  {day.videos.length > 0 && (
                    <div className="mt-6">
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">Videos</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {day.videos.map((video, videoIndex) => (
                          <div key={videoIndex} className="aspect-video overflow-hidden rounded-lg bg-black">
                            <video
                              controls
                              preload="metadata"
                              className="h-full w-full object-cover"
                              src={video}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SectionFadeIn>
          ))}
        </div>
      </section>

      {/* Fullscreen preview modal */}
      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent showCloseButton={false} className="max-w-[min(94vw,1400px)] border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">AAROHAN Gallery Image</DialogTitle>
          {selectedIndex !== null && previewImages.length > 0 && (
            <div className="relative">
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-2 top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-charcoal text-2xl leading-none shadow-md hover:bg-white"
                aria-label="Close image preview"
              >
                &times;
              </button>
              <button
                type="button"
                onClick={showPreviousImage}
                className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-charcoal shadow-md hover:bg-white"
                aria-label="Previous image"
              >
                &lt;
              </button>
              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-charcoal shadow-md hover:bg-white"
                aria-label="Next image"
              >
                &gt;
              </button>
              <img
                src={previewImages[selectedIndex]}
                alt={`AAROHAN gallery preview ${selectedIndex + 1}`}
                className="mx-auto max-h-[88vh] w-auto max-w-full rounded-xl object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default AarohanPage;
