import { create } from "zustand";

type SpinnerStore = {
  show: boolean;
  color: string;
  setShow: (show: boolean) => void;
  setColor: (color: string) => void;
};

export const useSpinnerStore = create<SpinnerStore>((set) => ({
  show: true,
  color: "#BAFA31",
  setShow: (show) => set({ show }),
  setColor: (color) => set({ color }),
}));
