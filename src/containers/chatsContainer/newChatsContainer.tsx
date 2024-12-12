
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import NewChats from '../../screens/NewChat';
import useAuthStore from '../authContainer/zustandAuthStore';
import useChatsStore from './zustandChatsStore';
import { useFocusEffect } from '@react-navigation/native';
import { socketUrl } from '../../services/socket';
import { updateUserOnline, loadAllMessages } from '../../services/api/apiFunction';

const NewChatsContainer = ({ ...props }) => {

    const { navigation, route } = props
    const { currentUserDetails } = route.params
    const [userOnlineTrue, setUserOnlineTrue] = useState(null)
    const queryClient = useQueryClient();

    const UserProfile = useAuthStore((state: any) => state.userProfile);
    const userstatus = useChatsStore((state: any) => state.userstatus);
    const userActive = useChatsStore((state: any) => state.userActive);
    const socketListenerAdded = useRef(false);
    const [chats, setChats] = useState<any[]>([]);
    const isUserOnline = userActive?.some((user: String) => user === currentUserDetails.userId);




    useEffect(() => {

        mutation.mutate(currentUserDetails.userId);
    }, [currentUserDetails])



    useFocusEffect(
        useCallback(() => {

            socketUrl.on('chatMessage', (message) => {
                setChats((previousChats) => [...previousChats, message])

            });

            // Cleanup listener on component unmount
            return () => {
                socketUrl.off('chatMessage');

            };
        }, [])
    );



    const { data, error, isLoading } = useQuery({

        queryKey: ['userTexts'],
        queryFn: loadAllMessages,


    });





    useEffect(() => {

        if (data && data.data) {

            const filteredData = data.data.filter(
                (message: { reciever: String, sender: String }) =>
                    (message.reciever === currentUserDetails.name && message.sender === UserProfile?.data?.name) ||
                    (message.sender === currentUserDetails.name && message.reciever === UserProfile?.data?.name)
            );

            setChats((prevChats) => [...filteredData, ...prevChats]); // Combine MongoDB data with live socket dataz
        }
    }, [data]);


    const mutation = useMutation({

        mutationFn: updateUserOnline,
        onSuccess: (data) => {

            if (data && data.success) {
                console.log(data)
                setUserOnlineTrue(data?.isOnline?.userId)

                // Invalidate and refetch
                queryClient.invalidateQueries({ queryKey: ['activeOrNot'] });


            } else {

            }
        },
        onError: (error) => {

        },
    });










    return (

        <NewChats
            navigation={{
                goBack: undefined
            }} {...props}
            currentUserDetails={currentUserDetails}
            userOnlineTrue={userOnlineTrue}
            UserProfile={UserProfile}
            userstatus={userstatus}
            userActive={userActive}
            isUserOnline={isUserOnline}
            chats={chats}
            isLoading={isLoading}




        />
    )

}



export default (NewChatsContainer);