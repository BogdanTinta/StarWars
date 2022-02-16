import React from 'react'
import { View, StyleSheet, Text, ImageBackground, FlatList } from 'react-native'
import BackButton from '../components/BackButton'
import { withNavigation } from 'react-navigation'

const DetailListScreen = ({ navigation }) => {
    const data = navigation.getParam('data')
    const imageSource = navigation.getParam('imageSource')

    const filterKeys = (item) => {
        const blacklist = ['residents', 'films', 'created', 'edited', 'url', 'homeworld',
            'species', 'vehicles', 'starships', 'pilots', 'people', 'name']
        return blacklist.includes(item)
    }

    const isValueNumerical = (value) => {
        return /\d/.test(value)
    }

    return (
        <ImageBackground source={require('../../assets/space_background.jpg')} style={{ flex: 1 }} >
            <BackButton destination={'Detail'} />
            <ImageBackground source={imageSource} style={styles.titleImage} blurRadius={10}>
                <Text style={styles.title}>{data.name}</Text>
            </ImageBackground>
            <FlatList
                data={Object.entries(data)}
                renderItem={({ item }) => {
                    if (!filterKeys(item[0]))
                        if (isValueNumerical(item[1]) && item[0] !== 'model') {
                            return (
                                <View style={{ flexDirection: 'row', marginHorizontal: 5 }}>
                                    <Text style={styles.keyItem}>{item[0].replace(/_/g, ' ').toUpperCase()}:</Text>
                                    <Text style={styles.numericValueItem}> {item[1]}</Text>
                                </View>
                            )
                        } else {
                            return (
                                <View style={{ marginHorizontal: 5 }}>
                                    <Text style={styles.keyItem}>{item[0].replace(/_/g, ' ').toUpperCase()}</Text>
                                    <Text style={styles.valueItem}>{item[1]}</Text>
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
const styles = StyleSheet.create({
    title: {
        color: '#FFE81F',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: { width: -5, height: 5 },
        textShadowRadius: 10,
    },
    titleImage: {
        height: 80,
        width: '100%',
        marginBottom: 10,
        justifyContent: 'center',

    },
    keyItem: {
        fontSize: 22,
        color: 'white',
        marginTop: 22,
        fontWeight: 'bold',
        color: '#FFE81F',
        textDecorationLine: 'underline'
    },
    valueItem: {
        fontSize: 20,
        color: 'white',
    },
    numericValueItem: {
        fontSize: 20,
        color: 'white',
        marginTop: 24,
    }
})

export default withNavigation(DetailListScreen)