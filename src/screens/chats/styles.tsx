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
const { deviceHeight, deviceWidth } = deviceProps
const styles = StyleSheet.create({

    containerStyle: {
        flex: 1,
        backgroundColor:'#0f1829',


    },
    topView:{
       width:deviceWidth,
       height:deviceHeight*0.25,
    
      
    },
    centerView:{
        width:deviceWidth,
        borderTopWidth:.50,
        borderTopColor:'#030201',
        flex:1,
   
    },
    

})

export default styles;