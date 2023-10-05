import { ReactNode } from "react";
import { create } from "zustand";

interface VariantState {
  hoveredVariant: string;
  hoveredContent: ReactNode | JSX.Element;
  setVariant: (variant: string) => void;
  styling: string;
  setHoveredContent: (text: ReactNode | JSX.Element) => void;
  setStyling: (styling: string) => void;
}

export const useCurrentVariantStore = create<VariantState>((set) => ({
  hoveredVariant: "default",
  hoveredContent: "",
  styling: "",
  setVariant: (variant: string) => set({ hoveredVariant: variant }),
  setHoveredContent: (text: ReactNode | JSX.Element) =>
    set({ hoveredContent: text }),
  setStyling: (styling: string) => set({ styling: styling }),
}));
