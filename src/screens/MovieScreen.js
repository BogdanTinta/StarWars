import React, { useEffect } from "react"
import { StyleSheet, ImageBackground, ScrollView, Image, Text, View } from 'react-native'
import useResults from "../hooks/useResults"
import BackButton from "../components/BackButton"
import DetailButton from "../components/DetailButton"

const MovieScreen = ({ navigation }) => {
    const [apiRequest, results, errorMessage] = useResults([])
    const id = navigation.getParam('id')
    const movieImage = navigation.getParam('movieImage')
    const apiFilmId = (id > 3) ? (id - 3) : (id + 3)

    useEffect(() => {
        apiRequest(`/films/${apiFilmId}`)
    }, [])

    
    return (
        <ImageBackground source={require('../../assets/space_background.jpg')} style={{ flex: 1 }}>
            <BackButton destination={'MovieList'} />
            <Image source={movieImage} style={styles.movieImage} />

            <View style={styles.textContainer}>
                <Text style={styles.text}>Movie Details</Text>
            </View>

            <ScrollView horizontal >
                <DetailButton title='-Characters-' imageSource={require('../../assets/button_images/characters.jpg')} results={results.characters} />
                <DetailButton title='-Planets-' imageSource={require('../../assets/button_images/planets.jpg')} results={results.planets} />
                <DetailButton title='-Starships-' imageSource={require('../../assets/button_images/spaceships.jpg')} results={results.starships} />
                <DetailButton title='-Species-' imageSource={require('../../assets/button_images/species.jpg')} results={results.species} />
                <DetailButton title='-Vehicles-' imageSource={require('../../assets/button_images/vehicles.jpg')} results={results.vehicles} />
            </ScrollView>
        </ImageBackground>
    )

}

MovieScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 20,
    },
    movieImage: {
        width: '100%',
        height: 250,
    },
    text: {
        fontSize: 30,
        color: '#FFE81F',
        fontFamily: 'monospace',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textContainer: {
        borderWidth: 3,
        borderColor: '#FFE81F',
        marginTop: 70,
        marginBottom: 10,
        justifyContent: 'center',
        marginHorizontal: '10%',
    }
})

export default MovieScreen