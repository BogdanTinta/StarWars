import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { metrics } from '../../constants/metrics'

export const movieListStyle = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingVertical: metrics.size10,
    },
    item: {
        textAlign: 'center',
        marginHorizontal: metrics.size40,
        marginVertical: metrics.size15,
        fontSize: metrics.size28,
        color: colors.yellow,
        fontWeight: 'bold',
    },
})