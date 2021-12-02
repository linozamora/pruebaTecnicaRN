import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
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
    return (
        <>
        {/*Detalles*/}
            <View style={{marginHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}>
            <Icon
                    name="star-outline"
                    color="grey"
                    size={16}
                />
                <Text style={{color: 'grey'}}> {movieFull.vote_average}</Text>
            </View>
            <Button />
            <View style={{marginHorizontal: 15, marginTop: 20}}>
                <Text style={styles.overviewText}>{movieFull.overview}</Text>
            </View>
            
            {/*Lista de actores*/}
            <FlatList 
                data= { cast }
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <CastItem actor= {item}/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    overviewText: {
        fontSize: 15, 
        fontFamily: 'Open Sans',
        //fontWeight: 'bold',
        color: 'black'
    }
    
})
