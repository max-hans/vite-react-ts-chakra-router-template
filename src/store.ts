import create from "zustand";
import { Counter } from "./types";

type MainState = {
  counter: Counter;
  setCounter: (data: Counter) => void;
};

const useStore = create<MainState>((set) => ({
  counter: 0,
  setCounter: (data) => set({ counter: data }),
}));

export default useStore;
