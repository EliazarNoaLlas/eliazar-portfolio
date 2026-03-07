"use client";

import { useState, useRef, useCallback, useEffect, RefObject } from "react";
import type { Position } from "../types";

export function useDrag(ref: RefObject<HTMLDivElement | null>, initial: Position) {
  const [pos, setPos] = useState<Position>(initial);
  const dragging = useRef(false);
  const origin = useRef<Position>({ x: 0, y: 0 });

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".no-drag")) return;
      dragging.current = true;
      origin.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      e.preventDefault();
    },
    [pos]
  );

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!dragging.current) return;
      setPos({ x: e.clientX - origin.current.x, y: e.clientY - origin.current.y });
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return { pos, onMouseDown };
}
