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
        backgroundColor:colors.white_100,
    },
    topView:{
       width:deviceWidth,
       height:deviceHeight*0.14,
       
    },
    headerView:{
        width:deviceWidth *0.96,
        height:deviceHeight*0.10,
        justifyContent:'space-between', 
        alignItems:'center',
        flexDirection:'row',
        marginLeft:'2%',
       
      
       
    },
    centerView:{
        width:deviceWidth,

        flex:1,  
       
    },

    userName:{
        color: colors.BLACK,
        fontSize: fontSize.h6,
        fontFamily:fontFamily.P_MEDIUM,
        marginLeft: '5%'   
    },
    buddies:{
        color: colors.BLACK,
        fontSize: fontSize.h6,
        fontFamily:fontFamily.P_MEDIUM,
         
    }
    

})

export default styles;