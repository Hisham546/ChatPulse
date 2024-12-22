import { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";
import styles from "./styles";
import { socketUrl } from "../../services/socket";

import { useQuery } from '@tanstack/react-query';
import { Icon } from "../../utilities/Icons";
import SendMessage from "./childs/sendMessage";

import { loadAllMessages } from "../../services/api/apiFunction";
import { privateScreenProps } from "../../containers/chatsContainer/modal";
import deviceProps from "../../utilities/deviceProps";
const { deviceHeight, deviceWidth } = deviceProps


const NewChats: React.FC<privateScreenProps> = (props) => {


    const { currentUserDetails, UserProfile, navigation: { goBack }, isUserOnline, chats, isLoading } = props

    const [messageTimeStamp, setMessageTimeStamp] = useState('')

    // useEffect(() => {
    //     const dateObj = new Date(dateTimeString);
    //     setMessageTimeStamp(new Date().toLocaleString().replace(',', ''))
    // }, [])






    return (

        <View

            style={styles.containerStyle}>

            <View style={styles.headerView}>
                <TouchableOpacity
                    style={styles.goBackStyle}
                    onPress={() => {
                        goBack()
                    }}>
                    <Icon

                        iconFamily={'Feather'}
                        size={24}
                        style={{ color: 'black' }}
                        name={'chevron-left'}
                    />
                </TouchableOpacity>
                <View style={styles.nameView}>
                    <Text style={styles.userName}>{currentUserDetails?.name}</Text>
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
                        renderItem={({ item, index }) => {
                            let parts = item?.timeStamp.split(" ")
                            const messageTime = parts[1].split(":").slice(0, 2).join(":") + " " + parts[2];
                            return (
                                <View style={[styles.chatsBoxView,
                                { marginLeft: item.sender === UserProfile?.data?.name ? "45%" : "0%" },
                                { backgroundColor: item.sender === UserProfile?.data?.name ? '#d8ecc3' : '#eddadd' }

                                ]}>
                                    <View style={styles.chatTextView}>
                                        <Text style={styles.messageStyle}>{item?.message}</Text>
                                    </View>
                                    <View style={styles.chatTimeView}>
                                        <Text style={styles.textTime}>{messageTime}</Text>

                                    </View>
                                </View>
                            )
                        }

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

};

export default NewChats;