

import { bodyType } from "../../services/api/modal";


export interface PhoneProps {
   navigation?: any,
   login?: (data: String) => Promise<void>;
   onChangeText: Function,
   formData: object,
   buttonLoading: boolean
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
   onChangeText: (text: string, value: string) => void;
   formData: formDataType
}

interface formDataType {
   phone: string,
   password: string,
   name: string,
}