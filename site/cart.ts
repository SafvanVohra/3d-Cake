"use client";

// Tiny order store: "Add" buttons add, the nav's Order pill listens and bumps.
type Listener = (count: number, added?: { name: string }) => void;
let count = 0;
const listeners = new Set<Listener>();

export const order = {
  add(name: string) {
    count += 1;
    listeners.forEach((l) => l(count, { name }));
  },
  subscribe(fn: Listener) {
    listeners.add(fn);
    fn(count);
    return () => {
      listeners.delete(fn);
    };
  },
};
