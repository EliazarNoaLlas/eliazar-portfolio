"use client";

import { useTime } from "../../hooks/useTime";
import { profile } from "../../data/profile";
import { ACCENT } from "../../lib/constants";

export default function Topbar() {
  const time = useTime();
  const timeStr = time
    ? time.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" })
    : "--:--";

  return (
    <div
      className="fixed top-0 left-0 right-0 z-40 border-b px-4 py-2 flex justify-between items-center select-none text-xs font-mono"
      style={{
        background: "rgba(10,10,10,0.9)",
        borderColor: "#222",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 animate-pulse" style={{ background: ACCENT }} />
        <span className="font-bold tracking-widest" style={{ color: ACCENT }}>
          ARCH-OS v3.0
        </span>
      </div>
      <div className="text-gray-500 hidden md:block">
        UPTIME: {profile.uptime} | REGION: {profile.region} | USER:{" "}
        {profile.name.first}
      </div>
      <div className="text-gray-400">{timeStr}</div>
    </div>
  );
}
