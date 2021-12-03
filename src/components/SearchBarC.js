import React from 'react';
import {FlatList, StyleSheet, Text, useColorScheme, View} from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        containerStyle={styles.containerSearch}
        inputContainerStyle={styles.barStyle}
        inputStyle={styles.containerSearch}
        placeholderTextColor= '#FFFFFF'
        placeholder="Buscar"
        onChangeText={this.updateSearch}
        value={search}
        lightTheme= 'true'
      />
    );
  }
}
const styles = StyleSheet.create({
  barStyle: {
    height: 25,
    borderRadius: 25,
  },
  containerSearch:{
    borderRadius: 25,
    opacity: 0.5,
    height: 40,
    color: '#FFFFFF'
  }
})