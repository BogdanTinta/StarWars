import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import useResults from '../hooks/useResults'
import BackButton from '../components/BackButton'

const MovieListScreen = ({ navigation }) => {
    const [apiRequest, results, errorMessage] = useResults([])

    const movieImages = [
        require('../../assets/movie_images/the_phantom_menace.jpg'),
        require('../../assets/movie_images/attack_of_the_clones.jpg'),
        require('../../assets/movie_images/revenge_of_the_sith.jpg'),
        require('../../assets/movie_images/a_new_hope.jpg'),
        require('../../assets/movie_images/the_empire_strikes_back.jpg'),
        require('../../assets/movie_images/return_of_the_jedi.jpg'),
    ]

    
    useEffect(() => {
        apiRequest('/films')
    }, [])

    return (
        <ImageBackground source={require('../../assets/space_background.jpg')} style={styles.background} >
            <BackButton destination='Home' />
            <View style={styles.container}>
                <FlatList
                    data={results}
                    keyExtractor={results => results.episode_id}
                    renderItem={({ item: { episode_id, title } }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Movie', { id: episode_id, movieImage: movieImages[episode_id - 1] })}>
                                <Text style={styles.item}>Episode {episode_id}:{'\n'}{title}</Text>
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

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingVertical: 10,
    },
    item: {
        textAlign: 'center',
        marginHorizontal: 40,
        marginVertical: 15,
        fontSize: 28,
        color: '#FFE81F',
        fontWeight: 'bold',
    },
})

export default MovieListScreen