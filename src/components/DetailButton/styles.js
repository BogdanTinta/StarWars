import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { metrics } from '../../constants/metrics'

export const detailButtonStyle = StyleSheet.create({
    image: {
        height: metrics.size150,
        width: metrics.size250,
    },
    container: {
        alignItems: 'center',
        marginBottom: metrics.size20,
        paddingLeft: metrics.size5,
    },
    text: {
        fontSize: metrics.size22,
        fontWeight: '800',
        color: colors.yellow,
    },
})