import { baseUrl } from "./serverConfig"

const url = baseUrl

export const apis = {
    createUsers: `${url}api/auth`,
    getAllUsers: `${url}api/users`,
}
