import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./styles";

import ChatsList from "./layouts/chatList";
import { getAllUsers,loadAllMessages } from "../../services/api/apiFunction";
import { useQuery } from '@tanstack/react-query';
import { ChatsScreenProps } from "../../containers/chatsContainer/modal";

const ChatsScreen: React.FC<ChatsScreenProps> = (props) => {
  const { navigation } = props

  const { data, error, isLoading } = useQuery({

    queryKey: ['allUsers'],
    queryFn: getAllUsers
  });




  const { data: latestMessage, error: messageError, isLoading: isMessageLoading } = useQuery({
    queryKey: ['userTexts'],
    queryFn: loadAllMessages,


  });








  return (

    <View style={styles.containerStyle}>

      <View style={styles.topView}>
        <View style={styles.headerView}>
          <Text style={styles.chatsMainText}>Chats</Text>
        </View>
      </View>

      <View style={styles.centerView}>
        <ChatsList
          navigation={navigation}
          loading={isLoading}
          userData={data}
        latestMessage={latestMessage}
          />
      </View>

      <View>

      </View>
    </View>
  )

}
export default ChatsScreen;