"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const authStore = create(
  persist(
    (set, get) => ({
      isAuth: false,
      setAuth: (data) => set((state) => ({ isAuth: data })),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);