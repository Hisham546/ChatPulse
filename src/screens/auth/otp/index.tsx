import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Keyboard } from "react-native";
import styles from "./styles";

import TextInputOutlined from "../../../components/textBox/inputText";

import ButtonComponent from "../../../components/button/button";
import OtpInputBox from "../../../components/otpInput";
import { OtpProps } from "../../../containers/authContainer/modal";



const OtpScreen: React.FC<OtpProps> = (props) => {

    const {navigation}=props



    const [formData, setFormData] = useState({

        phone: '',




    });


    const onPressContinue = (val: number) => {
        Keyboard.dismiss()


    }


    const onChangeText = (state: any, value: any) => {





        setFormData(prevState => ({
            ...prevState,
            [state]: value,
        }));

    };











    return (

        <View style={styles.containerStyle}>
            <View style={styles.topView}>
                <View style={styles.descriptionView}>
                    <Text style={styles.descriptionTextStyle}>Enter Code</Text>
                    <Text style={styles.descriptionTextStyle}>We have sent you an SMS with the code to +62 1309 - 1710 - 1920</Text>
                </View>
                <OtpInputBox
                    onFinish={(value: number) => onPressContinue(value)}
                />
            </View>
            <View style={styles.centerView}>

                <ButtonComponent
                    onPress={() => {
                        navigation.navigate('SetupProfile')

                    }}
                    buttonText={"Continue"}

                    textStyle={styles.buttonTextStyle}
                    buttonStyle={styles.buttonStyle}
                />
            </View>

        </View>
    )

}
export default OtpScreen