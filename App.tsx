
import React, { useEffect, useState } from 'react';

import AppNavigation from './src/navigation';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import userServiceStore from './src/services/api/zustandServiceStore';
import DeviceInfo from 'react-native-device-info'
if (__DEV__) {
  require("./ReactotronConfig");
}
// Create a client
const queryClient = new QueryClient()
const App = () => {




  const setDeviceTyoe = userServiceStore((state) => state.setDeviceTyoe);

  useEffect(() => {
    async function checkDevice() {
      let deviceType = await DeviceInfo.isEmulator() ? "Emulator" : "Phone";
      setDeviceTyoe(deviceType)
    }
    checkDevice()
  }, [])


  return (
    <QueryClientProvider client={queryClient}>

      <AppNavigation />

    </QueryClientProvider>

  );
}

export default App;