// hooks/useShowcaseEvents.ts
"use client";

import { useEffect, useState } from "react";
import { listFinishedEvents, listUpcomingEvents, type FinishedEvent, type UpcomingEvent } from "@/lib/api/events";

export type Status = "loading" | "ready" | "error";

function useList<T>(load: () => Promise<T[]>, deps: unknown[]) {
  const [state, setState] = useState<{ items: T[]; status: Status }>({ items: [], status: "loading" });
  useEffect(() => {
    let alive = true;
    load()
      .then((items) => alive && setState({ items, status: "ready" }))
      .catch(() => alive && setState({ items: [], status: "error" }));
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return state;
}

export const useUpcomingEvents = (limit = 6) => useList<UpcomingEvent>(() => listUpcomingEvents(limit), [limit]);
export const useFinishedEvents = (limit = 12) => useList<FinishedEvent>(() => listFinishedEvents(limit), [limit]);
