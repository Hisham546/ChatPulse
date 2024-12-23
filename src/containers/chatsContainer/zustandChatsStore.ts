import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';
const useChatsStore = create((set) => ({
  //   persist(


  userstatus: null,
  userActive: [],
  triggerLatestMessage: false,
  setUserOnline: (state: any) => set({ userstatus: state }),
  setUserActive: (update: any) => set({ userActive: update }),
 setTriggerLatestMessage: (update: any) => set({ triggerLatestMessage: update }),


}),
  //     {
  //       name: 'chats-storage', // Unique name for the storage
  //       storage: createJSONStorage(() => AsyncStorage),
  //     }
  //   )
);


export default useChatsStore;
