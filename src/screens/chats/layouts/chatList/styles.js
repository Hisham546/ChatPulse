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

    containerStyle: {
        flex: 1,
        backgroundColor: '#152032',
        width: deviceWidth,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // height:deviceHeight ,  



    },
    topView: {
        width: deviceWidth,
        height: deviceHeight * 0.25,
        backgroundColor: 'red'
    },

    chatParentView: {
        width: deviceWidth,
        height: deviceHeight * 0.10,

    },

    flatlist: {
        marginTop:'10%',

        width: deviceWidth,
      
        






    },
    chatsMainText: {
        color: colors.WHITE,
        fontSize: fontSize.h5,
        fontFamily: fontFamily.P_MEDIUM,
        marginLeft: '5%'
    },
    userBoxView: {
        width: deviceWidth,
        height: deviceHeight * 0.10,

        alignItems: 'center',
        flexDirection: 'row'
    },
    userBoxChild: {
        width: deviceWidth * 0.70,
        height: deviceHeight * 0.10,
        justifyContent: 'center',


    },
    userStyle: {
        color: colors.WHITE,
        fontSize: fontSize.h6,
        fontFamily: fontFamily.P_MEDIUM,
        marginLeft: '5%'
    },
    lastMessage: {
        color: colors.WHITE,
        fontSize: fontSize._10,
        fontFamily: fontFamily.P_MEDIUM,
        marginLeft: '5%'

    },
    loader: {


        justifyContent: 'center',
        alignItems: 'center',

    },



})

export default styles;