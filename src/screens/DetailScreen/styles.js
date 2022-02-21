import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { metrics } from '../../constants/metrics'

export const detailScreenStyle = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    item: {
        textAlign: 'center',
        marginHorizontal: metrics.size40,
        marginVertical: metrics.size15,
        fontSize: metrics.size25,
        color: colors.yellow,
    },
    title: {
        color: colors.yellow,
        fontSize: metrics.size40,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: colors.black,
        textShadowOffset: { width: -1 * metrics.size5, height: metrics.size5 },
        textShadowRadius: metrics.size10,
    },
    buttonContainer: {
        marginVertical: metrics.size20,
        marginHorizontal: metrics.size40,
        backgroundColor: colors.black
    },
    button: {
        backgroundColor: colors.grey,
        borderRadius: metrics.size10,
        borderWidth: metrics.size3,
        borderColor: colors.yellow,
    },
    buttonTitle: {
        fontWeight: 'bold',
        fontSize: metrics.size20,
    },
    titleImage: {
        height: metrics.size80,
        width: '100%',
        marginBottom: metrics.size10,
        justifyContent: 'center',
    },
})