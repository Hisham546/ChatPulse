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
import useChatsStore from "../../containers/chatsContainer/zustandChatsStore";
export default function PrivateChatScreen(props: { userOnlineTrue: any, currentUserDetails: any; navigation: { goBack: any; }; }) {


    const { currentUserDetails, userOnlineTrue, navigation: { goBack }, } = props

    const [chats, setChats] = useState<any[]>([]);



    const UserProfile = useAuthStore((state) => state.userProfile);
    const userstatus = useChatsStore((state) => state.userstatus);
    const userActive = useChatsStore((state) => state.userActive);
    console.log(typeof(currentUserDetails.userId), '......current userId', userActive, '.............userstatus')

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
    const isUserOnline = userActive?.some((user) => user=== currentUserDetails.userId);

console.log(isUserOnline)
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
                <View style={styles.nameView}>
                    <Text style={styles.userStyle}>{currentUserDetails?.name}</Text>
                    {isUserOnline ? (

                        <Text style={styles.onlineText}>Online</Text>
                    ) : (
                        <Text style={styles.onlineText}>Offline</Text>
                    )}
                </View>
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