import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./styles";
import { socketUrl } from "../../services/socket";

import { getAllUsers } from "../../services/api/apiFunction";
import { useQuery } from '@tanstack/react-query';
import { Icon } from "../../utilities/Icons";
import SendMessage from "./childs/sendMessage";
export default function PrivateChatScreen(props) {


    const { route, navigation: { goBack }, } = props

    const [messages, setMessages] = useState('')

    const { userDetails } = route.params



    useEffect(() => {
        // Listening for messages
        socketUrl.on('chatMessage', (message) => {
            setMessages(message)
            console.log('Message received:', message);
        });
    }, [])




    return (

        <View style={styles.containerStyle}>

            <View style={styles.headerView}>
                <TouchableOpacity
                    onPress={() => {
                        goBack()
                    }}>
                    <Icon

                        iconFamily={'Feather'}
                        size={24}
                        style={{ color: 'white', marginLeft: '4%' }}
                        name={'chevron-left'}
                    />
                </TouchableOpacity>
                <Text style={styles.userStyle}>{userDetails?.name}</Text>


            </View>

            <View style={styles.centerView}>
                <Text style={styles.userStyle}>{messages}</Text>

            </View>

            <View style={styles.footerView}>
                <SendMessage />

            </View>
        </View>
    )

}