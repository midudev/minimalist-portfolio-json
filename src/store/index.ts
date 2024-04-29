import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { HeroSlice } from "./hero.slice";
import { createHeroState } from "./hero.slice";

type ProfileState = HeroSlice;

export const useProfileStore = create<ProfileState>()(
  devtools(
    persist(
      (...a) => ({
        ...createHeroState(...a),
      }),
      { name: "profile" }
    )
  )
);
