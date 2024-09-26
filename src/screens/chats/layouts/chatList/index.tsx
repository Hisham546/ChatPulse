import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./styles";

import { users } from "../../../../utilities/dummyDatas/users";



export default function ChatsList() {















    return (

        <View style={styles.containerStyle}>
            <FlatList
                data={users}
                style={styles.flatlist}
                renderItem={({ item, index }) => (
                 
                        <View style={styles.chatUserBoxes}>

                            <Text style={styles.userStyle}>{item?.name}</Text>
                        </View>
          

                )}
                keyExtractor={item => item.id}
            />


        </View>
    )

}