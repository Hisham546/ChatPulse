import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './bottomTabs';

import PrivateChatsContainer from '../containers/chatsContainer/privateChatsContainer';
const Stack = createStackNavigator();

const MainNavigation = () => {

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