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
    headerView:{
       width:deviceWidth,
       height:deviceHeight*0.09,
       backgroundColor:'#152033',
       flexDirection:'row',
       alignItems:'center',
       
     //  justifyContent:'space-evenly',
      
    
      //#0F!828
    },
    centerView:{
        width:deviceWidth,
      backgroundColor:'#1B2B48',
        flex:1,
   
    },
    userStyle: {
        color: colors.WHITE,
        fontSize: fontSize.p,
        fontFamily:fontFamily.P_MEDIUM
    },
    

})

export default styles;