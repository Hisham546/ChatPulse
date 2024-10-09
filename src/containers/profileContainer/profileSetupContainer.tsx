
import React, { useEffect, useState } from 'react';
import SetupProfile from '../../screens/Profile/profileSetup';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { createUsers } from '../../services/api/apiFunction';
import { bodyType } from '../../services/api/modal';
import useAuthStore from '../authContainer/zustandAuthStore';
const SetupProfileContainer = ({ ...props }) => {
    const { navigation } = props
    const queryClient = useQueryClient();

    const setUserLoggedIn = useAuthStore((state) => state.setUserLoggedIn);

    const setButtonLoading = useAuthStore((state) => state.setButtonLoading);

    // Define the mutation outside the createProfile function
    const mutation = useMutation({
        mutationFn: createUsers,
        onSuccess: (data) => {
            console.log(data,)
            if (data && data.success) {
                setButtonLoading(false)
                // Invalidate and refetch
                queryClient.invalidateQueries({ queryKey: ['createProfile'] });

                setUserLoggedIn(true); // Set user as logged in
                navigation.navigate('BottomTabs');
            } else {
                console.log('Profile creation failed:');

            }
        },
        onError: (error) => {
            console.error('Error creating profile:', error);
        },
    });

    const handleCreateProfile = (formData: bodyType) => {
        setButtonLoading(true)

        mutation.mutate(formData);
    };

    return (

        <SetupProfile
            {...props}
            handleCreateProfile={handleCreateProfile}



        />
    )

}



export default (SetupProfileContainer);