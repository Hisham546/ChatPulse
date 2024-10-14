
import React, { useEffect, useState } from 'react';

import AppNavigation from './src/navigation';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



// Create a client
const queryClient = new QueryClient()
const App = () => {


  return (
    <QueryClientProvider client={queryClient}>
   
        <AppNavigation />
    
    </QueryClientProvider>

  );
}

export default App;