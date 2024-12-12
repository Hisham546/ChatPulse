import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginContainer from '../containers/authContainer/loginContainer';
import OtpContainer from '../containers/authContainer/otpContainer';
import RegisterContainer from '../containers/authContainer/registerContainer';
import BottomTabs from './bottomTabs';
import Welcome from '../screens/welcome';
const Stack = createStackNavigator();

const AuthNavigation = () => {

    return (

        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Welcome"
                component={Welcome} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={LoginContainer} />
            {/*   <Stack.Screen
                    options={{ headerShown: false }}
                    name="OtpScreen"
                    component={OtpContainer} /> */}
            <Stack.Screen
                options={{ headerShown: false }}
                name="Register"
                component={RegisterContainer} />





        </Stack.Navigator>

    )

}
export default AuthNavigation;