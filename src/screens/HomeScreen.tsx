import 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import React from 'react';
import {
  ActivityIndicator,
  Button,
  Dimensions,
  ScrollView,
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


const {width: windowWidth} = Dimensions.get('window');


export const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const {nowPlaying, popular, topRated ,upComing, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
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
      <View style={{marginTop: top + 20}}>
        {/*Carousel principal*/}
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
        {/*Carousel secundario - Peliculas populares*/}
        <HorizontalSlider
          title="RECOMENDADAS PARA TI"
          movies={popular}
        />
        <HorizontalSlider
          title="MEJOR CALIFICADAS"
          movies={topRated}
        />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};
