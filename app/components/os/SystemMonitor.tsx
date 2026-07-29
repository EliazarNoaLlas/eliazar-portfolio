"use client";

import WindowShell from "./WindowShell";
import MiniChart from "../effects/MiniChart";
import { useCpuData, useMemData } from "../../hooks/useChartData";
import { ACCENT, ACCENT_BLUE } from "../../lib/constants";

interface SystemMonitorProps {
  windowId?: string;
  variant?: "floating" | "docked";
}

export default function SystemMonitor({
  windowId = "monitor",
  variant = "floating",
}: SystemMonitorProps) {
  const cpu = useCpuData();
  const mem = useMemData();

  // Guard for empty initial state (before useEffect seeds data on client)
  const cpuVal = cpu.length ? Math.round(cpu[cpu.length - 1]) : 0;
  const memVal = mem.length ? Math.round(mem[mem.length - 1]) : 0;

  return (
    <WindowShell windowId={windowId} variant={variant}>
      <div className="p-3 flex flex-col gap-3 bg-[#0a0a0a] h-full no-drag">
        <div>
          <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
            <span>Carga CPU</span>
            <span style={{ color: ACCENT }}>{cpuVal}%</span>
          </div>
          <div className="h-20 bg-[#111] border border-[#222] rounded overflow-hidden">
            <MiniChart data={cpu} color={ACCENT} id="cpu" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
            <span>Memoria</span>
            <span style={{ color: ACCENT_BLUE }}>{memVal}% / 16GB</span>
          </div>
          <div className="h-20 bg-[#111] border border-[#222] rounded overflow-hidden">
            <MiniChart data={mem} color={ACCENT_BLUE} id="mem" />
          </div>
        </div>
        <div className="flex justify-between border-t border-[#222] pt-2">
          <div>
            <div className="text-[10px] text-gray-500 uppercase font-mono">Red</div>
            <div className="text-xs text-white font-mono">1Gbps</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-gray-500 uppercase font-mono">Estado</div>
            <div className="text-xs text-green-400 font-mono">ONLINE</div>
          </div>
        </div>
      </div>
    </WindowShell>
  );
}
