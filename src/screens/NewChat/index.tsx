import { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";
import styles from "./styles";
import { socketUrl } from "../../services/socket";
import useChatsStore from "../../containers/chatsContainer/zustandChatsStore";
import { useQuery } from '@tanstack/react-query';
import { Icon } from "../../utilities/Icons";
import SendMessage from "./childs/sendMessage";
import {MessageDetailsModal} from "../../components/modals";
import { loadAllMessages } from "../../services/api/apiFunction";
import { privateScreenProps } from "../../containers/chatsContainer/modal";
import deviceProps from "../../utilities/deviceProps";
const { deviceHeight, deviceWidth } = deviceProps


const NewChats: React.FC<privateScreenProps> = (props) => {


    const { currentUserDetails, UserProfile, navigation: { goBack }, isUserOnline, chats, isLoading } = props

    const [messageDate, setMessageDate] = useState(null)
    const [IsMessageDetailModal, setIsMessageDetailModal] = useState(false)
    const setTriggerLatestMessage = useChatsStore((state) => state.setTriggerLatestMessage);
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
                       setTriggerLatestMessage(true)
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
                            setMessageDate(item?.timeStamp.split(" ")[0])
                            return (
                                <View style={styles.chatsContainer}>



                                    <TouchableOpacity activeOpacity={0.5}
                                        onPress={() => {
                                            setIsMessageDetailModal(true)
                                        }}
                                        style={[styles.chatsBoxView,
                                        { marginLeft: item.sender === UserProfile?.data?.name ? "45%" : "0%" },
                                        { backgroundColor: item.sender === UserProfile?.data?.name ? '#d8ecc3' : '#eddadd' }

                                        ]}>

                                        <View style={styles.chatTextView}>
                                            <Text style={styles.messageStyle}>{item?.message}</Text>
                                        </View>
                                        <View style={styles.chatTimeView}>
                                            <Text style={styles.textTime}>{messageTime}</Text>

                                        </View>
                                    </TouchableOpacity>
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
            <MessageDetailsModal
                IsMessageDetailModal={IsMessageDetailModal}
                setIsMessageDetailModal={setIsMessageDetailModal}
                messageDate={messageDate}
            />
        </View>
    )

};

export default NewChats;