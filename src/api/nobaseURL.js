import axios from 'axios'
export const fetchResults = async (link) => {
    return axios
        .get(link)
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err)
            return err
        })
}