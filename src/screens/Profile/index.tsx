import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./styles";
import colors from "../../themes/colors";
import { Icon } from "../../utilities/Icons";
import useAuthStore from "../../containers/authContainer/zustandAuthStore";


export default function ProfileScreen() {

  const setUserLoggedIn = useAuthStore((state) => state.setUserLoggedIn);



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