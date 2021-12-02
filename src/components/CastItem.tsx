import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View>
      {actor.profile_path && (
        <Image source={{uri}} style={styles.castContainer} />
      )}

      <View>
        <Text style={styles.castText}>{actor.name}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  castContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  castText: {
    textAlign: 'center',
    marginTop: 15,
    marginHorizontal: 15,
    fontSize: 15,
    fontFamily: 'Open Sans',
    //fontWeight: 'bold',
    color: 'black',
    width: 60,
    height: 60,
  },
});
