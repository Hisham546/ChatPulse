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
        backgroundColor:colors.black_light_100,
    },
    topView:{
       width:deviceWidth,
       height:deviceHeight*0.19,

       
    },
    headerView:{
        width:deviceWidth *0.96,
        height:deviceHeight*0.10,
        justifyContent:'flex-start', 
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
        color: colors.WHITE,
        fontSize: fontSize.h5,
        fontFamily:fontFamily.P_BOLD,
         
    },
    hello:{
        color: colors.white_100,
        fontSize: fontSize.p,
        fontFamily:fontFamily.P_REGULAR, 
        marginLeft:'2%'
    }
    

})

export default styles;