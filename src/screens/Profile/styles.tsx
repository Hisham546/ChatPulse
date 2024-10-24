import {
    View,
    Image,
    Text, Button,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput
}
    from "react-native";
import { Dimensions, Platform, StatusBar } from 'react-native';
import colors from "../../themes/colors";
import deviceProps from "../../utilities/deviceProps";
import fontFamily from "../../themes/fontFamily";
import fontSize from "../../themes/fontSize";
const { deviceHeight, deviceWidth } = deviceProps
const styles = StyleSheet.create({

    tabBarIconStyle: {
        marginTop: 1

    },
    containerStyle: {
        flex: 1,
        backgroundColor: '#0f1829',


    },
    tabBarLabelStyle: {
        // fontFamily: fontFamily.P_REGULAR,
        // fontSize: fontSize.small,

        // color:colors.LIGHT_GOLDEN_YELLOW
    },
    iconContainer: {
        alignItems: 'center',
    },
    activeLine: {
        position: 'absolute',
        top: -5,
        width: '50%',
        height: 2,
        backgroundColor: '#626262',
    },
    dataView: {
        width: deviceWidth,
        height: deviceHeight * 0.50
    },
    folderName: {
        color: 'black'
    },
    icon: {

    },
    profileItemParentView: {
        marginTop: '4%',

        height: deviceHeight * 0.28,
        width: deviceWidth,
        //justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor:'blue'
    },
    headerView:{
        width:deviceWidth,
        height:deviceHeight*0.08,
        justifyContent:'center',    
    },
    chatsMainText: {
        color: colors.WHITE,
        fontSize: fontSize.h5,
        fontFamily:fontFamily.P_MEDIUM,
        marginLeft: '5%' 
    },
    userProfileView: {
        width: deviceWidth,
        height: deviceHeight * 0.10,
        flexDirection: 'row'

    },
    userIconView: {
        width: deviceWidth * 0.20,
        height: deviceHeight * 0.10,
        justifyContent:'center',
        alignItems:'center',
      
    },
    userNameView:{
        width: deviceWidth * 0.50,
        height: deviceHeight * 0.10,  
        justifyContent:'center',
       
    },
    profileName: {
        color: colors.WHITE,
        fontFamily: fontFamily.P_REGULAR,
        fontSize: fontSize.h5
    },
    profilePhone: {
        color: "#ADB5BD",
        fontFamily: fontFamily.P_REGULAR,
        fontSize: fontSize.p
    },
    onlineText:{
        color: "#ADB5BD",
        fontFamily: fontFamily.P_MEDIUM,
        fontSize: fontSize.p,
        marginTop:'5%'
    },
    profileItemText: {
        marginLeft: '4%',
        color: colors.WHITE,
        fontFamily: fontFamily.P_REGULAR,
        fontSize: fontSize._15
    },
    profileItemIcon: {
        color: colors.WHITE,
    },
    iconStyles: {
        width: 32,
        height: 32,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: colors.DARK_SLATE_GREEN

    },
    profileItem: {
        //  backgroundColor: 'red',
        width: deviceWidth * 0.80,
        height: deviceHeight * 0.07,
        flexDirection: 'row',
        marginLeft: '8%',
        alignItems: 'center'
    },


})

export default styles;