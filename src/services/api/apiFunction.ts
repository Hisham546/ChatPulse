import { callAPI, callFormData, methods } from ".";
import { apis } from "./endpoints";
import { bodyType } from "./modal";

export const createUsers = async (body: bodyType) => {

    try {

        const req = { url: apis.createUsers, body, method: methods.POST };
        const response = await callAPI(req);
        if ('data' in response) {
            return response.data
        }
        else {
            console.log('error')
        }
    } catch (error) {
        return error

    }


};

export const loginUser = async (body: bodyType) => {
    try {
        const req = { url: apis.login, body, method: methods.POST };
        const response = await callAPI(req)

        if ('data' in response) {
            return response.data
        }
        else {
            console.log('error')
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
            console.log('error')
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
            console.log('error')
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
            console.log('error')
        }
    } catch (error) {
        return error
    }

};

export const uploadImage = async (body) => {


    try {
        const req = { url: apis.uploadImages, body, method: methods.POST };
        console.log(req)

        const response = await callFormData(req);

      //  console.log(response)

    } catch (error) {
        console.log(error,'.......error')

    }

}
