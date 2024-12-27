
import React, { useEffect, useState } from 'react';
import Phone from "../../screens/auth/login";
import ChatsScreen from '../../screens/chats';
import useAuthStore from '../authContainer/zustandAuthStore';
import useChatsStore from './zustandChatsStore';
import { updateUserOnline, getAllUsers, loadAllMessages } from '../../services/api/apiFunction';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

const ChatsScreenContainer = ({ ...props }) => {



    const queryClient = useQueryClient();
    const UserProfile = useAuthStore((state) => state.userProfile);
    const setUserOnline = useChatsStore((state) => state.setUserOnline);
    const userActive = useChatsStore((state: any) => state.userActive);

    const mutation = useMutation({

        mutationFn: updateUserOnline,
        onSuccess: (data) => {

            if (data && data.success) {

             //   setUserOnline(data?.isOnline?.userId)

                // Invalidate and refetch
                queryClient.invalidateQueries({ queryKey: ['activeOrNot'] });


            } else {

            }
        },
        onError: (error) => {

        },
    });
    const { data, error, isLoading } = useQuery({

        queryKey: ['allUsers'],
        queryFn: getAllUsers
    });




    const { data: latestMessage, error: messageError, isLoading: isMessageLoading } = useQuery({
        queryKey: ['userTexts'],
        queryFn: loadAllMessages,


    });





    useEffect(() => {
        mutation.mutate(UserProfile?.data?.userId);
    }, [UserProfile])

    return (

        <ChatsScreen
            {...props}
            latestMessage={latestMessage}
            isLoading={isLoading}
            data={data}
            userName={UserProfile?.data?.name}
            userActive={userActive}

        />
    )

}



export default (ChatsScreenContainer);