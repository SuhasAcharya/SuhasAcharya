import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface StoreState {
  login: boolean;
  setLoginTrue: () => void;
  setLoginFalse: () => void;
}

const useStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        login: false,
        setLoginTrue: () => set({ login: true }),
        setLoginFalse: () => set({ login: false }),
      }),
      {
        name: "store", 
      }
    )
  )
);

export default useStore;
