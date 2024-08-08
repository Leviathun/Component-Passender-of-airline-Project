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
            established: string,
            
        }
    ],
    
}
