import { create } from 'zustand'

const ImagePickerStore = create((set) => ({


  loadingImage: false,
  imageUrl: null,


  setImageUrl: (url: any) => set({ imageUrl: url }),
  setLoadingImage: (loading: boolean) => set({ loadingImage: loading })


}),

);


export default ImagePickerStore;
