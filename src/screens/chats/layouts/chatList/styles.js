import {
    StyleSheet
}
    from "react-native";
import deviceProps from "../../../../utilities/deviceProps";
import colors from "../../../../themes/colors";
import fontSize from "../../../../themes/fontSize";
import fontFamily from "../../../../themes/fontFamily";
const { deviceHeight, deviceWidth } = deviceProps
const styles = StyleSheet.create({

    containerStyle: {
        flex: 1,
        backgroundColor: colors.white_100,
        width: deviceWidth,
        borderTopColor: '#BCCCDC',
        borderTopWidth: .30,

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
        width: deviceWidth,
    },
    chatsListParentView: {
        width: deviceWidth * 0.95,
        height: deviceHeight,
        marginLeft: '3%',

    },
    chatsMainText: {
        color: colors.BLACK,
        fontSize: fontSize.h6,
        fontFamily: fontFamily.P_MEDIUM,
        marginLeft: '3%'
    },
    recentChatsHeadingView: {
        width: deviceWidth,
        height: deviceHeight * 0.06,
        justifyContent: 'center'
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
        borderBottomColor: '#BCCCDC',
        borderBottomWidth: .30,



    },
    userStyle: {
        color: colors.BLACK,
        fontSize: fontSize.h6,
        fontFamily: fontFamily.P_MEDIUM,
        marginLeft: '3%'

    },
    lastMessage: {
        color: colors.BLACK,
        fontSize: fontSize._10,
        fontFamily: fontFamily.P_MEDIUM,
        marginLeft: '3%'
    },
    timeStamp: {
        color: colors.BLACK,
        fontSize: fontSize._10,
        fontFamily: fontFamily.P_REGULAR,

    },
    loader: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    profileLogo: {
        width: deviceWidth * 0.11,
        height: deviceHeight * 0.055,
        borderRadius: 12,
    },
    userIconView: {
        width: deviceWidth * 0.11,
        height: deviceHeight * 0.055,
        position: 'relative',
    },
    userActiveIcon: {
        position: 'absolute',
        top: -6,
        right: -1,

    },
    onlineText: {
        color: colors.GREEN_LANTERN,
        fontFamily: fontFamily.P_BOLD,
        fontSize: fontSize._10,
        marginLeft: '3%'
    },


})

export default styles;