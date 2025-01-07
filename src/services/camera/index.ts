import ImagePicker from 'react-native-image-crop-picker';
import { uploadImage } from '../api/apiFunction';
import ImagePickerStore from './zustandCameraStore';


export const useCamera = () => {
    const setImageUrl = ImagePickerStore((state: any) => state.setImageUrl);
   
    const openPicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        })
            .then(image => {
               
                uploadImage(image)
                    .then(res => {
                        if (res?.data) {
                          
                            setImageUrl(res.data); // Update Zustand store
                        } else {
                            //  console.error('Image upload failed or invalid response:', res);
                        }
                    })
                    .catch(error => {
                        // console.error('Error during image upload:', error);
                    });
            })
            .catch(error => {
                //console.error('Error during image selection:', error);
            });
    };

    return { openPicker };
}