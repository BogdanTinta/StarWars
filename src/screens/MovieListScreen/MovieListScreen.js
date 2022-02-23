import React, { useEffect } from 'react'
import { View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native'

import useResults from '../../hooks/useResults'
import BackButton from '../../components/BackButton/BackButton'
import { movieListStyle } from './styles'
import { backgroundImages } from '../../constants/images'
import { movieImages } from '../../constants/arrays'

const MovieListScreen = ({ navigation }) => {
    const [apiRequest, results, errorMessage] = useResults([])

    useEffect(() => {
        apiRequest('/films')
    }, [])

    return (
        <ImageBackground source={backgroundImages.background} style={movieListStyle.background} >
            <BackButton destination='Home' />
            <View style={movieListStyle.container}>
                <FlatList
                    data={results}
                    keyExtractor={results => results.episode_id}
                    renderItem={({ item: { episode_id, title } }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Movie', { id: episode_id, movieImage: movieImages[episode_id - 1] })}>
                                <Text style={movieListStyle.item}>Episode {episode_id}:{'\n'}{title}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </ImageBackground>
    )
}

MovieListScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default MovieListScreen