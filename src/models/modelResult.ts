export type ModelData = {
    page: number,
    results: ModelResult[]
}

export type ModelResult = {
    adult: boolean,
    backdrop_path: string,
    id: number,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    runtime: string,
    status: string
}