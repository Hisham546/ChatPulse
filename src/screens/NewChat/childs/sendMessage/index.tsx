import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform, Keyboard, ScrollView } from "react-native";
import styles from "./styles";
import TextInputOutlined from "../../../../components/textBox/inputText";

import { Icon } from "../../../../utilities/Icons";
import useAuthStore from "../../../../containers/authContainer/zustandAuthStore";
import { socketUrl } from "../../../../services/socket";
import useChatsStore from "../../../../containers/chatsContainer/zustandChatsStore";

export default function SendMessage({ currentUserDetails }) {



    const UserProfile = useAuthStore((state: any) => state.userProfile);

    const setUserTyping = useChatsStore((state: any) => state.setUserTyping)

    const [message, setMessage] = useState('');

    useEffect(() => {
        socketUrl.on('userTypingUpdate', (userStatus) => {
            console.log(userStatus, 'usertyping')

            setUserTyping(userStatus);
        });

        return () => {
            socketUrl.off('userTypingUpdate');
        };
    }, []);


    const sendMessage = () => {
        setMessage('')
        Keyboard.dismiss()

        let payload = {
            message: message,
            sender: UserProfile?.data?.name,
            reciever: currentUserDetails.name,
            timeStamp: new Date().toLocaleString().replace(',', '')
        }

        socketUrl.emit('chatMessage', payload);

    }

    const onChangeText = (value) => {

        setMessage(value)
        socketUrl.emit('userTyping', { userId: currentUserDetails?.userId });




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
                        console.log('no message')
                    }
                }}
                enableButton={true}
            />



        </View>
    )

}