import {create} from 'zustand'

export const useGitStore = create((set) => ({
    username: "github",
    setUsername: (name) => set({username: name})
}))