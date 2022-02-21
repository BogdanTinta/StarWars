import React, { useEffect, useState } from 'react'
import { Text, FlatList, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

import { fetchResults } from '../../api/nobaseURL'
import BackButton from '../../components/BackButton/BackButton'
import { backgroundImages } from '../../constants/images'
import { detailScreenStyle } from './styles'

const DetailScreen = ({ navigation }) => {
    const [response, setResponse] = useState([])
    const data = navigation.getParam('data')
    const title = navigation.getParam('title')
    const imageSource = navigation.getParam('imageSource')

    const pushResults = () => {
        Promise.all(data.map((item) => {
            return fetchResults(item)
        })).then(info => setResponse(info))
    }

    useEffect(() => {
        pushResults()
    }, [])

    return (
        <ImageBackground source={backgroundImages.background} style={detailScreenStyle.backgroundImage}>
            <BackButton destination={'Movie'} />

            <ImageBackground source={imageSource} style={detailScreenStyle.titleImage} blurRadius={10}>
                <Text style={detailScreenStyle.title}>{title}</Text>
            </ImageBackground>

            <FlatList
                data={response}
                keyExtractor={response => response.name}
                renderItem={({ item }) => {
                    return (
                        <Button
                            title={item.name}
                            containerStyle={detailScreenStyle.buttonContainer}
                            buttonStyle={detailScreenStyle.button}
                            titleStyle={detailScreenStyle.buttonTitle}
                            onPress={() => navigation.navigate('DetailList', { data: item, imageSource })}
                        />
                    )
                }}
            />
        </ImageBackground >
    )
}

DetailScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default withNavigation(DetailScreen)