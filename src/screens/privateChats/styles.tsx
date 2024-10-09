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
        backgroundColor: '#152033',
        flexDirection: 'row',
        alignItems: 'center',




        //#0F!828
    },
    centerView: {
        width: deviceWidth,
        backgroundColor: '#1B2B48',

        height: deviceHeight * 0.80,

    },
    footerView: {
        width: deviceWidth,
        alignItems:'center',
        height:deviceHeight*0.05
     
      
       
    },
    userStyle: {
        color: colors.WHITE,
        fontSize: fontSize.p,
        fontFamily: fontFamily.P_MEDIUM,
        marginLeft: '5%'
    },
    


})

export default styles;