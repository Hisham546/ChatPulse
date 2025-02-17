import React from "react";
import { Dimensions, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import { ButtonProps } from "./modal";
import styles from "./styles";
import colors from "../../themes/colors";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const ButtonComponent: React.FC<ButtonProps> = props => {
    const {
        buttonText,
        textStyle,
        onPress,

        loaderSize,
        loaderColor,
        loading,
        buttonStyle
    } = props

    return (
        <TouchableOpacity activeOpacity={0.75}
            onPress={onPress}
            style={[styles.buttonContainer, buttonStyle]}>

            {loading === true ?
                <ActivityIndicator
                    size={loaderSize ? loaderSize : 'small'}
                    color={loaderColor ? loaderColor : colors.BLACK}
                />
                :
                <Text style={textStyle}>{buttonText}</Text>
            }
        </TouchableOpacity>


    )

}
export default ButtonComponent