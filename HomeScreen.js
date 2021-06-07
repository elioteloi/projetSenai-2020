import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation' ;
import { createBottomTabNavigator } from 'react-navigation-tabs'
import MapScreen from '../src/screen/MapScreen';
import MapListScreen  from '../src/screen/MapListScreen'
import { setNavigator } from '../src/navigationRef'

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    MapView: MapScreen,
    MapList: MapListScreen
  })
})

const App =  createAppContainer(switchNavigator)

export default () => {
  return (
    <App
    Ref={navigator => {
      setNavigator(navigator)
    }}
  />
  );
}