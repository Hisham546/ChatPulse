import {
    View,
    Image,
    Text, Button,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput
}
    from "react-native";
import { Dimensions, Platform, StatusBar } from 'react-native';

import deviceProps from "../../../../utilities/deviceProps";
import colors from "../../../../themes/colors";
import fontSize from "../../../../themes/fontSize";
import fontFamily from "../../../../themes/fontFamily";
const { deviceHeight, deviceWidth } = deviceProps
const styles = StyleSheet.create({

    sendMessageParent: {

        backgroundColor: colors.WHITE,
        width: deviceWidth,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        height: deviceHeight * 0.11,

    },

    labelstyle: {
        fontFamily: fontFamily.P_MEDIUM,
        color: colors.DARK_SLATE_GRAY,
    },
    selectedTextStyle: {
        color: colors.DARK_SLATE_GRAY,
        fontSize: fontSize.p,
        marginLeft: 10,
        fontFamily: fontFamily.P_REGULAR
    },
    placeholderStyles: {
        color: colors.DARK_SLATE_GRAY,
        fontFamily: fontFamily.P_REGULAR,
        fontSize: fontSize._13
    },
    parentContaineStyle: {
        height: deviceHeight * 0.065,
        width: deviceWidth * 0.83,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: colors.WHITE,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth: .50,
        borderColor: 'gray'

    },

    textInputStyle: {
        height: deviceHeight * 0.056,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: deviceWidth * 0.60,
        color: colors.BLACK,
    },


})

export default styles;