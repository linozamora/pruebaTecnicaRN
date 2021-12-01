import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterfaces';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen' > {
};

export const DetailScreen = ( { route }: Props) => {
    
    const movie = route.params;

    return (
        <View>
            <Text>DetailScreen</Text>
        </View>
    )
}
