import { callAPI, methods } from ".";
import { apis } from "./endpoints";
import { bodyType } from "./modal";

export const createUsers = async (body: bodyType) => {
    const req = { url: apis.createUsers, body, method: methods.POST };
    const response = await callAPI(req);

    return response.data

};

export const loginUser = async (body: any) => {
    const req = { url: apis.login, body, method: methods.POST };
    const response = await callAPI(req)
    return response.data
}


export const getAllUsers = async () => {
    const req = { url: apis.getAllUsers, method: methods.GET };
    const response = await callAPI(req);
    // console.log(response.data,'........user data')
    return response.data;
};

export const loadAllMessages = async () => {
    const req = { url: apis.getUserTexts, method: methods.GET };
    const response = await callAPI(req);
    return response.data;
};

export const updateUserOnline = async (userId: String) => {
    //console.log('updateUserOnline..........',userId)
    const req = { url: `${apis.userOnline}${userId}`, method: methods.GET };
   // console.log(req)
    const response = await callAPI(req);

   return response.data;
}
