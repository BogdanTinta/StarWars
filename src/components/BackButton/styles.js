import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { metrics } from '../../constants/metrics'

export const backButtonStyle = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.yellow,
        borderRadius: metrics.size10,
        padding: metrics.size5,
        margin: metrics.size10,
    },
    text: {
        color: colors.black,
        fontWeight: '900',
        fontSize: metrics.size25,
        textAlign: 'center',
    },
    touchableContainer: {
        marginRight: '75%',
    },
})
