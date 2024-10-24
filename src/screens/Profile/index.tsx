import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./styles";
import colors from "../../themes/colors";
import { Icon } from "../../utilities/Icons";
import useAuthStore from "../../containers/authContainer/zustandAuthStore";
import useChatsStore from "../../containers/chatsContainer/zustandChatsStore";

export default function ProfileScreen() {

  const setUserLoggedIn = useAuthStore((state) => state.setUserLoggedIn);

  const UserProfile = useAuthStore((state) => state.userProfile);

  const userstatus = useChatsStore((state) => state.userstatus);
  const userActive = useChatsStore((state) => state.userActive);
  console.log(userActive,'..........useractive')
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








  return (












    <View style={styles.containerStyle}>
      <View style={styles.headerView}>
        <Text style={styles.chatsMainText}>More</Text>
      </View>
      <View style={styles.userProfileView}>
        <View style={styles.userIconView}>
          <Icon

            iconFamily={'Entypo'}
            size={24}
            style={{ color: 'white', }}
            name={'user'}
          />
        </View>
        <View style={styles.userNameView}>
          <Text style={styles.profileName}>{UserProfile?.data?.name}</Text>
          <Text style={styles.profilePhone}>{UserProfile?.data?.phone}</Text>

        </View>
        {userActive?

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