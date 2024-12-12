import React, { useState } from "react";
import { Dimensions, Text, TouchableOpacity, ActivityIndicator, View, TextInput } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'
import fontSize from "../../themes/fontSize";
import styles from "./styles";
import colors from "../../themes/colors";
import { TextInputOutlinedProps } from "./modal";
import { CountryCodeUtility } from "../countryCode";

import { Icon } from "../../utilities/Icons";







const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const TextInputOutlined: React.FC<TextInputOutlinedProps> = (props) => {
    const {

        headingLabel,
        onChangeText,
        value,
        placeholderText,
        labelstyle,
        parentContaineStyle,
        keyboardType,
        secureTextEntry = false,
        showLabel = false,
        inputWrapperStyle,
        textInputStyle,
        editable = true,
        countryCode = false,
        isError = false,
        enableButton = false,
        buttonOnPress,
        maxLength,
        defaultCountryCode = '+91',
        onChangeCountryCode
    } = props
    const [secure, setSecure] = useState(secureTextEntry)

    // ,
    // borderTopLeftRadius,

    return (
        <View style={[styles.TextInputContainer, parentContaineStyle,]}>
            {showLabel ?
                <View style={styles.headingLabelView}>
                    <Text style={[styles.headingLabelStyle, labelstyle]}>{headingLabel}</Text>
                </View>
                : null}
            <View style={[styles.inputWrapper, inputWrapperStyle,
                // { borderTopLeftRadius: countryCode ? 1 : 0 },
                // { borderBottomLeftRadius: countryCode ? 1 : 0 },
            ]}>
                {countryCode &&

                    <CountryCodeUtility
                        defaultValue={defaultCountryCode}
                        onChangeCountryCode={onChangeCountryCode}
                    />

                }
                <TextInput
                    style={[styles.textInputStyle, textInputStyle, countryCode && styles.textInputWithCountryCode, isError && { borderColor: colors.red }]}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholderText}
                    placeholderTextColor={colors.BLACK}
                    keyboardType={keyboardType}
                    secureTextEntry={secure}
                    editable={editable}
                    maxLength={maxLength}
                    autoFocus={true}

                />
                {secureTextEntry && (
                    <TouchableOpacity
                        onPress={() => setSecure(p => !p)}
                        style={styles.eyeArea}>
                        <Entypo
                            name={secure ? 'eye-with-line' : 'eye'}
                            size={fontSize.h6}
                            color={colors.GRAY_10}
                        />
                    </TouchableOpacity>
                )}


            </View>
            {enableButton ?
                <TouchableOpacity
                         onPress={buttonOnPress}
                >
                    <Icon

                        iconFamily={'FontAwesome'}
                        size={20}
                        style={{ color: '#030201' }}
                        name={'send'}
                    />
                </TouchableOpacity>
                : null}
        </View >
    )

}
export default TextInputOutlined;