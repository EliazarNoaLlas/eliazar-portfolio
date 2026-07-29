"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

// ============================================================
// TYPES
// ============================================================

export interface WindowConfig {
  id: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  z: number;
  minimized: boolean;
  maximized: boolean;
}

interface WindowStoreCtx {
  windows: WindowConfig[];
  bringToFront: (id: string) => void;
  updatePosition: (id: string, x: number, y: number) => void;
  toggleMinimize: (id: string) => void;
  toggleMaximize: (id: string) => void;
}

// ============================================================
// INITIAL STATE
// ============================================================

const INITIAL_WINDOWS: WindowConfig[] = [
  {
    id: "terminal",
    title: "terminal — zsh",
    x: 340,
    y: 80,
    width: 560,
    height: 380,
    z: 1,
    minimized: false,
    maximized: false,
  },
  {
    id: "task",
    title: "task_manager",
    x: 920,
    y: 60,
    width: 340,
    height: 260,
    z: 2,
    minimized: false,
    maximized: false,
  },
  {
    id: "monitor",
    title: "system_monitor",
    x: 920,
    y: 330,
    width: 300,
    height: 320,
    z: 3,
    minimized: false,
    maximized: false,
  },
];

// ============================================================
// CONTEXT
// ============================================================

const WindowStoreContext = createContext<WindowStoreCtx | null>(null);

// ============================================================
// PROVIDER
// ============================================================

export function WindowProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowConfig[]>(INITIAL_WINDOWS);

  const bringToFront = useCallback((id: string) => {
    setWindows((prev) => {
      const maxZ = Math.max(...prev.map((w) => w.z));
      return prev.map((w) => (w.id === id ? { ...w, z: maxZ + 1 } : w));
    });
  }, []);

  const updatePosition = useCallback((id: string, x: number, y: number) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, x, y } : w))
    );
  }, []);

  const toggleMinimize = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, minimized: !w.minimized, maximized: false } : w
      )
    );
  }, []);

  const toggleMaximize = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, maximized: !w.maximized, minimized: false } : w
      )
    );
  }, []);

  return (
    <WindowStoreContext.Provider
      value={{ windows, bringToFront, updatePosition, toggleMinimize, toggleMaximize }}
    >
      {children}
    </WindowStoreContext.Provider>
  );
}

// ============================================================
// HOOKS
// ============================================================

export function useWindowStore() {
  const ctx = useContext(WindowStoreContext);
  if (!ctx) throw new Error("useWindowStore must be used within WindowProvider");
  return ctx;
}

/** Convenience hook for a single window by id */
export function useWindow(id: string) {
  const { windows, bringToFront, updatePosition, toggleMinimize, toggleMaximize } =
    useWindowStore();
  const win = windows.find((w) => w.id === id)!;
  return {
    win,
    bringToFront: () => bringToFront(id),
    updatePosition: (x: number, y: number) => updatePosition(id, x, y),
    toggleMinimize: () => toggleMinimize(id),
    toggleMaximize: () => toggleMaximize(id),
  };
}
