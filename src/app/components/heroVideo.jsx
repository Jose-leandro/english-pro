import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [showAnim, setShowAnim] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowAnim(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-full relative">
      {!showAnim && (
        <img
          src="/frame_00_delay-0.1s-ezgif.com-optijpeg.jpg"
          alt="thumb"
          className="w-full h-full object-cover opacity-40 dark:opacity-45"
        />
      )}

      {showAnim && (
        <img
          src="/ezgif.com-video-to-webp-converter.webp"
          alt="animacao"
          className="w-full h-full object-cover opacity-40 dark:opacity-45"
        />
      )}
    </div>
  );
}
