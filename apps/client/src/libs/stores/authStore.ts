import { create } from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";
import IUser from "../models/User.ts";

interface IAuthState {
    user: IUser | null;
}

interface IAuthAction {
    setUser: (user: IUser) => void;
}

export const useUserStore = create<IAuthState & IAuthAction>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set(() => ({ user })),
        }),
        {
            name: "user-storage",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);