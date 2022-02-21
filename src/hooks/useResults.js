import { useEffect, useState } from 'react'
import starwars from '../api/starwars'


export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const apiRequest = async (apiCall) => {
        try {
            const response = await starwars.get(`${apiCall}`)
            if (response.data.results) {
                setResults(response.data.results)
            } else {
                setResults(response.data)
            }
        } catch (err) {
            setErrorMessage('Oops! There was a disturbance in the Force')
        }
    }

    useEffect(() => {
        apiRequest()
    }, [])

    return [apiRequest, results, errorMessage]
}