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
import fontFamily from "../../themes/fontFamily";
import fontSize from "../../themes/fontSize";
import deviceProps from "../../utilities/deviceProps";
const { deviceHeight, deviceWidth } = deviceProps


const styles = StyleSheet.create({

    otpParentView: {
        width: deviceWidth * 0.85,
        height: deviceHeight * 0.08,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

       // backgroundColor: 'red'
    },
    input: {
        width: deviceWidth * 0.12,
        height: deviceHeight * 0.06,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#EFEFEF',
        borderRadius: 5,
        color: colors.WHITE

    },

})
export default styles