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
        backgroundColor:'#f0eff4',

//'#f0eff4',

    },
    headerView: {
        width: deviceWidth,
        height: deviceHeight * 0.09,
        backgroundColor:colors.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        elevation:1
        
  
        
    
       
    },
    goBackStyle:{
        width: deviceWidth *0.10,
        height: deviceHeight * 0.09,
       /// backgroundColor: 'red',
        justifyContent:'center',
        marginLeft:'3%'
    },
    nameView: {
        width: deviceWidth * 0.35,
        height: deviceHeight * 0.09,
        alignItems: "center",
        justifyContent: "center",
     //   backgroundColor: 'green',
       
      
      

    },
    centerView: {
        width: deviceWidth,
        backgroundColor:'#f0eff4',
        alignItems: 'center',

        height: deviceHeight * 0.80,

    },
    footerView: {
        width: deviceWidth,
        alignItems: 'center',
        height: deviceHeight * 0.05



    },
    messageStyle: {
        color: colors.BLACK,
        fontSize: fontSize.p,
        fontFamily: fontFamily.P_MEDIUM,
        marginLeft: '5%'
    },
    userName:{
        color: colors.BLACK,
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
        //backgroundColor: '#1c2b48',   
        marginTop: '3%',
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        flexDirection: 'row',
      
    },
    chatTextView: {
        width: deviceWidth * 0.38,
        minHeight: deviceHeight * 0.04,
        //   backgroundColor:'blue',
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
        color: colors.green_100,
        fontFamily: fontFamily.P_MEDIUM,
        fontSize: fontSize._10,

    },




})

export default styles;