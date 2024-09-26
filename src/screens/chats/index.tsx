import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./styles";

import ChatsList from "./layouts/chatList";



export default function ChatsScreen() {
















  return (

    <View style={styles.containerStyle}>

      <View style={styles.topView}></View>

      <View style={styles.centerView}>
        <ChatsList />
      </View>

      <View>

      </View>
    </View>
  )

}