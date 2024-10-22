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
        backgroundColor:'#0f1829',
    },
    topView:{
       width:deviceWidth,
       height:deviceHeight*0.10,
       
    },
    headerView:{
        width:deviceWidth,
        height:deviceHeight*0.08,
        justifyContent:'center',    
       
    },
    centerView:{
        width:deviceWidth,
        borderTopWidth:.50,
        borderTopColor:'#030201',
        flex:1,  
    },
    chatsMainText: {
        color: colors.WHITE,
        fontSize: fontSize.h5,
        fontFamily:fontFamily.P_MEDIUM,
        marginLeft: '5%' 
    },
    

})

export default styles;