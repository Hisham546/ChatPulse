
import { Dimensions, Text, TouchableOpacity, TextInput, View, TextStyle, ViewStyle, KeyboardTypeOptions } from "react-native";
import { bodyType } from "../../services/api/modal";


export interface SetupProfileProps {
   navigation?: any,
   handleCreateProfile?: (formData:bodyType) => Promise<void>;
}
