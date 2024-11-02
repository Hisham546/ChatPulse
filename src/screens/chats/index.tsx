import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./styles";
import ChatsList from "./layouts/chatList";
import { ChatsScreenProps } from "../../containers/chatsContainer/modal";

const ChatsScreen: React.FC<ChatsScreenProps> = (props) => {
  
  const { navigation, latestMessage, isLoading, data } = props




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