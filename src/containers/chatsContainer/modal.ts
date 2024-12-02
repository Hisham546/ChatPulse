
import { Dimensions, Text, TouchableOpacity, TextInput, View, TextStyle, ViewStyle, KeyboardTypeOptions } from "react-native";


export interface ChatsScreenProps {
   navigation?: any,
   isLoading:boolean,
   latestMessage:object,
   data:object,
   userName:String
   
}

export interface privateScreenProps {
   navigation?: any,
   userActive:object,
   currentUserDetails:object,
   UserProfile:object
   
}
