import axios, { AxiosResponse } from 'axios';
import { callAPiParams } from './modal';
export const methods = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
};

export const callAPI = async ({ url, method, body }: callAPiParams): Promise<AxiosResponse | { error: String }> => {
    try {
        const response = await axios(url, {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            data: body,
        });
        return response;
    } catch (error) {
        return { error: error.message || 'An error occurred' };
    }
}