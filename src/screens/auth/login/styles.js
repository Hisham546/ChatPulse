import {
    View,
    Image,
    Text, Button,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput
}
    from "react-native";
import { Dimensions, Platform, StatusBar } from 'react-native';
import deviceProps from "../../../utilities/deviceProps";
import colors from "../../../themes/colors";
import fontFamily from "../../../themes/fontFamily";
import fontSize from "../../../themes/fontSize";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const { deviceHeight, deviceWidth } = deviceProps
const styles = StyleSheet.create({

    containerStyle: {
        flex: 1,
        backgroundColor: colors.BLACK,
    },
    topView: {
        width: deviceWidth,
        height: deviceHeight * 0.40,
        alignItems:'center',
  
    },
    centerView: {
        width: deviceWidth,
        alignItems: 'center',
        flex: 1,
      
    },
    labelstyle: {
        fontFamily: fontFamily.P_MEDIUM,
        color: colors.DARK_SLATE_GRAY,
    },
    selectedTextStyle: {
        color: colors.DARK_SLATE_GRAY,
        fontSize:moderateScale(12),
        marginLeft: 10,
        fontFamily: fontFamily.P_REGULAR
    },
    placeholderStyles: {
        color: colors.DARK_SLATE_GRAY,
        fontFamily: fontFamily.P_REGULAR,
        fontSize: fontSize._13
    },
    parentContaineStyle: {
        height: deviceHeight * 0.12,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInputStyle: {
        height: deviceHeight * 0.056,
        borderRadius: 18,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: scale(327),
        backgroundColor: '#f0eff4',
        color: colors.BLACK
    },
    descriptionView: {
        width: deviceWidth,
        height: deviceHeight * 0.40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    getStarted: {
        color: colors.WHITE,
        fontSize: fontSize.h4,
        fontFamily: fontFamily.P_MEDIUM
    },
    getStarted2: {
        color: colors.WHITE,
        fontSize: fontSize.h6,
        fontFamily: fontFamily.P_MEDIUM
    },
    dontHaveAc: {
        color: colors.WHITE,
        fontSize:moderateScale(13),
        fontFamily: fontFamily.P_REGULAR
    },
    buttonTextStyle: {
        color: colors.WHITE,
        fontSize: fontSize.h6,
        fontFamily: fontFamily.P_MEDIUM
    },
    buttonStyle: {
        marginTop: "15%",
        backgroundColor: colors.blue_100,
        height: deviceHeight * 0.067,
        borderRadius: 25,
        width: scale(327),
    },

    registerNowText: {
        color: colors.blue_100,
               fontSize:moderateScale(12),
        fontFamily: fontFamily.P_MEDIUM,
        textDecorationLine: 'underline'
    },
    registerNowView: {
        width: deviceWidth * 0.77,
        height: deviceHeight * 0.07,
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: '2%',
        // backgroundColor:'red'
    },
    welcomeLogo2: {
        width: deviceWidth * 0.26,
        height: deviceHeight * 0.26,

    },



})

export default styles;