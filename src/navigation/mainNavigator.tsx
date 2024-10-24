
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './bottomTabs';
import { useCallback } from "react";

import PrivateChatsContainer from '../containers/chatsContainer/privateChatsContainer';
import useAuthStore from '../containers/authContainer/zustandAuthStore';
import { useFocusEffect } from '@react-navigation/native';
import { socketUrl } from "../services/socket";
const Stack = createStackNavigator();

const MainNavigation = () => {

    const UserProfile = useAuthStore((state) => state.userProfile);



    useFocusEffect(
        useCallback(() => {

            // Listening for messages
            // Notify the server that the user is connected
            socketUrl.emit('userConnected', { userId: UserProfile?.data?.userId });
            return () => {



                socketUrl.emit('userDisconnected');
                socketUrl.off('chatMessage');
            };

        }, [])
    );
    return (


        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="BottomTabs"
                component={BottomTabs} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="PrivateChatScreen"
                component={PrivateChatsContainer} />






        </Stack.Navigator>

    )

}
export default MainNavigation;