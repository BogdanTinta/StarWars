import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/screens/HomeScreen'
import MovieListScreen from './src/screens/MovieListScreen'
import MovieScreen from './src/screens/MovieScreen'
import DetailScreen from './src/screens/DetailScreen'
import DetailListScreen from './src/screens/DetailListScreen'

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        MovieList: MovieListScreen,
        Movie: MovieScreen,
        Detail: DetailScreen,
        DetailList: DetailListScreen,
    },
    {
        initialRouteName: 'Home',
    },
)

export default createAppContainer(navigator)
