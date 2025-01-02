import {
    View,
    Image,
    Text, Button,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput
}
    from "react-native";
import { Dimensions, Platform, StatusBar } from 'react-native';
import colors from "../../../themes/colors";
import deviceProps from "../../../utilities/deviceProps";
import fontFamily from "../../../themes/fontFamily";
import fontSize from "../../../themes/fontSize";
const { deviceHeight, deviceWidth } = deviceProps
const styles = StyleSheet.create({

    tabBarIconStyle: {
        marginTop: 1

    },
    containerStyle: {
        flex: 1,
         backgroundColor: colors.BLACK,


    },
    secondView: {
        width: deviceWidth,
        height: deviceHeight,
        //  backgroundColor: 'red',
        alignItems: 'center',




    },

    centerView: {
        width: deviceWidth,
        height: deviceHeight * 0.30,
        alignItems: 'center',
        //   backgroundColor: 'blue',



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
        height: deviceHeight * 0.12,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'blue'
    },
    textInputStyle: {
        height: deviceHeight * 0.056,
        borderRadius: 16,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',

        width: deviceWidth * 0.80,
        backgroundColor: '#f0eff4',
        fontFamily: fontFamily.P_REGULAR,
        color: colors.BLACK
        //textAlign:'justify'

    },
    buttonTextStyle: {
        color: colors.LIGHT_GOLDEN_YELLOW,
        fontSize: fontSize.p,
        fontStyle: 'normal',
        fontFamily: fontFamily.P_MEDIUM

    },
    buttonStyle: {
        marginTop: '13%',
        backgroundColor: '#375FFF',
        height: deviceHeight * 0.067,
        borderRadius: 18,


        width: deviceWidth * 0.80

    },
    profileLogo: {
        width: '100%',
        height: '100%',
        borderRadius: 70,
        overflow: 'hidden',
        backgroundColor: 'transparent',


    },
    iconCircleView: {
        width: deviceWidth * 0.25,
        height: deviceHeight * 0.13,
        borderRadius: deviceWidth * 0.25 / 2,
        backgroundColor: colors.white_100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%'
    },
    headerView: {
        width: deviceWidth ,
        height: deviceHeight * 0.08,
        justifyContent: 'center',
        alignItems: 'flex-start',
      

    },
    registerText: {
        color: colors.BLACK,
        fontSize: fontSize.h5,
        fontFamily: fontFamily.P_MEDIUM,
        marginLeft: '5%'

    },
    belowDetails: {
        color: colors.BLACK,
        fontSize: fontSize.p,
        fontFamily: fontFamily.P_REGULAR,
        marginLeft: '5%'
    },
    registerView: {
        width: deviceWidth * 0.80,
        height: deviceHeight * 0.08,
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor:'red'


    },
    profileLogoMainView: {
        width: deviceWidth,
        height: deviceHeight * 0.20,
        justifyContent: 'center',
        alignItems: 'center',
        //  backgroundColor:'blue'
    }



})

export default styles;