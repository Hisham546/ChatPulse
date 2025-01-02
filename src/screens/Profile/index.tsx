import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Image, ImageBackground } from "react-native";
import styles from "./styles";
import colors from "../../themes/colors";
import { Icon } from "../../utilities/Icons";
import useAuthStore from "../../containers/authContainer/zustandAuthStore";
import useChatsStore from "../../containers/chatsContainer/zustandChatsStore";
import ImagePickerStore from "../../services/camera/zustandCameraStore";
import { useCamera } from "../../services/camera";
import { LogoutModal } from "../../components/modals";
import { IMAGES } from "../../assets/images/assetsExport";
//import {MessageDetailsModal} from "../../components/modals";
export default function ProfileScreen() {

  const setUserLoggedIn = useAuthStore((state: any) => state.setUserLoggedIn);

  const UserProfile = useAuthStore((state: any) => state.userProfile);


  const userActive = useChatsStore((state: any) => state.userActive);

  const imageUrl = ImagePickerStore((state: any) => state.imageUrl);

  const { openPicker } = useCamera()

  const [logoutModalVisible, setLogoutModalVisible] = useState(false)
  const ProfileItems = [


    {
      name: 'Log Out',
      id: 1,
      icon: (

        <Icon

          iconFamily={'MaterialCommunityIcons'}
          size={23}

          name={'logout'}
        />

      ),
    },
  ]








  return (









    <ImageBackground
      source={IMAGES.backgroundImage}
      resizeMode={'cover'}
      style={styles.containerStyle}>
      <View style={styles.headerView}>
        {/* <Text style={styles.chatsMainText}>Settings</Text> */}
      </View>
      <View style={styles.userProfileView}>
        <TouchableOpacity
          onPress={openPicker}

          style={styles.userIconView}>
          {UserProfile?.data.imageUrl ?

            <Image
              resizeMode={'cover'}
              style={styles.profileLogo}
              source={{
                uri: UserProfile?.data.imageUrl
              }}
            // onLoadStart={() => setLoading(true)}
            // onLoad={() => setLoading(false)}
            // onError={() => {
            //     setLoading(false);

            // }}

            /> : <Icon

              iconFamily={'Entypo'}
              size={24}
              style={{ color: 'white', }}
              name={'user'}
            />


          }


        </TouchableOpacity>
        <View style={styles.userNameView}>
          <Text style={styles.profileName}>{UserProfile?.data?.name}</Text>
          <Text style={styles.profilePhone}>{UserProfile?.data?.phone}</Text>

        </View>
        {userActive ?

          <Text style={styles.onlineText}>Online</Text>
          : null}
      </View>

      <View style={styles.profileItemParentView}>
        {ProfileItems.map((item, i) => (
          <TouchableOpacity style={styles.profileItem}
            onPress={() => {
              setLogoutModalVisible(true)


            }}>
            <View style={styles.iconStyles}>
              <Text style={styles.profileItemIcon}>{item.icon}</Text>
            </View>
            <Text style={styles.profileItemText}>{item.name}</Text>



          </TouchableOpacity>
        ))}
      </View>
      <View>

      </View>
      <LogoutModal
        logoutModalVisible={logoutModalVisible}
        setLogoutModalVisible={setLogoutModalVisible}
        onPressLogout={() => {
          setUserLoggedIn(false)
        }}
      />

    </ImageBackground>
  )

}