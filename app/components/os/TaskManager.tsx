"use client";

import WindowShell from "./WindowShell";
import { profile } from "../../data/profile";
import { ACCENT } from "../../lib/constants";
import type { Position } from "../../types";

interface TaskManagerProps {
  initialPos: Position;
}

export default function TaskManager({ initialPos }: TaskManagerProps) {
  return (
    <WindowShell title="task_manager" initialPos={initialPos} style={{ width: 340, height: 260 }}>
      <div className="bg-[#0a0a0a] flex-1 overflow-hidden font-mono text-xs no-drag">
        <div className="bg-[#141414] px-4 py-2 border-b border-[#222] text-gray-400 flex justify-between">
          <span>Running Processes</span>
          <span>Tasks: {profile.processes.length}</span>
        </div>
        <div className="p-2">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] text-[#555] uppercase">
                <th className="pb-2">PID</th>
                <th className="pb-2">Command</th>
                <th className="pb-2">%CPU</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {profile.processes.map((p) => (
                <tr
                  key={p.pid}
                  className="border-b border-[#1a1a1a] hover:bg-[#111] transition-colors"
                >
                  <td className="py-1" style={{ color: ACCENT }}>
                    {p.pid}
                  </td>
                  <td className="py-1 text-[#f0f0f0]">{p.cmd}</td>
                  <td className="py-1 text-gray-400">{p.cpu}</td>
                  <td className={`py-1 ${p.color}`}>{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </WindowShell>
  );
}
