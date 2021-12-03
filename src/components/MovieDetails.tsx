import React from 'react'
import { FlatList, StyleSheet, Text, useColorScheme, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from 'react-native/Libraries/NewAppScreen'
//import { color } from 'react-native-elements/dist/helpers'
import { Cast } from '../interfaces/creditsInterface'
import { MovieFull } from '../interfaces/MovieInterfaces'
import { Button } from './Button'
import { CastItem } from './CastItem'

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}

export const MovieDetails = ({movieFull, cast}: Props) => {
    //const tmp = movieFull.production_companies[2].name;
    //const tmp = movieFull.production_companies.length ? movieFull.production_companies[2].name : null;
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <>
        {/*Detalles*/}
            <View style={{marginHorizontal: 20}}>
            <View style={{flexDirection: 'row', marginLeft: '85%'}}>
            <Icon
                    name="star"
                    color="gold"
                    size={16}
                />
                <Text style={{color: 'gold'}}> {movieFull.vote_average}</Text>
            </View>
            <Button />
            <View style={{marginHorizontal: 15, marginTop: 20}}>
                <Text style={[styles.overviewText,
            {
                color: isDarkMode ? Colors.white : Colors.black,
              },    
            ]}
                >{movieFull.overview}</Text>
            </View>
            
            {/*Lista de actores*/}
            <FlatList 
                data= { cast }
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <CastItem actor= {item}/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            <View style={{marginHorizontal: 15, marginTop: 10}}>
                {/*<Text style={styles.infoText}> Productoras {tmp}</Text>*/}
                <Text style={[styles.infoText,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}> Genero   {movieFull.genres.map( g => g.name ).join(', ') } </Text>
                <Text style={[styles.infoText,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}> Estreno   {movieFull.release_date} </Text>
                
            </View>

            </View>
        </>
    )
}
const styles = StyleSheet.create({
    overviewText: {
        fontSize: 15, 
        fontFamily: 'Open Sans',
        //fontWeight: 'bold',
        //color: 'black'
    },
    infoText: {
        fontSize: 15, 
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        color: 'black'
    },
    filmText:{
        fontSize: 15, 
        fontFamily: 'Open Sans',
        //color: 'black'
    }
})
