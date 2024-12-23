
import Toast from 'react-native-toast-message';

const ToastMessage = (props) => {
    const { type, message } = props;
    //console.log('toast message.................', props)
    Toast.show({
        type: type,
        text1: message,
        position:'bottom',


    });

    return null; 
};

export default ToastMessage;