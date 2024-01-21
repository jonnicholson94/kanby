
import { create } from "zustand";

interface IUiState {
    isCreateTaskOpen: boolean 
    showCreateTask: () => void 
    hideCreateTask: () => void
}

export const useBearStore = create<IUiState>((set) => ({
    isCreateTaskOpen: false,
    showCreateTask: () => set(() => ({ isCreateTaskOpen: true })),
    hideCreateTask: () => set(() => ({ isCreateTaskOpen: false }))
}))

export default useBearStore