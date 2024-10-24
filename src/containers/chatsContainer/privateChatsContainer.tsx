
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import PrivateChatScreen from '../../screens/privateChats';
import { updateUserOnline } from '../../services/api/apiFunction';
const PrivateChatsContainer = ({ ...props }) => {
    const { navigation, route } = props
    const { currentUserDetails } = route.params
    const [userOnlineTrue, setUserOnlineTrue] = useState(null)
    const queryClient = useQueryClient();
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





    useEffect(() => {
        console.log(currentUserDetails.userId, '.currentUserDetails.userId')
        mutation.mutate(currentUserDetails.userId);
    }, [currentUserDetails])

    return (

        <PrivateChatScreen
            navigation={{
                goBack: undefined
            }} {...props}
            currentUserDetails={currentUserDetails}
            userOnlineTrue={userOnlineTrue}




        />
    )

}



export default (PrivateChatsContainer);