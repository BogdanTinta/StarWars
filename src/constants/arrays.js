import { buttonImages, movieTitles } from './images'

export const blacklist = ['residents', 'films', 'created', 'edited', 'url', 'homeworld',
    'species', 'vehicles', 'starships', 'pilots', 'people', 'name']

export const movieImages = Object.values(movieTitles)

export const detailButtons = [
    {
        title: '-Characters-',
        imageSource: buttonImages.characters,
        //results: results.characters
    }, {
        title: '-Planets-',
        imageSource: buttonImages.planets,
        //results: results.planets
    }, {
        title: '-Starships-',
        imageSource: buttonImages.spaceships,
        //results: results.starships
    }, {
        title: '-Species-',
        imageSource: buttonImages.species,
        //results: results.species
    }, {
        title: '-Vehicles-',
        imageSource: buttonImages.vehicles,
        //results: results.vehicles
    }
]