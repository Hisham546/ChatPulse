
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './bottomTabs';
import { useCallback } from "react";
import useChatsStore from '../containers/chatsContainer/zustandChatsStore';
import NewChatsContainer from '../containers/chatsContainer/newChatsContainer';
import useAuthStore from '../containers/authContainer/zustandAuthStore';
import { useFocusEffect } from '@react-navigation/native';
import { socketUrl } from "../services/socket";
const Stack = createStackNavigator();

const MainNavigation = () => {

    const UserProfile = useAuthStore((state: any) => state.userProfile);

    const setUserActive = useChatsStore((state: any) => state.setUserActive);



    useFocusEffect(
        useCallback(() => {
            // Notify the server that the user is connected
            socketUrl.emit('userConnected', { userId: UserProfile?.data?.userId });

            // Listen for user status updates
            socketUrl.on('userStatusUpdate', (userStatus) => {
                //  console.log(userStatus,'.userStatus')
                // Update the online users' state
                setUserActive(userStatus);
            });

            return () => {
                // Notify the server that the user is disconnected
                socketUrl.emit('userDisconnected');
                socketUrl.off('userStatusUpdate');
            };
        }, [UserProfile])
    );
    return (


        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="BottomTabs"
                component={BottomTabs} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="NewChats"
                component={NewChatsContainer} />






        </Stack.Navigator>

    )

}
export default MainNavigation;