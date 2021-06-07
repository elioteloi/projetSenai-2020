import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Signup from './Signup';
import Login from './Login';
import Restaurante from './Navtabs'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  } 
}

const navigator = createStackNavigator({
  signup: {
    screen: Signup,
    navigationOption:{
      headerShown: false,
      headerTransparent: true,
    },
  },

    login: {
    screen: Login,
    navigationOption:{
      headerShown: false,
      headerTransparent: true,
    },
  },
   Restaurante: {
    screen: Restaurante,
    navigationOption:{
      headerShown: false,
      headerTransparent: true,
    },
  }
})

const AppContainer = createAppContainer(navigator);