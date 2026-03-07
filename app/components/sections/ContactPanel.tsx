"use client";

import { useState } from "react";
import { profile } from "../../data/profile";
import { ACCENT } from "../../lib/constants";

export default function ContactPanel() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="absolute bottom-28 right-8 z-10">
      <div
        className="p-4 rounded-2xl border backdrop-blur-md"
        style={{ background: "rgba(0,0,0,0.7)", borderColor: "#333" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-mono text-gray-400">STATUS: AVAILABLE</span>
        </div>
        <button
          onClick={copy}
          className="block w-full text-center font-bold py-3 px-6 rounded-xl transition-colors font-mono text-sm cursor-pointer"
          style={{ background: ACCENT, color: "#000" }}
        >
          {copied ? "COPIED ✓" : "INITIATE_CONTACT()"}
        </button>
      </div>
    </div>
  );
}
