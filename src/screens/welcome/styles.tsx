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
    topView: {
        width: deviceWidth,
        height: deviceHeight * 0.50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'flex-end'

    },
    centerView: {
        width: deviceWidth,
        alignItems: 'center',
        flex: 1,

    },


    descriptionView: {
        width: deviceWidth ,
        height: deviceHeight * 0.30,
        justifyContent: 'center',
        alignItems: 'center',
      

    },
    descriptionTextStyle: {
        color: colors.WHITE,
        fontSize: fontSize.h4,
        fontFamily: fontFamily.P_MEDIUM,
        alignItems: 'flex-start',
    },
    buttonTextStyle: {
        color: colors.LIGHT_GOLDEN_YELLOW,
        fontSize: fontSize.p,
        fontStyle: 'normal',
        fontFamily: fontFamily.P_MEDIUM
    },
    buttonStyle: {
        marginTop: "15%",
        backgroundColor: '#375FFF',
        height: deviceHeight * 0.067,
        borderRadius: 18,
        width: deviceWidth * 0.80
    },
    welcomeLogo: {
        width: deviceWidth * 0.33,
        height: deviceHeight * 0.30,
        
    },
    welcomeLogo2:{
        width: deviceWidth * 0.25,
        height: deviceHeight * 0.25, 
        marginBottom:'25%'
    }


})

export default styles;