
import React, { useEffect, useState } from 'react';
import Login from "../../screens/auth/login";
import { loginUser } from '../../services/api/apiFunction';
import useAuthStore from './zustandAuthStore';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
const LoginContainer = ({ ...props }) => {
    const { navigation } = props

    const [confirm, setConfirm] = useState(null);

    const queryClient = useQueryClient();

    const setUserLoggedIn = useAuthStore((state) => state.setUserLoggedIn);

    const setButtonLoading = useAuthStore((state) => state.setButtonLoading);
    const setUserProfile = useAuthStore((state) => state.setUserProfile);





    const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
           
            if (data && data.success) {

                setUserProfile(data)
                setButtonLoading(false)
                // Invalidate and refetch
                queryClient.invalidateQueries({ queryKey: ['login'] });

                setUserLoggedIn(true); // Set user as logged in
                navigation.navigate('BottomTabs');
            } else {
                console.log('Login failed:');

            }
        },
        onError: (error) => {
            console.error('Error creating profile:', error);
        },
    });




    async function login(data: any) {
        console.log(data)
        setButtonLoading(true)

        mutation.mutate(data);
    }
    return (

        <Login
            {...props}
            login={login}




        />
    )

}



export default (LoginContainer);