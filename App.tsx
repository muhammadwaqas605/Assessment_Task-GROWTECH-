import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { StackNavigation } from './src/navigation/stackNavigation';

const App = () => {
 

 
  

  return (
    <NavigationContainer>
     
         
<StackNavigation/>    
        <Toast position="bottom" bottomOffset={20} />
    </NavigationContainer>
  );
};

export default App;
