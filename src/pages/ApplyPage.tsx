import SectionFadeIn from "@/components/SectionFadeIn";

const ApplyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <SectionFadeIn>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center">Apply Now</h1>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Take the first step towards your journey at Ashoka School of Business
            </p>
            <iframe
              src="/apply-form.html"
              title="Application Form"
              className="w-full border-0 rounded-lg shadow-lg bg-white"
              style={{ minHeight: "700px" }}
              onLoad={(e) => {
                try {
                  const iframe = e.currentTarget;
                  const body = iframe.contentDocument?.body;
                  if (body) {
                    const resize = () => {
                      iframe.style.height = body.scrollHeight + "px";
                    };
                    resize();
                    new ResizeObserver(resize).observe(body);
                  }
                } catch {
                  // cross-origin — fixed minHeight is used
                }
              }}
            />
            <p className="text-sm text-muted-foreground text-center mt-8">
              Fill out the form above to begin your application. Our admissions team will review your submission and contact you shortly.
            </p>
          </div>
        </div>
      </SectionFadeIn>
    </div>
  );
};

export default ApplyPage;
