import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";
import TextInputOutlined from "../../../../components/textBox/inputText";

import { Icon } from "../../../../utilities/Icons";

import { socketUrl } from "../../../../services/socket";
export default function SendMessage({ }) {







    const [message, setMessage] = useState('');




    const sendMessage = () => {
        console.log('call')
        socketUrl.emit('chatMessage', message);
        
    }



    return (

        <View style={styles.sendMessageParent}>
            <TextInputOutlined
                labelstyle={styles.labelstyle}
                parentContaineStyle={styles.parentContaineStyle}

                textInputStyle={styles.textInputStyle}
                maxLength={10}
                placeholderText={" Send message"}
                keyboardType='default'
                onChangeText={value => setMessage(value)}

                value={message}
            />
            <TouchableOpacity

                onPress={() => {
                    sendMessage()
                }}>
                <Icon

                    iconFamily={'FontAwesome'}
                    size={24}
                    style={{ color: '#375FFF' }}
                    name={'send'}
                />
            </TouchableOpacity>

        </View>
    )

}