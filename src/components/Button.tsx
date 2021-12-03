import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Button = () => {
    return (
        <TouchableOpacity style = {{
            ...styles.button,
            backgroundColor: '#707070',
        }}>
            <Text style = {{
                ...styles.buttonText,
                color: '#f1f1f1',
            }}
            >VER AHORA</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        alignSelf: 'stretch',
        marginHorizontal: 10,
        borderRadius: 25,
        paddingVertical: 15,
        height: 46,
        width: 140,
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Open Sans',
        fontSize: 13,
        fontWeight: 'bold',
    },
})
