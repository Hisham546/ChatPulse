import { create } from 'zustand'

const userServiceStore = create((set) => ({



  deviceType: null,

  setDeviceTyoe: (state: any) => set({ deviceType: state }),



}),

);


export default userServiceStore;
