import 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import React from 'react'
import { ActivityIndicator, Dimensions, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { FlatList } from 'react-native-gesture-handler';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { peliculasEnCine, isLoading} = useMovies();
    const { top } = useSafeAreaInsets();
    //console.log(peliculasEnCine[0]?.title);
    //Grafico de carga
    if (isLoading) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color="red" size={100}/>
            </View>
        )
    }
    return (
        <ScrollView>
                    <View style = {{ marginTop: top + 20 }}>
            {/*Carousel principal*/}
            <View style = {{ height: 440}}>
                <Carousel 
                    data = { peliculasEnCine }
                    renderItem = {({item}: any)=> <MoviePoster movie = { peliculasEnCine[1] }/>}
                    sliderWidth= { windowWidth }
                    itemWidth= { 300 }
                    />
            </View>
            {/*Carousel secundario - Peliculas populares*/}  
            <View style = {{backgroundColor: 'red', height: 230}}> 
                <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Peliculas populares</Text>
                <FlatList
                    data = { peliculasEnCine }
                    renderItem = {({item}: any ) => (
                    <MoviePoster movie={ item } width={ 140 } height={ 200 }/>
                    )}
                    keyExtractor={ (item) => item.id.toString()} 
                    horizontal={ true }
                    showsVerticalScrollIndicator = {false}
                />
            </View>  
        </View>   
        </ScrollView>
    )
}
