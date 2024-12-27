import axios, { AxiosResponse } from 'axios';
import { callAPiParams } from './modal';

export const methods = {
    POST: 'POST' as 'POST',
    GET: 'GET' as 'GET',
    PUT: 'PUT' as 'PUT',
    DELETE: 'DELETE' as 'DELETE',
}

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
        console.log(error?.response?.data?.message, '................hola')
        return { error: error?.response?.data?.message || 'An error occurred' };
    }
};


export const callFormData = async ({ url, method, formData }: callAPiParams): Promise<AxiosResponse | { error: String }> => {
    try {
        const response = await axios(url, {
            method,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: formData,
        });

        return response.data;
    } catch (error) {

        return { error: error.message || 'An error occurred' };
    }
}