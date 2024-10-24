import { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";
import styles from "./styles";
import { socketUrl } from "../../services/socket";

import { useQuery } from '@tanstack/react-query';
import { Icon } from "../../utilities/Icons";
import SendMessage from "./childs/sendMessage";
import { useFocusEffect } from '@react-navigation/native';
import { loadAllMessages } from "../../services/api/apiFunction";
import useAuthStore from "../../containers/authContainer/zustandAuthStore";
export default function PrivateChatScreen(props: { route: any; navigation: { goBack: any; }; }) {


    const { route, navigation: { goBack }, } = props

    const [chats, setChats] = useState<any[]>([]);

    const { currentUserDetails } = route.params



    useFocusEffect(
        useCallback(() => {

          
            socketUrl.on('chatMessage', (message) => {
                setChats((previousChats) => [...previousChats, message])
                //  console.log('Message received:', message);
            });
        }, [])
    );


    const { data, error, isLoading } = useQuery({

        queryKey: ['userTexts'],
        queryFn: loadAllMessages,


    });

    useEffect(() => {
        if (data && data.data) {
            const filteredData = data.data.filter(
                (message: { reciever: any }) => message.reciever === currentUserDetails.name
            );
            setChats((prevChats) => [...filteredData, ...prevChats]); // Combine MongoDB data with live socket data
        }
    }, [data]);


    return (

        <View

            style={styles.containerStyle}>

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
                <Text style={styles.userStyle}>{currentUserDetails?.name}</Text>


            </View>

            <View style={styles.centerView}>

                {isLoading ? (
                    <ActivityIndicator size="large" color="white" style={styles.loader} />
                ) : (
                    <FlatList
                        data={chats}

                        style={styles.flatlist}
                        renderItem={({ item, index }) => (

                            <View style={styles.chatsBoxView}>
                                <View style={styles.chatTextView}>
                                    <Text style={styles.userStyle}>{item?.message}</Text>
                                </View>
                                <View style={styles.chatTimeView}>
                                    <Text style={styles.textTime}>{item?.timeStamp}</Text>

                                </View>
                            </View>
                        )

                        }
                        keyExtractor={item => item.id}
                    />
                )}

            </View>

            <View style={styles.footerView}>
                <SendMessage
                    currentUserDetails={currentUserDetails} />

            </View>
        </View>
    )

}