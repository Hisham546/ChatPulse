
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
    // Define the mutation outside the createProfile function
    const mutation = useMutation({
        mutationFn: createUsers,
        onSuccess: (data) => {
            console.log(data,)
            if (data && data.success) {
                // Invalidate and refetch
                queryClient.invalidateQueries({ queryKey: ['createProfile'] });

                setUserLoggedIn(true); // Set user as logged in
                navigation.navigate('BottomTabs'); // Navigate only if successful
            } else {
                console.error('Profile creation failed:');

            }
        },
        onError: (error) => {
            console.error('Error creating profile:', error);
        },
    });

    const handleCreateProfile = (formData: bodyType) => {
        console.log(formData)
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