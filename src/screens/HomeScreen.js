import React from 'react'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {

    return (
        <ImageBackground
            source={require('../../assets/starwars_background.jpg')}
            style={styles.imageBackground}
        >
            <TouchableOpacity onPress={() => { navigation.navigate('MovieList') }}>
                <View style={styles.container}>
                    <Text style={styles.text}>Go To Star Wars Wiki</Text>
                </View>
            </TouchableOpacity>
        </ImageBackground>
    )
}

HomeScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 150,
        marginHorizontal: 30,
        backgroundColor: 'white',
        borderRadius: 4,
        height: 50,
        justifyContent: 'center',
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    }
})

export default HomeScreen
