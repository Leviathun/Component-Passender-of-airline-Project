export interface Event {
    id: number,
    category: string,
    title: string,
    description: string,
    location: string,
    date: string,
    time: string,
    petsAllowed: boolean,
    organizer: string
}

export interface Passen {
    _id: string,
    name: string,
    trips: number,
    airline: [
        {
            _id: string,
            name: string,
            country: string,
            logo: string,
            slogan: string,
            head_quaters: string,
            website: string,
            established: string
        }
    ],
}
