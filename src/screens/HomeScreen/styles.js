import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { metrics } from '../../constants/metrics'

export const homeScreenStyle = StyleSheet.create({
    container: {
        marginBottom: metrics.size150,
        marginHorizontal: metrics.size30,
        backgroundColor: colors.white,
        borderRadius: metrics.size4,
        height: metrics.size50,
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    text: {
        fontSize: metrics.size30,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center',
    }
})