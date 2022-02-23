import React from 'react'
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native'

import { homeScreenStyle } from './styles'
import { backgroundImages } from '../../constants/images'

const HomeScreen = ({ navigation }) => {

    return (
        <ImageBackground
            source={backgroundImages.homeBackground}
            style={homeScreenStyle.backgroundImage}
        >
            <TouchableOpacity onPress={() => { navigation.navigate('MovieList') }}>
                <View style={homeScreenStyle.container}>
                    <Text style={homeScreenStyle.text}>Go To Star Wars Wiki</Text>
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

export default HomeScreen
