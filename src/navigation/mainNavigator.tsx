import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './bottomTabs';
import OtpScreen from '../screens/auth/phone';

const Stack = createStackNavigator();

const MainNavigation = () => {

    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="BottomTabs"
                    component={BottomTabs} />
               





            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default MainNavigation;