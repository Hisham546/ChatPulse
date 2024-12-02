import ImagePicker from 'react-native-image-crop-picker';
import { uploadImage } from '../api/apiFunction';

export const cameraComponent = () => {


    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
    }).then(image => {
        let data = {
            file: image?.filename
        }
        uploadImage(data)
    });
}