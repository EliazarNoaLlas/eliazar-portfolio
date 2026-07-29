"use client";

import { useState, useEffect } from "react";

const makeSeries = (length: number, base: number, spread: number) =>
  Array.from({ length }, (_, index) => {
    const wave = Math.sin(index * 0.7) * spread * 0.35;
    const pulse = ((index * 17) % 11) * (spread / 18);
    return base + wave + pulse;
  });

export function useCpuData(length = 50) {
  const [data, setData] = useState<number[]>(() => makeSeries(length, 32, 32));

  useEffect(() => {
    const id = setInterval(() => {
      setData((d) => [...d.slice(1), 15 + Math.random() * 50]);
    }, 800);

    return () => clearInterval(id);
  }, []);

  return data;
}

export function useMemData(length = 50) {
  const [data, setData] = useState<number[]>(() => makeSeries(length, 42, 24));

  useEffect(() => {
    const id = setInterval(() => {
      setData((d) => [...d.slice(1), 28 + Math.random() * 35]);
    }, 1200);

    return () => clearInterval(id);
  }, []);

  return data;
}
