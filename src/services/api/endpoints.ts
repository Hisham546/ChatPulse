import { baseUrl } from "./serverConfig"

const url = baseUrl

export const apis = {
    addAmount: `${url}api/auth`,
    getAmount: `${url}api/users`,
}