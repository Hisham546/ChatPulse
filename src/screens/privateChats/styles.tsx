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
        flex: 1,
        backgroundColor: '#0f1829',


    },
    headerView: {
        width: deviceWidth,
        height: deviceHeight * 0.09,
        backgroundColor: '#0f1829',
        flexDirection: 'row',
        alignItems: 'center',




        //#0F!828
    },
    centerView: {
        width: deviceWidth,
        backgroundColor: '#152032',
        alignItems: 'center',

        height: deviceHeight * 0.80,

    },
    footerView: {
        width: deviceWidth,
        alignItems: 'center',
        height: deviceHeight * 0.05



    },
    userStyle: {
        color: colors.WHITE,
        fontSize: fontSize.p,
        fontFamily: fontFamily.P_MEDIUM,
        marginLeft: '5%'
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
        height: deviceHeight * 0.04,
        backgroundColor: '#1c2b48',
        marginTop: '3%',
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        flexDirection:'row',
        alignItems:'center'
    },
    chatTextView:{
        width: deviceWidth * 0.38,
        height: deviceHeight * 0.04,
     //   backgroundColor:'blue',
        justifyContent:'center',
    },
    textTime:{
        color: colors.WHITE,
        fontSize: fontSize._9,
        fontFamily: fontFamily.P_MEDIUM,
        marginLeft: '5%'
    },
    chatTimeView:{
        width: deviceWidth * 0.12,
        height: deviceHeight * 0.0350,
      
    //    backgroundColor:'red',
        justifyContent:'flex-end'
    },




})

export default styles;