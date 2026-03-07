"use client";

import { profile } from "../../data/profile";
import { ACCENT } from "../../lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  const month = String(new Date().getMonth() + 1).padStart(2, "0");

  return (
    <footer
      className="border-t px-8 py-6 flex justify-between items-center text-xs font-mono text-gray-600"
      style={{ borderColor: "#1a1a1a" }}
    >
      <span style={{ color: ACCENT }}>ARCH-OS v3.0</span>
      <span>
        © {year} — {profile.name.first} {profile.name.last} — ALL_RIGHTS_RESERVED
      </span>
      <span>
        BUILD: {year}.{month}
      </span>
    </footer>
  );
}
