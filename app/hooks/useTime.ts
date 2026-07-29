"use client";

import { useState, useEffect } from "react";

export function useTime() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setTime(new Date());
    const timeout = setTimeout(update, 0);
    const interval = setInterval(update, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return time;
}
