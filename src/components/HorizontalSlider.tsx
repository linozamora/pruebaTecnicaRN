import React from 'react';
import {FlatList, StyleSheet, Text, useColorScheme, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Movie} from '../interfaces/movieInterfaces';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={{
        height: title ? 220 : 200,
      }}>
      {title && (
        <Text
          style={[styles.textMovies,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
            /*fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 10,
            color: 'black',
            */
          ]}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textMovies: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
    marginVertical: 10
    //color: 'black',
  }
})
