
import React, { useEffect, useState } from 'react';
import Phone from "../../screens/auth/phone";
import { supabase } from '../../services/supabase';
const PhoneContainer = ({ ...props }) => {
    const { navigation } = props

    const [confirm, setConfirm] = useState(null);

    async function signUp(phoneNumber: string, userPassword: string) {
           navigation.navigate('SetupProfile')

    }
    return (

        <Phone
            {...props}
            signUp={signUp}




        />
    )

}



export default (PhoneContainer);