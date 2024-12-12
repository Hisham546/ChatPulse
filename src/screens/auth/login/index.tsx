import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Image, ToastAndroid } from "react-native";
import styles from "./styles";

import TextInputOutlined from "../../../components/textBox/inputText";
import { IMAGES } from "../../../assets/images/assetsExport"
import ButtonComponent from "../../../components/button/button";
import { PhoneProps } from "../../../containers/authContainer/modal";
import useAuthStore from "../../../containers/authContainer/zustandAuthStore";

const Login: React.FC<PhoneProps> = (props) => {
    const { navigation, login, } = props

    const [formData, setFormData] = useState({

        name: '',
        password: ''




    });
    const buttonLoading = useAuthStore((state) => state.buttonLoading);
    const onChangeText = (state: string, value: string | number) => {





        setFormData(prevState => ({
            ...prevState,
            [state]: value,
        }));

    };











    return (

        <View style={styles.containerStyle}>
            <View style={styles.topView}>
                <View style={styles.descriptionView}>

                    <Text style={styles.getStarted}>Get Started</Text>
                    <Text style={styles.getStarted2}>Start with login or register</Text>
                    <Image
                    resizeMode={'contain'}
                    style={styles.welcomeLogo2}
                    source={IMAGES.welcomeImage2}
                />


                </View>

            </View>
            <View style={styles.centerView}>
                <TextInputOutlined
                    labelstyle={styles.labelstyle}
                    parentContaineStyle={styles.parentContaineStyle}

                    textInputStyle={styles.textInputStyle}


                    showLabel={true}
                  

                    placeholderText={" Enter your name"}
                    keyboardType='default'
                    onChangeText={value => onChangeText("name", value)}

                    value={formData.name}
                />
                <TextInputOutlined
                    labelstyle={styles.labelstyle}
                    parentContaineStyle={styles.parentContaineStyle}

                    textInputStyle={styles.textInputStyle}


                    showLabel={true}
                    maxLength={10}

                    placeholderText={" Enter your password"}
                    keyboardType='numeric'
                    onChangeText={value => onChangeText("password", value)}

                    value={formData.password}
                />

                <ButtonComponent
                    onPress={() => {
                        if (formData.password || formData.name) {
                            let data = {
                                password: formData.password,
                                name: formData.name

                            }

                            props.login?.(data)
                        }
                        else {
                            console.log('else')
                            ToastAndroid.showWithGravity(
                                'Please fill all fields',
                                ToastAndroid.SHORT,
                                ToastAndroid.CENTER,
                            );
                        }




                    }}
                    buttonText={"Login"}
                    loading={buttonLoading}

                    textStyle={styles.buttonTextStyle}
                    buttonStyle={styles.buttonStyle}
                />

                <View style={styles.registerNowView}>
                    <Text style={styles.dontHaveAc}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerNowText} >Register now</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )

}

export default Login