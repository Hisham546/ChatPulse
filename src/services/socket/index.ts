import { io } from "socket.io-client";

//emulatorurl
export const socketUrl = io('http://10.0.2.2:5000/')

//physical device url 
//export const socketUrl = io('http://192.168.1.35:5000/')