import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./styles";


import { getAllUsers } from "../../services/api/apiFunction";
import { useQuery } from '@tanstack/react-query';
import { Icon } from "../../utilities/Icons";
export default function PrivateChatScreen(props) {


    const { route } = props



    const { userDetails } = route.params





console.log(userDetails,'..........firstname')


    return (

        <View style={styles.containerStyle}>

            <View style={styles.headerView}>
                <Icon

                    iconFamily={'Feather'}
                    size={24}
                    style={{ color: 'white', marginLeft: '3%' }}
                    name={'chevron-left'}
                />
                <Text style={styles.userStyle}>{userDetails?.firstName}</Text>
               

            </View>

            <View style={styles.centerView}>

            </View>

            <View>

            </View>
        </View>
    )

}