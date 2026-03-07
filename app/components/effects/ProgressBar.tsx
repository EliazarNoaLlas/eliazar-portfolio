"use client";

import { useState, useEffect } from "react";
import { ACCENT } from "../../lib/constants";

export default function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWidth((v) => (v >= 100 ? 0 : v + 0.3));
    }, 50);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-50 transition-all"
      style={{
        width: `${width}%`,
        background: ACCENT,
        boxShadow: `0 0 10px ${ACCENT}`,
      }}
    />
  );
}
