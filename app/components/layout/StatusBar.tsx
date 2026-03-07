"use client";

export default function StatusBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t px-4 py-1 flex justify-between items-center text-[10px] font-mono select-none"
      style={{ background: "#0a0a0a", borderColor: "#222" }}
    >
      <span className="text-green-400">STATUS: OPERATIONAL</span>
      <div className="flex gap-6 text-gray-600">
        <span>CPU: 12%</span>
        <span>MEM: 4GB</span>
        <span>NET: 1Gbps</span>
      </div>
    </div>
  );
}
