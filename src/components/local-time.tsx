"use client";

import { useSyncExternalStore } from "react";
import { Clock } from "lucide-react";

const subscribe = (onChange: () => void) => {
  const id = setInterval(onChange, 30_000);
  return () => clearInterval(id);
};

// Shows the time in your city, so visitors in other time zones know when you're around.
export function LocalTime({ timeZone, city }: { timeZone: string; city: string }) {
  const time = useSyncExternalStore(
    subscribe,
    () =>
      new Intl.DateTimeFormat("en-US", { timeZone, hour: "numeric", minute: "2-digit" }).format(
        new Date(),
      ),
    () => null,
  );

  return (
    <span className="flex items-center gap-1.5">
      <Clock className="size-3" />
      {time ? `${time} in ${city}` : city}
    </span>
  );
}
