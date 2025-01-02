import { ImageOrVideo } from "react-native-image-crop-picker";
import { callAPI, callFormData, methods } from ".";
import { apis } from "./endpoints";
import { bodyType } from "./modal";

export const createUsers = async (body: bodyType, imageUrl: String) => {

    try {

        const req = { url: apis.createUsers, body, method: methods.POST };
        const response = await callAPI(req);
        if ('data' in response) {
            return response.data
        }
        else {
            return response.error
        }
    } catch (error) {
        return error

    }


};

export const loginUser = async (body: bodyType) => {
    try {
        const req = { url: apis.login, body, method: methods.POST };

        const response = await callAPI(req)

        if (response.status) {
            return response?.data
        }
        else {
           
           return response.error
        }
    } catch (error) {

        return error
    }

}


export const getAllUsers = async () => {
    try {
        const req = { url: apis.getAllUsers, method: methods.GET };
        const response = await callAPI(req);
        if ('data' in response) {
            return response.data
        }
        else {
            return response.error
        }
    } catch (error) {
        return error
    }

};

export const loadAllMessages = async () => {

    try {
        const req = { url: apis.getUserTexts, method: methods.GET };
        const response = await callAPI(req);
        if ('data' in response) {
            return response.data
        }
        else {
            return response.error
        }
    } catch (error) {
        return error
    }

};

export const updateUserOnline = async (userId: string) => {

    try {
        const req = { url: `${apis.userOnline}${userId}`, method: methods.GET };

        const response = await callAPI(req);

        if ('data' in response) {
            return response.data
        }
        else {
            return response.error
        }
    } catch (error) {
        return error
    }

};

export const uploadImage = async (image: ImageOrVideo) => {


    try {
        const formData = new FormData();
        formData.append('file', {
            uri: image.path,
            name: image.filename || 'image.jpg',
            type: image.mime || 'image/jpeg',
        });

        const req = { url: apis.uploadImages, formData, method: methods.POST };


        const response = await callFormData(req);

        return response

    } catch (error) {
        //console.log(error, '.......error')

    }

}

export const deleteMessages = async (messageId) => {
    console.log(messageId, '....messageId')

    try {
        if (messageId) {
            const req = { url: `${apis.deleteMessages}${messageId}`, method: methods.GET };

            const response = await callAPI(req);
            console.log(response.data, '....response')
            if ('data' in response) {
                return response.data
            }
            else {
                return response.error
            }
        } else {
            return response.error
        }

    } catch (error) {
        return error
    }

};
