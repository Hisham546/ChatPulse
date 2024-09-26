import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./styles";

import TextInputOutlined from "../../../components/textBox/inputText";

import ButtonComponent from "../../../components/button/button";
import { PhoneProps } from "../../../containers/authContainer/modal";

const Phone: React.FC<PhoneProps> = (props) => {
    const { navigation, signUp } = props

    const [formData, setFormData] = useState({

        phone: '',
        countryCode: '91',
        password: '123456'




    });

    const onChangeText = (state, value) => {





        setFormData(prevState => ({
            ...prevState,
            [state]: value,
        }));

    };











    return (

        <View style={styles.containerStyle}>
            <View style={styles.topView}>
                <View style={styles.descriptionView}>
                    <Text style={styles.descriptionTextStyle}>Enter Your Phone Number</Text>
                    <Text style={styles.descriptionTextStyle}>Please confirm your country code and enter your phone number</Text>
                </View>
                <TextInputOutlined
                    labelstyle={styles.labelstyle}
                    parentContaineStyle={styles.parentContaineStyle}
                    inputWrapperStyle={styles.inputWrapperStyle}
                    textInputStyle={styles.textInputStyle}

                    countryCode={true}
                    showLabel={true}
                    maxLength={10}

                    placeholderText={" Phone number"}
                    keyboardType='numeric'
                    onChangeText={value => onChangeText("phone", value)}
                    onChangeCountryCode={e => onChangeText('countryCode', parseInt(e, 10))}
                    value={formData.phone}
                />
            </View>
            <View style={styles.centerView}>

                <ButtonComponent
                    onPress={() => {
                        props.signUp?.('+' + formData.countryCode + formData.phone, formData.password)



                    }}
                    buttonText={"Continue"}

                    textStyle={styles.buttonTextStyle}
                    buttonStyle={styles.buttonStyle}
                />
            </View>

        </View>
    )

}

export default Phone