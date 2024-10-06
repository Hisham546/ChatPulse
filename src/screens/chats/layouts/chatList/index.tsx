import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";

import { users } from "../../../../utilities/dummyDatas/users";



export default function ChatsList({ userData, loading, navigation }) {















    return (

        <View style={styles.containerStyle}>
            {loading ? (
                <ActivityIndicator size="large" color="white" style={styles.loader} />
            ) : (
                <FlatList
                    data={userData.data ? userData.data : []}
                    //data={users}
                    style={styles.flatlist}
                    renderItem={({ item, index }) => (

                        <TouchableOpacity
                            onPress={() => navigation.navigate('PrivateChatScreen', { userDetails:item })}
                            style={styles.chatUserBoxes}>

                            <Text style={styles.userStyle}>{item?.firstName}</Text>
                        </TouchableOpacity>


                    )}
                    keyExtractor={item => item.id}
                />
            )}


        </View>
    )

}