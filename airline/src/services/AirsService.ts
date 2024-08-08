import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.instantwebtools.net/v1/airlines/:id',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getAirlines() {
        return apiClient.get('/airlines')
    }
}