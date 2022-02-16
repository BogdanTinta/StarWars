import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

const BackButton = ({ destination, navigation }) => {
    return (

        <TouchableOpacity onPress={() => navigation.navigate(`${destination}`)} style={{ marginRight: '75%' }} >
            <View style={styles.buttonContainer}>
                <Text style={styles.text}>Back</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#FFE81F',
        borderRadius: 10,
        padding: 5,
        margin: 10,
    },
    text: {
        color: 'black',
        fontWeight: '900',
        fontSize: 25,
        textAlign: 'center',
    }
})

export default withNavigation(BackButton)