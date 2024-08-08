import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.instantwebtools.net/v1/passenger/:id',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(perPage: Number, page: Number) {
        return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
    },
    getEvent(_id: number) {
        return apiClient.get('/events/' + _id)
    }
}