import { useEffect, useRef } from "react";

const EE_WIDGET_URL =
  "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/asbcrm/ee-form-widget/form-1/widget.js";

const EeFormWidget = () => {
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current) return;
    injected.current = true;

    if (document.querySelector(`script[src="${EE_WIDGET_URL}"]`)) return;

    const script = document.createElement("script");
    script.src = EE_WIDGET_URL;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div className="ee-form-widget" id="ee-form-1" />;
};

export default EeFormWidget;
