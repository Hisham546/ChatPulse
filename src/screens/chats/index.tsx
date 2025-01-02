import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import ChatsList from "./layouts/chatList";
import { ChatsScreenProps } from "../../containers/chatsContainer/modal";
import { Icon } from "../../utilities/Icons";
import useChatsStore from "../../containers/chatsContainer/zustandChatsStore";
import { IMAGES } from "../../assets/images/assetsExport";

const ChatsScreen: React.FC<ChatsScreenProps> = (props) => {

  const { navigation, latestMessage, isLoading, data, userActive, userName } = props


  const userTyping = useChatsStore((state) => state.userTyping);

  return (

    <ImageBackground
      source={IMAGES.backgroundImage}
      resizeMode={'cover'}
      style={styles.containerStyle}>

      <View style={styles.topView}>
        <View style={styles.headerView}>
          <Text style={styles.hello}>Hello there, </Text>
          <Text style={styles.buddies}> {userName}</Text>
          {/* <Icon

            iconFamily={'EvilIcons'}
            size={23}
            style={{ color: 'black' }}
            name={'search'}
          /> */}
        </View>
      </View>

      <View style={styles.centerView}>

        <ChatsList
          navigation={navigation}
          loading={isLoading}
          userData={data}
          latestMessage={latestMessage}
          userActive={userActive}
          userTyping={userTyping}
        />
      </View>

      <View>

      </View>
    </ImageBackground>
  )

}
export default ChatsScreen;