
import React, { useEffect, useState } from 'react';
import Register from '../../screens/auth/register';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { createUsers } from '../../services/api/apiFunction';
import { bodyType } from '../../services/api/modal';
import useAuthStore from './zustandAuthStore';
import { zustandAuthState } from './modal';
import ImagePickerStore from '../../services/camera/zustandCameraStore';
import { ToastAndroid } from 'react-native';
import ToastMessage from '../../components/toast';
const RegisterContainer = ({ ...props }) => {

    const { navigation } = props
    const queryClient = useQueryClient();

    const setUserLoggedIn = useAuthStore((state: any) => state.setUserLoggedIn);

    const setButtonLoading = useAuthStore((state: any) => state.setButtonLoading);
    const setUserProfile = useAuthStore((state: any) => state.setUserProfile);

    const imageUrl = ImagePickerStore((state: any) => state.imageUrl);


    const buttonLoading = useAuthStore((state: any) => state.loading);
    const loadingImage = ImagePickerStore((state: any) => state.loadingImage);

    const setLoadingImage = ImagePickerStore((state: any) => state.setLoadingImage);






    const [formData, setFormData] = useState({
        phone: '',
        password: '',
        name: '',

    });

    const onChangeText = (state: string, value: string) => {





        setFormData(prevState => ({
            ...prevState,
            [state]: value,
        }));

    };


    // Define the mutation outside the createProfile function
    const mutation = useMutation({
        mutationFn: createUsers,
        onSuccess: (data) => {
            //   console.log(data,)
            if (data && data.success) {

                setUserProfile(data)
                setButtonLoading(false)
                ToastMessage({
                    message: 'Your account has been created successfully',
                    type: 'success',

                });

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

        if (imageUrl) {

            let payload = {
                phone: formData.phone,
                password: formData.password,
                name: formData.name,
                imageUrl: imageUrl
            }
            mutation.mutate(payload);
        } else {
            ToastAndroid.showWithGravity(
                'Please add a profile picture',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        }
    };

    return (

        <Register
            {...props}
            handleCreateProfile={handleCreateProfile}
            onChangeText={onChangeText}
            formData={formData}
            buttonLoading={buttonLoading}
            imageUrl={imageUrl}
            loadingImage={loadingImage}
            setLoadingImage={setLoadingImage}



        />
    )

}



export default (RegisterContainer);