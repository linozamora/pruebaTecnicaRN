import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/HomeScreen';
import { Movie } from '../interfaces/movieInterfaces';
import { DetailScreen } from '../screens/DetailScreen';


export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
}

const Stack = createStackNavigator();

export const Navigation = () =>  {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="DetailScreen" component={ DetailScreen } />
    </Stack.Navigator>
  );
}