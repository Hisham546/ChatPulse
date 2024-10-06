import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhoneContainer from '../containers/authContainer/phoneContainer';
import OtpContainer from '../containers/authContainer/otpContainer';
import SetupProfileContainer from '../containers/profileContainer/profileSetupContainer';
import BottomTabs from './bottomTabs';
const Stack = createStackNavigator();

const AuthNavigation = () => {

    return (
       
            <Stack.Navigator>

                {/* <Stack.Screen
                    options={{ headerShown: false }}
                    name="Phone"
                    component={PhoneContainer} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="OtpScreen"
                    component={OtpContainer} /> */}
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="SetupProfile"
                    component={SetupProfileContainer} />
                    <Stack.Screen
                    options={{ headerShown: false }}
                    name="BottomTabs"
                    component={BottomTabs} />





            </Stack.Navigator>
       
    )

}
export default AuthNavigation;