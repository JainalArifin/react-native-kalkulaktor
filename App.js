import React from 'react'
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './screens/Home'
import AboutSceen from './components/About';

const router = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutSceen
  }
},{
  initialRouteName: 'Home'
})

export default router