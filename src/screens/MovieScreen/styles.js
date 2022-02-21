import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { metrics } from '../../constants/metrics'

export const movieStyle = StyleSheet.create({
    button: {
        margin: metrics.size20,
    },
    movieImage: {
        width: '100%',
        height: metrics.size250,
    },
    text: {
        fontSize: metrics.size30,
        color: colors.yellow,
        fontFamily: 'monospace',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textContainer: {
        borderWidth: metrics.size3,
        borderColor: colors.yellow,
        marginTop: metrics.size70,
        marginBottom: metrics.size10,
        justifyContent: 'center',
        marginHorizontal: '10%',
    },
    backgroundImage: {
        flex: 1,
    },
})