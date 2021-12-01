import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Movie} from '../interfaces/movieInterfaces';
import { DetailScreen } from '../screens/DetailScreen';
import { Navigation } from '../navigation/Navigation';


interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 350, width = 300}: Props) => {
  
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  //console.log(movie.poster_path)
  
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={ () => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 8,
        //backgroundColor: 'red'
      }}>
      <View style={styles.ImageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
      <Text style={styles.filmTitle}>{movie.title}</Text>
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
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
  },
  filmTitle: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
    //textAlign: 'center'
  },
});
