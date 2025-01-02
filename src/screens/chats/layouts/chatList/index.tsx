import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator, Image } from "react-native";
import styles from "./styles";

import { Icon } from "../../../../utilities/Icons";
import useAuthStore from "../../../../containers/authContainer/zustandAuthStore";

import useChatsStore from "../../../../containers/chatsContainer/zustandChatsStore";
import colors from "../../../../themes/colors";

export default function ChatsList({ userData, loading, navigation, latestMessage, userActive, userTyping }) {
    const UserProfile = useAuthStore((state) => state.userProfile);
    const triggerLatestMessage = useChatsStore((state) => state.triggerLatestMessage);

    const [messageDate, setMessageDate] = useState('')



    //removing the current loginned user from the list
    const filteredUsers = userData?.data.filter(
        (users: { name: any }) => users?.name !== UserProfile?.data?.name
    );



    const getLatestMessage = (user: any) => {
        // Filter messages where the user is either the sender or receiver
        const userMessages = latestMessage?.data?.filter(
            (msg: any) => msg.sender === UserProfile?.data?.name && msg.reciever === user.name
        );

        //retrieves the last message
        const lastMessage = userMessages?.length > 0 ? userMessages[userMessages.length - 1] : null;

        return lastMessage;
    };




    return (

        <View style={styles.containerStyle}>
            <View style={styles.recentChatsHeadingView}>
                <Text style={styles.chatsMainText}> Chats</Text>
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
                            const isUserOnline = userActive?.some((user: String) => user === item.userId);
                            let parts = latestMessage?.timeStamp?.split(" ")

                            if (parts) {
                                const messageTimeStamp = parts[1].split(":").slice(0, 2).join(":") + " " + parts[2];

                                setMessageDate(messageTimeStamp)
                            } else {
                                setMessageDate('')
                            }



                            return (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('NewChats', { currentUserDetails: item })}
                                    style={styles.userBoxView}>
                                    <View style={styles.userIconView}>

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


                                        <Icon

                                            iconFamily={'Octicons'}
                                            size={20}
                                            style={[styles.userActiveIcon, { color: isUserOnline ? colors.green_100 : colors.gray_light_100 }]}
                                            name={'dot-fill'}
                                        />


                                    </View>

                                    <View style={styles.userBoxChild}>
                                        <Text style={styles.userStyle}>{item?.name}</Text>




                                        {userTyping?.some((user: String) => user === item.userId) ? (

                                            <Text style={styles.onlineText}>Typing...</Text>
                                        ) : (
                                            latestMessage ? (
                                                <Text style={styles.lastMessage}>{latestMessage.message}</Text>
                                            ) :
                                                null
                                        )}



                                    </View>
                                    {latestMessage ? (
                                        <Text style={styles.timeStamp}>{messageDate}</Text>
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