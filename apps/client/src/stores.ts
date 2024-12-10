import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import type {} from "@redux-devtools/extension";

interface UserState {
    empNo: string | null;
    setUser: (empNo: string | null) => void;
}

const useUserStore = create<UserState>()(
    devtools(
        persist(
            (set) => ({
                empNo: null,
                setUser: (empNo) => set(() => ({ empNo: empNo }))
            }),
            {
                name: 'user-storage',
            },
        )
    )
)

export {
    useUserStore
}