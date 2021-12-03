import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Movie} from '../interfaces/movieInterfaces';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 350, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  //console.log(movie.poster_path)

  const Navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TouchableOpacity
      onPress={() => Navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
        //backgroundColor: 'red'
      }}>
      <View style={styles.ImageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
      <Text style={[styles.filmTitle, {
            color: isDarkMode ? Colors.white : Colors.black,
          },]}>{movie.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  ImageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 20,
  },
  filmTitle: {
    fontSize: 12,
    //color: 'black',
    fontWeight: 'bold',
    //textAlign: 'center'
  },
});
