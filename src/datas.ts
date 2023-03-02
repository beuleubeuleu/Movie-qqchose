/*

const generateFakeDatabase = (numberOfMovies: number) => {
    let titre = "film numero "
    let note = Math.floor(Math.random()*10)
    let movie_cover = "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
    let date = "13-03-2000"
    let overview = "some things about horror"
    let genre = {id: 27, name: "horror"}

    const arrayToStoreData:MovieType[] = []
    for (let i=0; i<numberOfMovies; i++) {
        let tempMovie = {
            id: i,
            title: titre + i,
            vote_average: note,
            poster_path: movie_cover,
            release_date: date,
            overview: overview,
            genres: genre
        }
        arrayToStoreData.push(tempMovie)
    }
    return arrayToStoreData
  }


export const movieData: MovieType[] =   generateFakeDatabase(16);*/

export const DiscoverList: string[] = ["Popular", "Top Rated", "Upcoming"]

