import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform, Keyboard, ScrollView } from "react-native";
import styles from "./styles";
import TextInputOutlined from "../../../../components/textBox/inputText";

import { Icon } from "../../../../utilities/Icons";
import useAuthStore from "../../../../containers/authContainer/zustandAuthStore";
import { socketUrl } from "../../../../services/socket";

export default function SendMessage({ currentUserDetails }) {



    const UserProfile = useAuthStore((state:any) => state.userProfile);



    const [message, setMessage] = useState('');




    const sendMessage = () => {
        setMessage('')
        Keyboard.dismiss()

        let payload = {
            message: message,
            sender: UserProfile?.data?.name,
            reciever: currentUserDetails.name,
            timeStamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        }

        socketUrl.emit('chatMessage', payload);

    }



    return (


        <View
            style={styles.sendMessageParent}>

            <TextInputOutlined
                labelstyle={styles.labelstyle}
                parentContaineStyle={styles.parentContaineStyle}

                textInputStyle={styles.textInputStyle}

                placeholderText={" Send message"}
                keyboardType='default'
                onChangeText={value => setMessage(value)}

                value={message}
            />
            <TouchableOpacity

                onPress={() => {
                    if (message) {
                        sendMessage()
                    } else {
                        console.log('no message')
                    }

                }}>
                <Icon

                    iconFamily={'FontAwesome'}
                    size={24}
                    style={{ color: '#375FFF' }}
                    name={'send'}
                />
            </TouchableOpacity>

        </View>
    )

}