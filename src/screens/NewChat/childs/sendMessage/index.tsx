import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform, Keyboard, ScrollView } from "react-native";
import styles from "./styles";
import TextInputOutlined from "../../../../components/textBox/inputText";

import { Icon } from "../../../../utilities/Icons";
import useAuthStore from "../../../../containers/authContainer/zustandAuthStore";
import { socketUrl } from "../../../../services/socket";
import useChatsStore from "../../../../containers/chatsContainer/zustandChatsStore";
import ToastMessage from "../../../../components/toast";

export default function SendMessage({ currentUserDetails }) {



    const UserProfile = useAuthStore((state: any) => state.userProfile);

    const setUserTyping = useChatsStore((state: any) => state.setUserTyping)

    const [message, setMessage] = useState(null);

    useEffect(() => {



        socketUrl.on('userTypingUpdate', (userStatus) => {

            setUserTyping(userStatus);
        });
        socketUrl.emit('userTypingStop', { userId: UserProfile?.data?.userId });

        return () => {

            socketUrl.off('userTypingUpdate');
        };
    }, []);


    const sendMessage = () => {
        setMessage(null)
        Keyboard.dismiss()

        let payload = {
            message: message,
            sender: UserProfile?.data?.name,
            reciever: currentUserDetails.name,
            //  timeStamp: new Date().toLocaleString().replace(',', '')
            timeStamp:
                new Date().toLocaleString('en-US', {
                    hour12: true, 
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                }).replace(',', '')


        }
    
        socketUrl.emit('chatMessage', payload);
        if (!message) {
            socketUrl.emit('userTypingStop', { userId: UserProfile?.data?.userId });
        }


    }

    const onChangeText = (value) => {

        setMessage(value)
        if (!value) {
            socketUrl.emit('userTypingStop', { userId: UserProfile?.data?.userId });


        } else {
            socketUrl.emit('userTyping', { userId: UserProfile?.data?.userId });
        }




    }


    return (


        <View
            style={styles.sendMessageParent}>

            <TextInputOutlined
                labelstyle={styles.labelstyle}
                parentContaineStyle={styles.parentContaineStyle}

                textInputStyle={styles.textInputStyle}

                placeholderText={" Type Message"}
                keyboardType='default'
                onChangeText={value => onChangeText(value)}

                value={message}
                buttonOnPress={() => {
                    if (message) {
                        sendMessage()
                    } else {
                        ToastMessage({
                            message: 'No message to send',
                            type: 'error',

                        });
                    }
                }}
                enableButton={true}
            />



        </View>
    )

}