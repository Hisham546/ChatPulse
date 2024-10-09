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

        backgroundColor: '#0f1829',
        width: deviceWidth,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center'
        // height:deviceHeight ,  



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
        height: deviceHeight * 0.10,
        width: deviceWidth * 0.80,
        justifyContent: 'center',
        alignItems: 'center',

    },

    textInputStyle: {
        height: deviceHeight * 0.056,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',

        width: deviceWidth * 0.80,
        backgroundColor: '#152033',

        color: colors.WHITE
        //textAlign:'justify'

    },

})

export default styles;