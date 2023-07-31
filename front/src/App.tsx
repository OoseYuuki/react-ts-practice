import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'; 
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <ChakraProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ChakraProvider>    
  );
}

export default App;
