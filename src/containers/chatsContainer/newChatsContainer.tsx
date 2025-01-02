
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import NewChats from '../../screens/NewChat';
import useAuthStore from '../authContainer/zustandAuthStore';
import useChatsStore from './zustandChatsStore';
import { useFocusEffect } from '@react-navigation/native';
import { socketUrl } from '../../services/socket';
import { updateUserOnline, loadAllMessages, deleteMessages } from '../../services/api/apiFunction';
import ToastMessage from '../../components/toast';

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

    const [messageId, setMessageId] = useState(null)
    const [IsMessageDetailModal, setIsMessageDetailModal] = useState(false)

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




    useFocusEffect(

        useCallback(() => {

            if (data?.data) {


                const filteredData = data.data.filter(
                    (message: { reciever: String, sender: String }) =>
                        (message.reciever === currentUserDetails.name && message.sender === UserProfile?.data?.name) ||
                        (message.sender === currentUserDetails.name && message.reciever === UserProfile?.data?.name)
                );

                 setChats(filteredData);

                // setChats((prevChats) => {
                //     const existingIds = new Set(prevChats.map((chat) => chat.textId));
                //     const newChats = filteredData.filter((message: { textId: any; }) => !existingIds.has(message.textId));
                //     return [...prevChats, ...newChats];
                // }); // Combine MongoDB data with live socket sdata
            }

        }, [data])
    );


    const mutation = useMutation({

        mutationFn: updateUserOnline,
        onSuccess: (data) => {

            if (data && data.success) {

                setUserOnlineTrue(data?.isOnline?.userId)


            } else {

            }
        },
        onError: (error) => {

        },
    });

    const deleteAMessage = useMutation({

        mutationFn: deleteMessages,
        onSuccess: (data) => {

            if (data.success) {

                // Invalidate and refetch
                queryClient.invalidateQueries({ queryKey: ['userTexts'] });



            } else {
                ToastMessage({
                    message: `${data}`,
                    type: 'error',

                });

            }
        },
        onError: (error) => {

        },
    });




    function deleteMessage() {

        deleteAMessage.mutate(messageId);
        setIsMessageDetailModal(false)

    }


    function openMessageDetailModal(textId) {

        setMessageId(textId)
        setIsMessageDetailModal(true)
    }


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
            deleteMessage={deleteMessage}
            openMessageDetailModal={openMessageDetailModal}
            IsMessageDetailModal={IsMessageDetailModal}
            setIsMessageDetailModal={setIsMessageDetailModal}




        />
    )

}



export default (NewChatsContainer);



