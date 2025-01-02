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
        backgroundColor: colors.black_light_100,


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

        height: deviceHeight,
        width: deviceWidth,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        backgroundColor: colors.WHITE
    },
    headerView: {
        width: deviceWidth * 0.90,
        height: deviceHeight * 0.08,
        justifyContent: 'center',
        marginLeft: '5%',
    },
    chatsMainText: {
        color: colors.BLACK,
        fontSize: fontSize.h5,
        fontFamily: fontFamily.P_MEDIUM,
        marginLeft: '5%'
    },
    userProfileView: {
        width: deviceWidth * 0.90,
        height: deviceHeight * 0.10,
        flexDirection: 'row',
        // borderBottomColor: '#BCCCDC',
        // borderBottomWidth: .30,
        marginLeft: '5%',


    },

    userNameView: {
        width: deviceWidth * 0.50,
        height: deviceHeight * 0.10,
        justifyContent: 'center',

    },
    profileName: {
        color: colors.WHITE,
        fontFamily: fontFamily.P_MEDIUM,
        fontSize: fontSize.h5
    },
    profilePhone: {
        color: colors.white_100,
        fontFamily: fontFamily.P_REGULAR,
        fontSize: fontSize.p
    },
    onlineText: {
        color: colors.green_100,
        fontFamily: fontFamily.P_MEDIUM,
        fontSize: fontSize.p,
        marginTop: '5%'
    },
    profileItemText: {
        marginLeft: '4%',
        color: colors.BLACK,
        fontFamily: fontFamily.P_MEDIUM,
        fontSize: fontSize._15
    },
    profileItemIcon: {
        color: colors.BLACK,
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
        marginTop: '2%',
        alignItems: 'center'
    },
    userIconView: {
        width: deviceWidth * 0.20,
        height: deviceHeight * 0.10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    profileLogo: {
        width: deviceWidth * 0.12,
        height: deviceHeight * 0.06,
        borderRadius: 70,



    },

})

export default styles;