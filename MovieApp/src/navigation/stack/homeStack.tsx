import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DetailsScreen, HomeScreen } from '../../screens'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const HomeStack : FC<{}> = () => {
  return (
    <Stack.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="home" component={HomeScreen}/>
        <Stack.Screen name="details" component={DetailsScreen}/>
    </Stack.Navigator>
  )
}


export default  HomeStack

