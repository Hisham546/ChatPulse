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
const { deviceHeight, deviceWidth } = deviceProps
const styles = StyleSheet.create({

    containerStyle: {
        flex: 1,
        backgroundColor: colors.WHITE,


    },
    topView: {
        width: deviceWidth,
        height: deviceHeight * 0.45,
   


    },
    centerView: {
        width: deviceWidth,
        alignItems:'center',

        flex: 1,

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
    inputWrapperStyle: {

    },
    textInputStyle: {
        height: deviceHeight * 0.056,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',

        width: deviceWidth * 0.80,
        backgroundColor: '#152033',
        borderRadius: 5,
        color: colors.WHITE
        //textAlign:'justify'

    },
    descriptionView:{
        width:deviceWidth,
        height:deviceHeight*0.30,
   
        justifyContent:'center',
        alignItems:'center'

    },
    descriptionTextStyle:{
        color:colors.WHITE,
        fontSize:fontSize.h6,
        fontFamily:fontFamily.P_MEDIUM
    },
    buttonTextStyle: {
        color: colors.LIGHT_GOLDEN_YELLOW,
        fontSize: fontSize.p,
        fontStyle: 'normal',
        fontFamily: fontFamily.P_MEDIUM

    },
    buttonStyle: {
       // marginTop: 15,
        backgroundColor: '#375FFF',
        height: deviceHeight * 0.067,
        borderRadius: 18,


        width: deviceWidth * 0.80

    },


})

export default styles;