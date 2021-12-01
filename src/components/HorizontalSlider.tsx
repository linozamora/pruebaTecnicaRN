import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterfaces'
import { MoviePoster } from './MoviePoster'

interface Props {
    title?: string;
    movies: Movie[]
}

export const HorizontalSlider = ({ title, movies}: Props) => {
    return (
        <View style = {{
             height: (title) ? 200 : 180
        }}> 
               {
                   title &&  <Text style = {{fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: 'black'}}>{title}</Text>
               }
                <FlatList
                    data = { movies }
                    renderItem = {({item}: any ) => (
                    <MoviePoster movie={ item } width={ 140 } height={ 160 }/>
                    )}
                    keyExtractor={ (item) => item.id.toString()} 
                    horizontal={ true }
                    showsHorizontalScrollIndicator = {false}
                />
            </View>
    )
}
