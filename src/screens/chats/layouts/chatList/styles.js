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
        backgroundColor: '#0f1829',
        width: deviceWidth,
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
        backgroundColor: 'yellow'
    },
    chatUserBoxes: {
        width: deviceWidth,
        height: deviceHeight * 0.06,
        justifyContent:'center',
        alignItems:'center'
        // backgroundColor: 'red'
    },
    flatlist: {
        flex: 1,
        width: deviceWidth,
        // backgroundColor: 'green',



    },
    userStyle: {
        color: colors.WHITE,
        fontSize: fontSize.h6,
        fontFamily:fontFamily.P_MEDIUM
    }



})

export default styles;