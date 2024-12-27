
import React, { useEffect, useState } from 'react';
import Login from "../../screens/auth/login";
import { loginUser } from '../../services/api/apiFunction';
import useAuthStore from './zustandAuthStore';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import ToastMessage from '../../components/toast';
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

            if (data.success) {

                setUserProfile(data)
                setButtonLoading(false)
                ToastMessage({
                    message: 'Login successfull',
                    type: 'success',

                });

                setUserLoggedIn(true);
                navigation.navigate('BottomTabs');
            } else {
                setButtonLoading(false)
                ToastMessage({
                    message: `${data}`,
                    type: 'error',

                });
            }
        },
        onError: (error) => {
            setButtonLoading(false)
            ToastMessage({
                message: `${error.message}`,
                type: 'error',

            });

        },
    });



    //message
    async function login(data: any) {

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