import {
    View,
    Image,
    Text, Button,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput
}
    from "react-native";
import { Dimensions, Platform, StatusBar } from 'react-native';

import deviceProps from "../../utilities/deviceProps";
import colors from "../../themes/colors";
import fontFamily from "../../themes/fontFamily";
import fontSize from "../../themes/fontSize";
const { deviceHeight, deviceWidth } = deviceProps
const styles = StyleSheet.create({

    containerStyle: {
       // flex: 1,
       backgroundColor: colors.black_light_100,


    },
    headerView: {
        width: deviceWidth,
        height: deviceHeight * 0.13,
        backgroundColor: colors.black_light_100,
        flexDirection: 'row',
        alignItems: 'center',
  
    },
    goBackStyle: {
        width: deviceWidth * 0.10,
        height: deviceHeight * 0.09,
        justifyContent: 'center',
        marginLeft: '3%'
    },
    nameView: {
        width: deviceWidth * 0.33,
        height: deviceHeight * 0.09,
        alignItems: "center",
        justifyContent: "center",
  

    },
    centerView: {
        width: deviceWidth,
        borderTopLeftRadius:22,
        borderTopRightRadius:22,
        alignItems: 'center',
        backgroundColor:colors.WHITE,
        height: deviceHeight * 0.76,

    },
    footerView: {
        width: deviceWidth,
        alignItems: 'center',
        height: deviceHeight * 0.05,
        backgroundColor:colors.WHITE,

    },
    messageStyle: {
        color: colors.BLACK,
        fontSize: fontSize.p,
        fontFamily: fontFamily.P_MEDIUM,
        marginLeft: '5%'
    },
    userName: {
        color: colors.WHITE,
        fontSize: fontSize.h6,
        fontFamily: fontFamily.P_MEDIUM,

    },

    loader: {

        justifyContent: 'center',
        alignItems: 'center',

    },
    flatlist: {
        flex: 1,
        width: deviceWidth * 0.95,


    },
    chatsBoxView: {
        width: deviceWidth * 0.50,
        minHeight: deviceHeight * 0.04,

        marginTop: '3%',
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        flexDirection: 'row',

    },
    chatTextView: {
        width: deviceWidth * 0.38,
        minHeight: deviceHeight * 0.04,
        justifyContent: 'center',
    },
    textTime: {
        color: colors.black_light_100,
        fontSize: fontSize._9,
        fontFamily: fontFamily.P_MEDIUM,
        marginLeft: '5%'
    },
    chatTimeView: {
        width: deviceWidth * 0.12,
        height: deviceHeight * 0.0350,

        //    backgroundColor:'red',
        justifyContent: 'flex-end'
    },
    onlineText: {
        color: colors.GREEN_LANTERN,
        fontFamily: fontFamily.P_BOLD,
        fontSize: fontSize._10,

    },
    chatDateView: {
        width: deviceWidth * 0.25,
        height: deviceHeight * 0.038,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray_100,
        borderRadius: 5,
    },
    chatsContainer: {
        // width: deviceWidth,
        // alignItems: 'center'
    },
    chatsDateStyle: {
        color: colors.WHITE,
        fontFamily: fontFamily.P_MEDIUM,
        fontSize: fontSize.tiny
    },
    profileLogo: {
        width: deviceWidth * 0.10,
        height: deviceHeight * 0.050,
        borderRadius: 12,
    },




})

export default styles;