import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';
const useAuthStore = create(
    persist(
      (set) => ({
        userLoggedIn: false,
        userProfile: null,
        setUserLoggedIn: (loggedIn: boolean) => set({ userLoggedIn: loggedIn }),
        setUserProfile: (profile: any) => set({ userProfile: profile }),
      }),
      {
        name: 'auth-storage', // Unique name for the storage
        storage:  createJSONStorage(() => AsyncStorage),
      }
    )
  );
  

export default useAuthStore;
