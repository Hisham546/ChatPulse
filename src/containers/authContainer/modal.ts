
import { Dimensions, Text, TouchableOpacity, TextInput, View, TextStyle, ViewStyle, KeyboardTypeOptions } from "react-native";

import { bodyType } from "../../services/api/modal";
export interface PhoneProps {
   navigation?: any,
   login?: (data: String) => Promise<void>; // Update to take a phone number
}
export interface OtpProps {
   navigation?: any
}
export interface zustandAuthState {
   userLoggedIn: boolean;
   setUserLoggedIn: (loggedIn: boolean) => void;
 }
 
 export interface SetupProfileProps {
    navigation?: any,
    handleCreateProfile?: (formData: bodyType) => Promise<void>;
    onChangeText: (text: string,value:string) => void;
    formData: formDataType
 }
 
 interface formDataType {
    phone: string,
    password: string,
    name: string,
 }