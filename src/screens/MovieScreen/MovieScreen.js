import React, { useEffect } from 'react'
import { ImageBackground, ScrollView, Image, Text, View } from 'react-native'

import useResults from '../../hooks/useResults'
import BackButton from '../../components/BackButton/BackButton'
import DetailButton from '../../components/DetailButton/DetailButton'
import { movieStyle } from './styles'
import { backgroundImages } from '../../constants/images'
import { detailButtons } from '../../constants/arrays'
import { filterConfig } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon'

const MovieScreen = ({ navigation }) => {
    const [apiRequest, results, errorMessage] = useResults([])
    const id = navigation.getParam('id')
    const movieImage = navigation.getParam('movieImage')
    const apiFilmId = (id > 3) ? (id - 3) : (id + 3)

    useEffect(() => {
        apiRequest(`/films/${apiFilmId}`)
    }, [])

    const filterResults = (title) => {
        switch (title) {
            case '-Characters-':
                return results.characters
            case '-Planets-':
                return results.planets
            case '-Starships-':
                return results.starships
            case '-Species-':
                return results.species
            case '-Vehicles-':
                return results.vehicles
        }
    }

    return (
        <ImageBackground source={backgroundImages.background} style={movieStyle.backgroundImage}>
            <BackButton destination={'MovieList'} />
            <Image source={movieImage} style={movieStyle.movieImage} />

            <View style={movieStyle.textContainer}>
                <Text style={movieStyle.text}>Movie Details</Text>
            </View>

            <ScrollView horizontal >
                {detailButtons.map((button) => {
                    return <DetailButton title={button.title} imageSource={button.imageSource} results={filterResults(button.title)} />
                })}
            </ScrollView>
        </ImageBackground>
    )
}

MovieScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default MovieScreen