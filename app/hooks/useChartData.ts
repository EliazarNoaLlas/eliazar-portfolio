"use client";

import { useState, useEffect } from "react";

export function useCpuData(length = 50) {
  const [data, setData] = useState<number[]>(() =>
    Array.from({ length }, () => 20 + Math.random() * 40)
  );
  useEffect(() => {
    const id = setInterval(() => {
      setData((d) => [...d.slice(1), 15 + Math.random() * 50]);
    }, 800);
    return () => clearInterval(id);
  }, []);
  return data;
}

export function useMemData(length = 50) {
  const [data, setData] = useState<number[]>(() =>
    Array.from({ length }, () => 30 + Math.random() * 30)
  );
  useEffect(() => {
    const id = setInterval(() => {
      setData((d) => [...d.slice(1), 28 + Math.random() * 35]);
    }, 1200);
    return () => clearInterval(id);
  }, []);
  return data;
}
