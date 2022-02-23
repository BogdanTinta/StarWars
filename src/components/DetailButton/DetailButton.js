import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'

import { detailButtonStyle } from './styles'

const DetailButton = ({ title, imageSource, results, navigation }) => {

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Detail', { data: results, title, imageSource })
        }}>
            <View style={detailButtonStyle.container}>
                <Image source={imageSource} style={detailButtonStyle.image} />
                <Text style={detailButtonStyle.text} >{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default withNavigation(DetailButton)