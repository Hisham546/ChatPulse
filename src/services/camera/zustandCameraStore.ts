import { create } from 'zustand'

const ImagePickerStore = create((set) => ({



  imageUrl: null,

  setImageUrl: (url: any) => set({ imageUrl: url }),


}),

);


export default ImagePickerStore;
