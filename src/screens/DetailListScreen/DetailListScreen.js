import React from 'react'
import { View, Text, ImageBackground, FlatList } from 'react-native'
import { withNavigation } from 'react-navigation'

import BackButton from '../../components/BackButton/BackButton'
import { detailListStyle } from './styles'
import { blacklist } from '../../constants/arrays'
import { backgroundImages } from '../../constants/images'

const DetailListScreen = ({ navigation }) => {
    const data = navigation.getParam('data')
    const imageSource = navigation.getParam('imageSource')

    const filterKeys = (item) => {
        return blacklist.includes(item)
    }

    const isValueNumerical = (value) => {
        return /\d/.test(value)
    }

    return (
        <ImageBackground source={backgroundImages.background} style={detailListStyle.backgroundImage} >
            <BackButton destination={'Detail'} />
            <ImageBackground source={imageSource} style={detailListStyle.titleImage} blurRadius={10}>
                <Text style={detailListStyle.title}>{data.name}</Text>
            </ImageBackground>
            <FlatList
                data={Object.entries(data)}
                renderItem={({ item }) => {
                    if (!filterKeys(item[0]))
                        if (isValueNumerical(item[1]) && item[0] !== 'model') {
                            return (
                                <View style={detailListStyle.numericalItem}>
                                    <Text style={detailListStyle.keyItem}>{item[0].replace(/_/g, ' ').toUpperCase()}:</Text>
                                    <Text style={detailListStyle.numericValueItem}> {item[1]}</Text>
                                </View>
                            )
                        } else {
                            return (
                                <View style={detailListStyle.nonNumericalItem}>
                                    <Text style={detailListStyle.keyItem}>{item[0].replace(/_/g, ' ').toUpperCase()}</Text>
                                    <Text style={detailListStyle.valueItem}>{item[1]}</Text>
                                </View>
                            )
                        }
                }}
            />
        </ImageBackground>
    )
}

DetailListScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default withNavigation(DetailListScreen)