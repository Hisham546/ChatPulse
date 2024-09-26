import { callAPI, methods } from ".";
import { apis } from "./endpoints";


export const topupAmount = async () => {
    const req = { url: apis.getAmount, method: methods.GET };
    const response = await callAPI(req);
    return response.data;
};