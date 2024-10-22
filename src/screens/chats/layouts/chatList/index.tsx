import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";

import { Icon } from "../../../../utilities/Icons";
import useAuthStore from "../../../../containers/authContainer/zustandAuthStore";



export default function ChatsList({ userData, loading, navigation, latestMessage }) {
    const UserProfile = useAuthStore((state) => state.userProfile);

    const [userLastText, setUserLastText] = useState([])





    //removing the current loginned user from the list
    const filteredUsers = userData?.data.filter(
        (users: { name: any }) => users?.name !== UserProfile?.data?.name
    );







    const getLatestMessage = (user) => {
        // Filter messages where the user is either the sender or receiver
        const userMessages = latestMessage?.data?.filter(
            (msg) => msg.sender === user.name || msg.reciever === user.name
        );

        //retrieves the last message
        const lastMessage = userMessages?.length > 0 ? userMessages[userMessages.length - 1] : null;

        return lastMessage;
    };




    return (

        <View style={styles.containerStyle}>
            {loading ? (
                <ActivityIndicator size="large" color="white" style={styles.loader} />
            ) : (
                <FlatList
                    data={filteredUsers ? filteredUsers : []}
                    //data={users}
                    style={styles.flatlist}
                    extraData={latestMessage}
                    renderItem={({ item, index }) => {
                        const latestMessage = getLatestMessage(item);
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('PrivateChatScreen', { currentUserDetails: item })}
                                style={styles.userBoxView}>
                                <Icon

                                    iconFamily={'Entypo'}
                                    size={24}
                                    style={{ color: 'white', marginLeft: '5%' }}
                                    name={'user'}
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
                                        <Text style={styles.lastMessage}>{latestMessage.timeStamp}</Text>
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
    )

}