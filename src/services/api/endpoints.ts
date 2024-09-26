import { baseUrl } from "./serverConfig"

const url = baseUrl

export const apis = {
    addAmount: `${url}TopUp`,
    getAmount: `${url}TopUp`,
}