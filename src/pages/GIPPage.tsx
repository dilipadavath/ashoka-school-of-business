import { useState } from "react";
import SectionFadeIn from "@/components/SectionFadeIn";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const gipImageModules = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getImagesFromFolder = (folderName: string) =>
  Object.entries(gipImageModules)
    .filter(([filePath]) => filePath.includes(`/assets/${folderName}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
    .map(([, src]) => src);

// Day sections with activities structure
const gipItinerary = [
  {
    dayTitle: "DAY 1 - Departure - Arrival at Sharjah - Dubai City Tour",
    activities: [
      {
        label: "DEPARTURE RGIA-HYD",
        folderPath: "Departure RGIA-HYD",
        images: getImagesFromFolder("Departure RGIA-HYD"),
      },
      {
        label: "ARRIVAL SHARJAH AIRPORT-BUS TO DUBAI",
        folderPath: "Sharjah Airport-Bus to Dubai",
        images: getImagesFromFolder("Sharjah Airport-Bus to Dubai"),
      },
      {
        label: "ORIENTATION",
        folderPath: "Orientation",
        images: getImagesFromFolder("Orientation"),
      },
      {
        label: "DUBAI CITY TOUR",
        folderPath: "Dubai City Tour",
        images: getImagesFromFolder("Dubai City Tour"),
      },
    ],
  },
  {
    dayTitle: "DAY 2 - Abu Dhabi Visit",
    activities: [
      {
        label: "AGRI ENTREPRENEURSHIP SESSION",
        folderPath: "Agri Entrepreneurship Session",
        images: getImagesFromFolder("Agri Entrepreneurship Session"),
      },
      {
        label: "HYDROPONICS FARM - GRACIA FARMS - VISIT",
        folderPath: "Hydroponics Farm - Gracia Farms - Visit",
        images: getImagesFromFolder("Hydroponics Farm - Gracia Farms - Visit"),
      },
      {
        label: "MASDAR SUSTAINABLE CITY VISIT",
        folderPath: "Masdar Sustainable City Visit",
        images: getImagesFromFolder("Masdar Sustainable City Visit"),
      },
      {
        label: "SIEMENS VISIT",
        folderPath: "Siemens Visit",
        images: getImagesFromFolder("Siemens Visit"),
      },
    ],
  },
  {
    dayTitle: "DAY 3 - DEWA - Sustainabiity Workshop",
    activities: [
      {
        label: "SUSTAINABILITY WORKSHOP BY MATTEO BOFFA PRESIDENT SWISS BUSINESS COUNCIL",
        folderPath: "Sustainability Workshop by Matteo Boffa President Swiss Business Council",
        images: getImagesFromFolder("Sustainability Workshop by Matteo Boffa President Swiss Business Council"),
      },
      {
        label: "DEWA SOLAR INNOVATION CENTRE VISIT - THE WORLD'S LARGEST SOLAR PARK",
        folderPath: "DEWA Solar Innovation Centre Visit - The world's largest solar park",
        images: getImagesFromFolder("DEWA Solar Innovation Centre Visit - The world's largest solar park"),
      },
    ],
  },
  {
    dayTitle: "DAY 4 - Apple Store - 3M Innvovation Centre",
    activities: [
      {
        label: "APPLE STORE VISIT - MALL OF EMIRATES",
        folderPath: "Apple Store Visit - Mall of Emirates",
        images: getImagesFromFolder("Apple Store Visit - Mall of Emirates"),
      },
      {
        label: "3M INNVOVATION CENTRE VISIT",
        folderPath: "3M Innvovation Centre Visit",
        images: getImagesFromFolder("3M Innvovation Centre Visit"),
      },
    ],
  },
  {
    dayTitle: "DAY 5 - Desert Safari",
    activities: [
      {
        label: "DESERT SAFARI",
        folderPath: "DAY 5 - Desert Safari",
        images: getImagesFromFolder("DAY 5 - Desert Safari"),
      },
    ],
  },
  {
    dayTitle: "DAY 6 - GIP Final Presentations & Return",
    activities: [
      {
        label: "STUDENT PRESENTATIONS",
        folderPath: "Student Presentations",
        images: getImagesFromFolder("Student Presentations"),
      },
      {
        label: "RETURN TO RGIA-HYD",
        folderPath: "Return to RGIA-HYD",
        images: getImagesFromFolder("Return to RGIA-HYD"),
      },
      {
        label: "GROUP PHOTOS",
        folderPath: "Group Photos",
        images: getImagesFromFolder("Group Photos"),
      },
    ],
  },
];

interface DayState {
  [dayIndex: number]: number; // dayIndex -> activeActivityIndex
}

const GIPPage = () => {
  const [activeActivities, setActiveActivities] = useState<DayState>({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleActivityChange = (dayIndex: number, activityIndex: number) => {
    setActiveActivities((prev) => ({
      ...prev,
      [dayIndex]: activityIndex,
    }));
  };

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
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.22),transparent_46%),radial-gradient(circle_at_80%_0%,rgba(2,132,199,0.24),transparent_38%),linear-gradient(145deg,#0f172a,#1e293b)] text-primary-foreground px-4 md:px-8 py-16 md:py-24">
        <div className="container-wide relative z-10 px-4">
          <SectionFadeIn>
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em]">
                Why ASB
              </p>
              <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight">Global Immersion Program</h1>
              <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-primary-foreground/90">
                Experience international exposure through immersive academic and cultural learning opportunities in Dubai.
                Explore business innovations, sustainability practices, and global industry leadership.
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
                  View Itinerary
                </a>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="section-padding bg-background">
        <div className="container-wide max-w-6xl">
          {gipItinerary.map((day, dayIndex) => (
            <SectionFadeIn key={dayIndex} delay={dayIndex * 0.05}>
              <div className="mb-16">
                {/* Day Header - Bold Red Bar */}
                <div className="bg-primary text-primary-foreground px-6 py-4 rounded-t-lg">
                  <h2 className="text-2xl md:text-3xl font-black tracking-wide text-center">{day.dayTitle}</h2>
                </div>

                {/* Activity Tabs */}
                <div className="bg-white border border-t-0 border-border px-6 py-6 rounded-b-lg">
                  <div className="flex flex-wrap gap-2 mb-10">
                    {day.activities.map((activity, activityIndex) => (
                      <button
                        key={activityIndex}
                        onClick={() => handleActivityChange(dayIndex, activityIndex)}
                        className={`px-5 py-3 text-sm font-black uppercase tracking-[0.15em] transition-all rounded-lg whitespace-nowrap ${
                          activeActivities[dayIndex] === activityIndex
                            ? "bg-primary text-primary-foreground shadow-[0_4px_12px_rgba(220,38,38,0.25)]"
                            : "bg-muted/40 text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                        }`}
                      >
                        {activity.label}
                      </button>
                    ))}
                  </div>

                  {/* Gallery Grid - Placeholder */}
                  <div className="grid md:grid-cols-3 gap-4">
                    {day.activities[activeActivities[dayIndex]].images.map((img, imgIndex) => (
                      <div
                        key={img}
                        className="aspect-video overflow-hidden rounded-lg"
                      >
                        <button
                          type="button"
                          onClick={() => openPreview(day.activities[activeActivities[dayIndex]].images, imgIndex)}
                          className="group block h-full w-full overflow-hidden rounded-lg"
                          aria-label={`Open GIP gallery image ${imgIndex + 1}`}
                        >
                          <img
                            src={img}
                            alt={`${day.activities[activeActivities[dayIndex]].label} - Image ${imgIndex + 1}`}
                            className="h-full w-full rounded-lg object-cover"
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionFadeIn>
          ))}
        </div>
      </section>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent showCloseButton={false} className="max-w-[min(94vw,1400px)] border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">GIP Gallery Image</DialogTitle>
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
                alt={`GIP gallery preview ${selectedIndex + 1}`}
                className="mx-auto max-h-[88vh] w-auto max-w-full rounded-xl object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <SectionFadeIn>
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready for Global Exposure?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              The Global Immersion Program is a core part of our PGDM curriculum, offering students hands-on international
              business experience and cultural immersion.
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Learn More & Apply
            </a>
          </SectionFadeIn>
        </div>
      </section>
    </main>
  );
};

export default GIPPage;
