import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator, Image } from "react-native";
import styles from "./styles";

import { Icon } from "../../../../utilities/Icons";
import useAuthStore from "../../../../containers/authContainer/zustandAuthStore";

import useChatsStore from "../../../../containers/chatsContainer/zustandChatsStore";

export default function ChatsList({ userData, loading, navigation, latestMessage }) {
    const UserProfile = useAuthStore((state) => state.userProfile);
    const triggerLatestMessage = useChatsStore((state) => state.triggerLatestMessage);

    const [messageDate, setMessageDate] = useState(null)



    //removing the current loginned user from the list
    const filteredUsers = userData?.data.filter(
        (users: { name: any }) => users?.name !== UserProfile?.data?.name
    );



    const getLatestMessage = (user) => {
        // Filter messages where the user is either the sender or receiver
        const userMessages = latestMessage?.data?.filter(
            (msg) => msg.sender === UserProfile?.data?.name && msg.reciever === user.name
        );

        //retrieves the last message
        const lastMessage = userMessages?.length > 0 ? userMessages[userMessages.length - 1] : null;

        return lastMessage;
    };


console.log(triggerLatestMessage)

    return (

        <View style={styles.containerStyle}>
            <View style={styles.recentChatsHeadingView}>
                <Text style={styles.chatsMainText}>Recent Chats</Text>
            </View>
            <View style={styles.chatsListParentView}>
                {loading ? (
                    <ActivityIndicator size="large" color="white" style={styles.loader} />
                ) : (
                    <FlatList
                        data={filteredUsers ? filteredUsers : []}
                        style={styles.flatlist}
                        extraData={triggerLatestMessage}
                        renderItem={({ item, index }) => {
                            const latestMessage = getLatestMessage(item);
                            let parts = latestMessage?.timeStamp?.split(" ")

                            const messageTimeStamp = parts[1].split(":").slice(0, 2).join(":") + " " + parts[2];

                            return (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('NewChats', { currentUserDetails: item })}
                                    style={styles.userBoxView}>
                                    <Image
                                        resizeMode={'cover'}
                                        style={styles.profileLogo}
                                        source={{
                                            uri: item?.imageUrl
                                        }}
                                    // onLoadStart={() => setLoading(true)}
                                    // onLoad={() => setLoading(false)}
                                    // onError={() => {
                                    //     setLoading(false);

                                    // }}

                                    />

                                    <View style={styles.userBoxChild}>
                                        <Text style={styles.userStyle}>{item?.name}</Text>


                                        {latestMessage ? (
                                            <Text style={styles.lastMessage}>{latestMessage.message}</Text>
                                        ) : (
                                            null
                                        )}



                                    </View>
                                    {latestMessage ? (
                                        <Text style={styles.timeStamp}>{messageTimeStamp}</Text>
                                    ) : (
                                        null
                                    )}



                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />

                )}
            </View>

        </View>
    )

}