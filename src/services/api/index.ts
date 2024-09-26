import axios from 'axios';

export const methods = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
};

export const callAPI = async ({ url, method, body }) => {
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