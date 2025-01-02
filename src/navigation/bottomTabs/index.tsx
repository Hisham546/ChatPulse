




import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text, View, ToastAndroid, TouchableOpacity } from 'react-native';

import ChatsScreenContainer from '../../containers/chatsContainer/chatScreenContainer';
import ProfileScreen from '../../screens/Profile';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from '../../utilities/Icons';
const Tab = createBottomTabNavigator();

export default function BottomTabs({ }) {




  return (
    <Tab.Navigator initialRouteName="Home" backBehavior="initialRoute"
      screenOptions={{

        tabBarShowLabel: true,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: styles.tabBarIconStyle,
        tabBarStyle: {
          ...styles.tabContainerStyle,
          borderTopWidth: 0,  // This removes the top border line
          elevation: 4,       // Removes the shadow in Android
          shadowOpacity: 1,   // Removes shadow in iOS
        },
        tabBarLabelStyle: styles.tabBarLabelStyle
      }}>
      <Tab.Screen name="ChatsScreen" component={ChatsScreenContainer}

        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeLine} />}
             
              <Icon

                iconFamily={'Ionicons'}
                size={23}
                style={{ color: focused ? 'black' : 'black' }}
                name={focused ? 'chatbubbles-outline' : 'chatbubble-outline'}
              />

            </View>
          ),
          tabBarLabel: ({ focused }) => focused ? <Text style={styles.tabBarLabelStyle}>Chats</Text> : null,
        }} />







      <Tab.Screen name="ProfileScreen" component={ProfileScreen}

        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeLine} />}
              {/* <MaterialIcon name={focused ? "folder-outline" : "folder"} size={23} color={focused ? 'gray' : 'black'} /> */}
              <Icon

                iconFamily={'Ionicons'}
                size={23}
                style={{ color: focused ? 'black' : 'black' }}
                name={focused ? 'settings-outline' : 'settings-outline'}
              />

            </View>
          ),
          tabBarLabel: ({ focused }) => focused ? <Text style={styles.tabBarLabelStyle}>Settings</Text> : null,
        }} />

    </Tab.Navigator>
  );
}