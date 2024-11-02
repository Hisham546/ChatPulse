import userServiceStore from "./zustandServiceStore"




const deviceType = userServiceStore.getState().deviceType




// export const baseUrl = 'http://localhost:5000/'

//emulator url
 const emulatorUrl = 'http://10.0.2.2:5000/'

//physical device url 
 const deviceUrl = 'http://192.168.1.35:5000/'





export const baseUrl =  deviceType === "Emulator" ? emulatorUrl : deviceUrl