import { basics } from "@cv";
import type { StateCreator } from "zustand";

export interface HeroState {
  basic: Basic;
  location: Location;
  profiles: Profile[];
}

export interface Basic {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
}

export interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Actions {
  setBasic: (prop: string, value: unknown) => void;
  setLocation: (prop: string, value: unknown) => void;
  addProfile: (profile: Profile) => void;
}

export type HeroSlice = HeroState & Actions;

export const createHeroState: StateCreator<HeroSlice> = (set) => ({
  basic: {
    name: basics.name,
    label: basics.label,
    image: basics.image,
    email: basics.email,
    phone: basics.phone,
    url: basics.url,
    summary: basics.url,
  },
  location: {
    address: basics.location.address,
    postalCode: basics.location.postalCode,
    city: basics.location.city,
    countryCode: basics.location.countryCode,
    region: basics.location.region,
  },
  profiles:
    basics.profiles.map((profile) => ({
      network: profile.network,
      username: profile.username,
      url: profile.url,
    })) || [],

  setBasic: (prop, value) =>
    set((state) => ({
      ...state,
      basic: { ...state.basic, [prop]: value },
    })),
  setLocation: (prop, value) =>
    set((state) => ({
      ...state,
      location: { ...state.location, [prop]: value },
    })),
  addProfile: (profile) =>
    set((state) => ({ profiles: [...state.profiles, profile] })),
});
