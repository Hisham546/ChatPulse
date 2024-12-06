import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import colors from "../../themes/colors";
import { Icon } from "../../utilities/Icons";
import useAuthStore from "../../containers/authContainer/zustandAuthStore";
import useChatsStore from "../../containers/chatsContainer/zustandChatsStore";
import ImagePickerStore from "../../services/camera/zustandCameraStore";
import { useCamera } from "../../services/camera";
export default function ProfileScreen() {

  const setUserLoggedIn = useAuthStore((state: any) => state.setUserLoggedIn);

  const UserProfile = useAuthStore((state: any) => state.userProfile);


  const userActive = useChatsStore((state: any) => state.userActive);

  const imageUrl = ImagePickerStore((state: any) => state.imageUrl);

  const { openPicker } = useCamera()


  const ProfileItems = [


    {
      name: 'Log Out',
      id: 1,
      icon: (

        <Icon

          iconFamily={'FontAwesome5'}
          size={15}

          name={'share'}
        />

      ),
    },
  ]





console.log(UserProfile,'................url')


  return (









    <View style={styles.containerStyle}>
      <View style={styles.headerView}>
        <Text style={styles.chatsMainText}>More</Text>
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
              setUserLoggedIn(false)


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
    </View>
  )

}