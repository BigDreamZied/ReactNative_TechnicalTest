import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './stack/homeStack'
import { Loader } from '../components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeType } from '../types'
import { Result } from '../types/homeType'

const MainNavigation: FC<{}> = () => {
  return (
    <NavigationContainer >
      <HomeStack />
      <Loader/>
    </NavigationContainer>
  )
}

export default MainNavigation



export type RootStackParamList = {
  home: { data: Result };
  details: { data: Result };
};

type Props = NativeStackScreenProps<RootStackParamList, 'home'>;

export type HomeScreenRouteProp = Props['route'];
export type HomeScreenNavigationProp = Props['navigation'];