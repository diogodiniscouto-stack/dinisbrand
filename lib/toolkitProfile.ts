"use client";

import { useCallback, useEffect, useState } from "react";

const KEY = "toolkit:name";

/** Stores the visitor's first name (localStorage) to personalise the kit. */
export function useToolkitName(): [string, (n: string) => void, boolean] {
  const [name, setNameState] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const v = window.localStorage.getItem(KEY);
      if (v) setNameState(v);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const setName = useCallback((n: string) => {
    setNameState(n);
    try {
      window.localStorage.setItem(KEY, n);
    } catch {
      /* ignore */
    }
  }, []);

  return [name, setName, hydrated];
}
