"use client";

import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour12: false,
        })
      );
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <p className="text-base text-foreground">
      LONDON (UK) {time}
    </p>
  );
}
