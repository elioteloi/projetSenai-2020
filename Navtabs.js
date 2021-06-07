import React from 'react';
import { NavigationContainer, navigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
const App = () => {
    return(
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    );
}

export default App;