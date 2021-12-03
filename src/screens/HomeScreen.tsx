import 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {FlatList} from 'react-native-gesture-handler';
import {HorizontalSlider} from '../components/HorizontalSlider';
import { useNavigation } from '@react-navigation/core';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SearchBar from 'react-native-platform-searchbar';

import SearchBarC from '../components/SearchBarC';

const {width: windowWidth} = Dimensions.get('window');


export const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {nowPlaying, popular, topRated ,upComing, isLoading} = useMovies();
  const {top, bottom} = useSafeAreaInsets();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    marginBottom: bottom,
    marginTop: top,
  };
  //console.log(peliculasEnCine[0]?.title);
  const Navigation = useNavigation();
  //Grafico de carga
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="blue" size={100} />
      </View>
    );
  }
  return (
    <SafeAreaView style={backgroundStyle}> 
      <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View style={{marginTop: top}}>
        {/*Carousel principal
        <View style={{height: 390}}>
          <Carousel
            data={upComing}
            renderItem={({item}: any) => (
              <MoviePoster movie={item} />
            )}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
          
        </View>
        */}
        <View style={{height: 240, backgroundColor: '#5CA0D3'}}>
          <Text style={styles.welcomeText}> 
            Hola, ¿Qué deseas ver hoy?
          </Text>
          <View style={{marginTop: 15, marginHorizontal: 50}}>
            <SearchBarC /> 
          </View>
        </View>
        {/*Carousel secundario - Peliculas populares*/}
        <View style={styles.containerfilm}>
        <HorizontalSlider
          title="RECOMENDADAS PARA TI"
          movies={popular}
        />
        </View>
        <HorizontalSlider
          title="MEJOR CALIFICADAS"
          movies={topRated}
        />
        <HorizontalSlider
          title="PROXIMOS ESTRENOS"
          movies={upComing}
        />
      </View>
      
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerfilm:{
      borderTopStartRadius: 25,
      borderTopEndRadius: 25,
      //backgroundColor: 'red'
  },
  welcomeText: {
    marginTop: 50,
    marginHorizontal: 50,
    fontFamily: 'Open Sans',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    //textAlign: 'center',
  },
})  
