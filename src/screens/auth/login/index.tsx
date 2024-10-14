import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./styles";

import TextInputOutlined from "../../../components/textBox/inputText";

import ButtonComponent from "../../../components/button/button";
import { PhoneProps } from "../../../containers/authContainer/modal";

const Login: React.FC<PhoneProps> = (props) => {
    const { navigation, login } = props

    const [formData, setFormData] = useState({

        name: '',
        password: ''




    });

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

                    <Text style={styles.descriptionTextStyle}>Connect easily with your family and friends over countries</Text>
                </View>

            </View>
            <View style={styles.centerView}>
                <TextInputOutlined
                    labelstyle={styles.labelstyle}
                    parentContaineStyle={styles.parentContaineStyle}

                    textInputStyle={styles.textInputStyle}


                    showLabel={true}
                    maxLength={10}

                    placeholderText={" Enter your name"}
                    keyboardType='numeric'
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
                        let data = {
                            password: formData.password,
                            name: formData.name

                        }
                        props.login?.(data)



                    }}
                    buttonText={"Start Messaging"}

                    textStyle={styles.buttonTextStyle}
                    buttonStyle={styles.buttonStyle}
                />
            </View>

        </View>
    )

}

export default Login