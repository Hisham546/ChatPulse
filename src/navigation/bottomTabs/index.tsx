




import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text, View, ToastAndroid, TouchableOpacity } from 'react-native';

import ChatsScreenContainer from '../../containers/chatsContainer/chatScreenContainer';
import ProfileScreen from '../../screens/Profile';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from '../../utilities/Icons';
import colors from '../../themes/colors';
import fontSize from '../../themes/fontSize';
import fontFamily from '../../themes/fontFamily';
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
                style={{
                   color: focused ?  colors.BLACK : colors.black_light_100,
                   
                  }}
                name={focused ? 'chatbubbles-sharp' : 'chatbubbles-outline'}
              />

            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? colors.BLACK : colors.black_light_100,
                fontSize: focused ? fontSize.p : fontSize.small,
                fontFamily: focused ? fontFamily.P_BOLD : fontFamily.P_MEDIUM,
              }}
            >
              Chats
            </Text>
          ),
        }} />







      <Tab.Screen name="ProfileScreen" component={ProfileScreen}

        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeLine} />}
          
              <Icon

                iconFamily={'Ionicons'}
                size={23}
                style={{ color: focused ?  colors.BLACK : colors.black_light_100, }}
                name={focused ? 'settings' : 'settings-outline'}
              />

            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? colors.BLACK : colors.black_light_100,
                fontSize: focused ? fontSize.p : fontSize.small,
                fontFamily: focused ? fontFamily.P_BOLD : fontFamily.P_MEDIUM,
              }}
            >
              Settings
            </Text>
          ),
        }} />

    </Tab.Navigator>
  );
}