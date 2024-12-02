import { baseUrl } from "./serverConfig"

const url = baseUrl

export const apis = {
    createUsers: `${url}api/auth`,
    getAllUsers: `${url}api/users`,
    getUserTexts: `${url}api/user-chats`,
    login: `${url}api/login`,
    userOnline: `${url}api/online-status/`,
    uploadImages: `${url}api/upload`,
}
