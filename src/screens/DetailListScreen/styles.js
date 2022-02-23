import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { metrics } from '../../constants/metrics'

export const detailListStyle = StyleSheet.create({
    title: {
        color: colors.yellow,
        fontSize: metrics.size30,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: colors.black,
        textShadowOffset: { width: -1 * metrics.size5, height: metrics.size5 },
        textShadowRadius: metrics.size10,
    },
    titleImage: {
        height: metrics.size80,
        width: '100%',
        marginBottom: metrics.size10,
        justifyContent: 'center',
    },
    keyItem: {
        fontSize: metrics.size22,
        marginTop: metrics.size22,
        fontWeight: 'bold',
        color: colors.yellow,
        textDecorationLine: 'underline'
    },
    valueItem: {
        fontSize: metrics.size20,
        color: colors.white,
    },
    numericValueItem: {
        fontSize: metrics.size20,
        color: colors.white,
        marginTop: metrics.size24,
    },
    backgroundImage: {
        flex: 1,
    },
    numericalItem: {
        flexDirection: 'row',
        marginHorizontal: metrics.size5,
    },
    nonNumericalItem: {
        marginHorizontal: metrics.size5,
    }
})

export default detailListStyle