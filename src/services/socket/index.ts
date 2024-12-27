import { io } from "socket.io-client";


import userServiceStore from "../api/zustandServiceStore";



const devType = 'production'

//const deviceType = userServiceStore.getState().deviceType
//emulatorurl
const emulatorUrl = io('http://10.0.2.2:5000/')
//export const socketUrl = emulatorUrl
//physical device url 
//const deviceUrl = io('http://192.168.1.35:5000/')


const productionUrl = io('https://hisham-chatpulse.onrender.com/')
export const socketUrl = productionUrl
//export const socketUrl =  deviceType === "Emulator" ? emulatorUrl : deviceUrl