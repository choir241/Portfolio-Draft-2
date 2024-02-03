import { create } from "zustand";

export type State = {
  menu: boolean;
};

export type Action = {
  setMenu: (e: boolean) => void;
};

export const useStore = create<State & Action>((set) => ({
  menu: false,
  setMenu: (menu: boolean) => set(() => ({ menu: menu })),
}));
