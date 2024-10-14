import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./styles";
import colors from "../../themes/colors";
import { Icon } from "../../utilities/Icons";
import useAuthStore from "../../containers/authContainer/zustandAuthStore";


export default function ProfileScreen() {

  const setUserLoggedIn = useAuthStore((state) => state.setUserLoggedIn);

  const UserProfile = useAuthStore((state) => state.userProfile);



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
      <View style={styles.userProfileView}>

        <Text style={styles.profileName}>{UserProfile?.data?.name}</Text>
        <Text style={styles.profilePhone}>{UserProfile?.data?.phone}</Text>
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