import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterfaces';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';

const screenHeigth = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen' >{};

export const DetailScreen = ( { route }: Props) => { 
    
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    //console.log(movie.id);
    const {isLoading, cast, movieFull} = useMovieDetails( movie.id );

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
            <Image
                source= {{uri}}
                style={styles.posterImage}
            />
        </View>
        <View style= { styles.marginContainer}>
        <Text style= { styles.title}>{movie.title}</Text>
        </View>
            {
                isLoading 
                    ?<ActivityIndicator size={35} color = "grey" style = {{marginTop:20}}/>
                    :<MovieDetails movieFull={movieFull!} cast={cast}/>
            }
        
        </ScrollView>
        
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        fontFamily: 'Helvetica'
    },
    imageContainer: {
        overflow: 'hidden',
        width: '100%',
        height: screenHeigth * 0.4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    },
    posterImage: {
        flex: 1,
        //borderRadius: 50
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontFamily: 'Open Sans',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        
    }

})