
import React, { useEffect, useState } from 'react';
import Phone from "../../screens/auth/login";
import ChatsScreen from '../../screens/chats';
import useAuthStore from '../authContainer/zustandAuthStore';
import useChatsStore from './zustandChatsStore';
import { updateUserOnline } from '../../services/api/apiFunction';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
const ChatsScreenContainer = ({ ...props }) => {
    const { navigation } = props


    const queryClient = useQueryClient();
    const UserProfile = useAuthStore((state) => state.userProfile);
    const setUserOnline = useChatsStore((state) => state.setUserOnline);

    const mutation = useMutation({
     
        mutationFn: updateUserOnline,
        onSuccess: (data) => {
           
            if (data && data.success) {
         
                setUserOnline(data?.isOnline?.userId)
              
                // Invalidate and refetch
                queryClient.invalidateQueries({ queryKey: ['activeOrNot'] });

             
            } else {
                
            }
        },
        onError: (error) => {
          
        },
    });





    useEffect(() => {
        mutation.mutate(UserProfile?.data?.userId );
    }, [UserProfile])

    return (

        <ChatsScreen
            {...props}





        />
    )

}



export default (ChatsScreenContainer);