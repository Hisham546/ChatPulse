
import { Dimensions, Text, TouchableOpacity, TextInput, View, TextStyle, ViewStyle, KeyboardTypeOptions } from "react-native";


export interface PhoneProps {
   navigation?: any,
   signUp?: (phone: string, password: string) => Promise<void>; // Update to take a phone number
}
export interface OtpProps {
   navigation?: any
}