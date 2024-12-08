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


const PrivateChatScreen: React.FC<privateScreenProps> = (props) => {


    const { currentUserDetails, UserProfile, navigation: { goBack },isUserOnline,chats,isLoading } = props

 








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
                        style={{ color: 'white', marginLeft: '7%' }}
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

                            <View style={[styles.chatsBoxView,
                            { marginLeft: item.sender === UserProfile?.data?.name ? "45%" : "0%" },
                            { backgroundColor: item.sender === UserProfile?.data?.name ? '#375fff' : '#1c2b48' }

                            ]}>
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

};

export default PrivateChatScreen;