

export interface callAPiParams {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'; // Limit to HTTP methods
    body?: any; // Optional, since some requests like GET don't need a body
}

export interface bodyType {
    phone: Number,
    password: Number,
    firstName: String,
    lastName: String



}