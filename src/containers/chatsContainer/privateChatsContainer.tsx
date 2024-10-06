
import React, { useEffect, useState } from 'react';
import Phone from "../../screens/auth/phone";
import PrivateChatScreen from '../../screens/privateChats';
const PrivateChatsContainer = ({ ...props }) => {
    const { navigation } = props

    return (

        <PrivateChatScreen
            {...props}
          




        />
    )

}



export default (PrivateChatsContainer);