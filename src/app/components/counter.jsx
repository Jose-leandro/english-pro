"use client";

import { useEffect, useState } from "react";

export default function Counter({ value }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 segundos
    let startTime;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(
        Math.round((progress / duration) * value),
        value
      );
      setDisplay(current);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value]);

  return <span className="mt-1 text-xl font-bold"> + {display}</span>;
}
