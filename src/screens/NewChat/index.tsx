import { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator, Image, Platform } from "react-native";
import styles from "./styles";
import { socketUrl } from "../../services/socket";
import useChatsStore from "../../containers/chatsContainer/zustandChatsStore";
import { useQuery } from '@tanstack/react-query';
import { Icon } from "../../utilities/Icons";
import SendMessage from "./childs/sendMessage";
import { MessageDetailsModal } from "../../components/modals";
import { loadAllMessages } from "../../services/api/apiFunction";
import { privateScreenProps } from "../../containers/chatsContainer/modal";
import deviceProps from "../../utilities/deviceProps";
const { deviceHeight, deviceWidth } = deviceProps


const NewChats: React.FC<privateScreenProps> = (props) => {


    const { currentUserDetails, UserProfile, navigation: { goBack }, isUserOnline, chats, isLoading,
        deleteMessage, openMessageDetailModal, setIsMessageDetailModal, IsMessageDetailModal } = props

    const [messageDate, setMessageDate] = useState(null)



    const userTyping = useChatsStore((state) => state.userTyping);


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
                <Image
                    resizeMode={'cover'}
                    style={styles.profileLogo}
                    source={{
                        uri: currentUserDetails?.imageUrl
                    }}
                // onLoadStart={() => setLoading(true)}
                // onLoad={() => setLoading(false)}
                // onError={() => {
                //     setLoading(false);

                // }}

                />
                <View style={styles.nameView}>
                    <Text style={styles.userName}>{currentUserDetails?.name}</Text>
                    {isUserOnline ? (

                        <Text style={styles.onlineText}>Online</Text>
                    ) : (
                        <Text style={styles.onlineText}>Offline</Text>
                    )}
                    {userTyping?.some((user: String) => user === currentUserDetails.userId) ? (

                        <Text style={styles.onlineText}>Typing...</Text>
                    ) : (
                        null
                    )}
                </View>
            </View>

            <View style={styles.centerView}>

                {isLoading ? (
                    <ActivityIndicator size="large" color="white" style={styles.loader} />
                ) : (
                    <FlatList
                        data={chats}
                        extraData={chats}
                        style={styles.flatlist}
                        renderItem={({ item, index }) => {
                            let parts = item?.timeStamp.split(" ")
                            const messageTime = parts[1].split(":").slice(0, 2).join(":") + " " + parts[2];
                            setMessageDate(item?.timeStamp.split(" ")[0])
                            return (
                                <View style={styles.chatsContainer}>



                                    <TouchableOpacity activeOpacity={0.5}
                                        onPress={() => {
                                            openMessageDetailModal(item?.textId)
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
                deleteMessage={deleteMessage}
            />
        </View>
    )

};

export default NewChats;