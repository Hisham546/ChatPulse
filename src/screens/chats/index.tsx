import { View, Text } from "react-native";
import styles from "./styles";
import ChatsList from "./layouts/chatList";
import { ChatsScreenProps } from "../../containers/chatsContainer/modal";
import { Icon } from "../../utilities/Icons";

const ChatsScreen: React.FC<ChatsScreenProps> = (props) => {

  const { navigation, latestMessage, isLoading, data, userName } = props




  return (

    <View style={styles.containerStyle}>

      <View style={styles.topView}>
        <View style={styles.headerView}>
          {/* <Text style={styles.hello}>Hello</Text> */}
          <Text style={styles.buddies}>buddies</Text>
          <Icon

            iconFamily={'EvilIcons'}
            size={23}
            style={{ color: 'black' }}
            name={'search'}
          />
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