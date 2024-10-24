
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './bottomTabs';
import { useCallback } from "react";
import useChatsStore from '../containers/chatsContainer/zustandChatsStore';
import PrivateChatsContainer from '../containers/chatsContainer/privateChatsContainer';
import useAuthStore from '../containers/authContainer/zustandAuthStore';
import { useFocusEffect } from '@react-navigation/native';
import { socketUrl } from "../services/socket";
const Stack = createStackNavigator();

const MainNavigation = () => {

    const UserProfile = useAuthStore((state) => state.userProfile);

    const setUserActive = useChatsStore((state) => state.setUserActive);

    // useFocusEffect(
    //     useCallback(() => {

    //         // Listening for messages
    //         // Notify the server that the user is connected
    //         console.log(UserProfile.data.userId,'..........userId')
    //         socketUrl.emit('userConnected', { userId: UserProfile?.data?.userId });
    //         // socketUrl.emit('userConnected', () => {
    //         //     UserProfile(true); // Update state to mark user as online
    //         // });
    //         socketUrl.emit('userConnected');
    //         setUserActive(true); 
    //         return () => {



    //             socketUrl.emit('userDisconnected');
    //             socketUrl.off('chatMessage');
    //         };

    //     }, [])
    // );

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
                name="PrivateChatScreen"
                component={PrivateChatsContainer} />






        </Stack.Navigator>

    )

}
export default MainNavigation;