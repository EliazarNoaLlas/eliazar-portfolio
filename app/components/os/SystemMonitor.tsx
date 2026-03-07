"use client";

import WindowShell from "./WindowShell";
import MiniChart from "../effects/MiniChart";
import { useCpuData, useMemData } from "../../hooks/useChartData";
import { ACCENT, ACCENT_BLUE } from "../../lib/constants";
import type { Position } from "../../types";

interface SystemMonitorProps {
  initialPos: Position;
}

export default function SystemMonitor({ initialPos }: SystemMonitorProps) {
  const cpu = useCpuData();
  const mem = useMemData();
  const cpuVal = Math.round(cpu[cpu.length - 1]);
  const memVal = Math.round(mem[mem.length - 1]);

  return (
    <WindowShell title="system_monitor" initialPos={initialPos} style={{ width: 300, height: 320 }}>
      <div className="p-3 flex flex-col gap-3 bg-[#0a0a0a] h-full no-drag">
        {/* CPU */}
        <div>
          <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
            <span>CPU Load</span>
            <span style={{ color: ACCENT }}>{cpuVal}%</span>
          </div>
          <div className="h-20 bg-[#111] border border-[#222] rounded overflow-hidden">
            <MiniChart data={cpu} color={ACCENT} id="cpu" />
          </div>
        </div>
        {/* Memory */}
        <div>
          <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
            <span>Memory</span>
            <span style={{ color: ACCENT_BLUE }}>{memVal}% / 16GB</span>
          </div>
          <div className="h-20 bg-[#111] border border-[#222] rounded overflow-hidden">
            <MiniChart data={mem} color={ACCENT_BLUE} id="mem" />
          </div>
        </div>
        {/* Stats row */}
        <div className="flex justify-between border-t border-[#222] pt-2">
          <div>
            <div className="text-[10px] text-gray-500 uppercase font-mono">Network</div>
            <div className="text-xs text-white font-mono">1Gbps</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-gray-500 uppercase font-mono">Status</div>
            <div className="text-xs text-green-400 font-mono">ONLINE</div>
          </div>
        </div>
      </div>
    </WindowShell>
  );
}
