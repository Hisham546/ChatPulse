import { io } from "socket.io-client";


import userServiceStore from "../api/zustandServiceStore";




const deviceType = userServiceStore.getState().deviceType
//emulatorurl
 const emulatorUrl = io('http://10.0.2.2:5000/')

//physical device url 
 const deviceUrl = io('http://192.168.1.35:5000/')




export const socketUrl =  deviceType === "Emulator" ? emulatorUrl : deviceUrl