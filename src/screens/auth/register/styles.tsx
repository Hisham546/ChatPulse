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
        backgroundColor: colors.WHITE,


    },
    topView: {
        width: deviceWidth,
        height: deviceHeight * 0.65,
        // backgroundColor: 'red',
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
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',

        width: deviceWidth * 0.80,
        backgroundColor: '#f0eff4',

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
        marginTop: 15,
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
       // backgroundColor: '#1B2B48',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%'
    },



})

export default styles;