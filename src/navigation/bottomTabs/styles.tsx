
import { StyleSheet } from "react-native";
import deviceProps from "../../utilities/deviceProps";
import colors from "../../themes/colors";
import fontFamily from "../../themes/fontFamily";
import fontSize from "../../themes/fontSize";
const { deviceHeight, deviceWidth } = deviceProps
const styles = StyleSheet.create({

    tabBarIconStyle: {
        marginTop: 1

    },
    tabContainerStyle: {

         backgroundColor: '#0f1829',


        minHeight: 2,
    },
    tabBarLabelStyle: {
        fontFamily: fontFamily.P_REGULAR,
        fontSize: fontSize.small,
        
        color:colors.WHITE
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

})

export default styles;