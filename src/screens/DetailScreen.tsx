import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Movie } from '../interfaces/movieInterfaces';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const screenHeigth = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen' >{};

export const DetailScreen = ( { route, navigation }: Props) => { 
    
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    //console.log(movie.id);
    const isDarkMode = useColorScheme() === 'dark';
    const {isLoading, cast, movieFull} = useMovieDetails( movie.id );
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      };
    return (
        <SafeAreaView style={backgroundStyle}>
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
            <View style={[styles.imageContainer, ]}>
            <Image
                source= {{uri}}
                style={styles.posterImage}
            />
        </View>
        <View style= { styles.marginContainer}>
        <Text style= {[styles.title, 
        {
            color: isDarkMode ? Colors.white : Colors.black,
        },
        ]}>{movie.title}</Text>
        </View>
            {
                isLoading 
                    ?<ActivityIndicator size={35} color = "grey" style = {{marginTop:20}}/>
                    :<MovieDetails movieFull={movieFull!} cast={cast}/>
            }
            {/*Boton para cerrar*/}
            <View style={styles.backButton}>
            <TouchableOpacity
            onPress={()=> navigation.pop()}>
            <Icon
                color="white"
                name="arrow-back-outline"
                size={ 25 }
            />     
            </TouchableOpacity>
            </View>
            <View style={styles.loveButton}>
            <TouchableOpacity>                        
            <Icon
                color="white"
                name="heart-outline"
                size={ 25 }
            />
            </TouchableOpacity>
            </View>
        </ScrollView>
        </SafeAreaView>
        
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
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
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
        //color: 'black',
        
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 20,
    },
    loveButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: '88%'
    }
})