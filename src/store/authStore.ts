// store/authStore.ts
import { AuthResponse } from "@/types/auth/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: AuthResponse | null;
  token: string | null;
  onboardingCompleted?: boolean;
  setAuth: (
    user: AuthResponse,
    token: string,
    onboardingCompleted: boolean,
  ) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      onboardingCompleted: false,
      setAuth: (user, token, onboardingCompleted) =>
        set({ user, token, onboardingCompleted }),
      clearAuth: () =>
        set({ user: null, token: null, onboardingCompleted: false }),
    }),
    {
      name: "auth-storage", // localStorage key
    },
  ),
);
