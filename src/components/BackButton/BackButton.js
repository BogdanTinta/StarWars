import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

import { backButtonStyle } from './styles'

const BackButton = ({ destination, navigation }) => {
    return (

        <TouchableOpacity onPress={() => navigation.navigate(`${destination}`)} style={backButtonStyle.touchableContainer} >
            <View style={backButtonStyle.buttonContainer}>
                <Text style={backButtonStyle.text}>Back</Text>
            </View>
        </TouchableOpacity>

    )
}

export default withNavigation(BackButton)