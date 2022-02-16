import React from 'react'
import { TouchableOpacity, StyleSheet, Image, View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'

const DetailButton = ({ title, imageSource, results, navigation }) => {

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Detail', { data: results, title, imageSource })
        }}>
            <View style={styles.container}>
                <Image source={imageSource} style={styles.image} />
                <Text style={styles.text} >{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 250,
    },
    container: {
        alignItems: 'center',
        marginBottom: 20,
        paddingLeft: 5,
    },
    text: {
        fontSize: 22,
        fontWeight: '800',
        color: '#FFE81F',
    }
})

export default withNavigation(DetailButton)