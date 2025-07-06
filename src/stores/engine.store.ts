import { create } from "zustand";

interface EngineState {
  library: string | null;
  name: string;

  setLibraryName: (data: string) => void;
  addLibrary: (data: string) => void;
  clearOutput: () => void;
}

const DEFAULT_LIBRARY_NAME = "Untitled";
export const useEngineStore = create<EngineState>((set) => ({
  library: null,
  name: DEFAULT_LIBRARY_NAME,

  setLibraryName: (data: string) => set({ name: data }),
  addLibrary: (data: string) => set({ library: data }),
  clearOutput: () => set({ library: null, name: DEFAULT_LIBRARY_NAME }),
}));
