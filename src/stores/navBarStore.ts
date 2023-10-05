import { create } from "zustand";

type NavBarStore = {
  isNavBarOpen: boolean;
  toggleNavBar: (open?: boolean) => void;
  animate: boolean;
  setAnimate: (animate: boolean) => void;
  position: { x: number; y: number };
  setPosition: (x: number, y: number) => void;
};

export const useNavBarStore = create<NavBarStore>((set) => ({
  isNavBarOpen: true,
  toggleNavBar: (open) =>
    set((state) =>
      typeof open !== "undefined"
        ? { isNavBarOpen: open }
        : { isNavBarOpen: !state.isNavBarOpen }
    ),
  position: { x: 0, y: 0 },
  setPosition: (x: number, y: number) => set({ position: { x, y } }),
  animate: false,
  setAnimate: (animate: boolean) => set({ animate: animate }),
}));
