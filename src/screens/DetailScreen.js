import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, FlatList, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import { fetchResults } from '../api/nobaseURL'
import BackButton from '../components/BackButton'


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
        <ImageBackground source={require('../../assets/space_background.jpg')} style={{ flex: 1 }}>
            <BackButton destination={'Movie'} />

            <ImageBackground source={imageSource} style={styles.titleImage} blurRadius={10}>
                <Text style={styles.title}>{title}</Text>
            </ImageBackground>

            <FlatList
                data={response}
                keyExtractor={response => response.name}
                renderItem={({ item }) => {
                    return (
                        <Button
                            title={item.name}
                            containerStyle={styles.button}
                            buttonStyle={{ backgroundColor: '#1c1c1c', borderRadius: 10, borderWidth: 3, borderColor: '#FFE81F' }}
                            titleStyle={{ fontWeight: 'bold', fontSize: 20, }}
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

const styles = StyleSheet.create({
    item: {
        textAlign: 'center',
        marginHorizontal: 40,
        marginVertical: 15,
        fontSize: 25,
        color: '#FFE81F',
    },
    title: {
        color: '#FFE81F',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: { width: -5, height: 5 },
        textShadowRadius: 10,
    },
    button: {
        marginVertical: 20,
        marginHorizontal: 40,
        backgroundColor: 'black'
    },
    titleImage: {
        height: 80,
        width: '100%',
        marginBottom: 10,
        justifyContent: 'center',
    }
})

export default withNavigation(DetailScreen)