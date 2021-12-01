import 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {FlatList} from 'react-native-gesture-handler';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated ,upComing, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  //console.log(peliculasEnCine[0]?.title);
  //Grafico de carga
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="blue" size={100} />
      </View>
    );
  }
  return (
    <ScrollView>
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
          title="RECOMENDED FOR YOU"
          movies={popular}
        />
        <HorizontalSlider
          title="TOP RATED"
          movies={topRated}
        />
      </View>
    </ScrollView>
  );
};
