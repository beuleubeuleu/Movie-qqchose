interface movieGenre 
  {
    name: string;
  }

interface movieType
  {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
    release_date: string | Date;
    overview: string;
    genre: movieGenre;
  }

const generateFakeDatabase = (numberOfMovies: number) => {
    let id=0
    let titre = "film numero "
    let note = Math.floor(Math.random()*10)
    let movie_cover = "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
    let date = "13-03-2000"
    let overview = "some things about horror"
    let genre: movieGenre = {name: "horror"}

    const arrayToStoreData:movieType[] = []
    for (let i=0; i<numberOfMovies; i++) {
        let tempMovie = {
            id: i,
            title: titre + i,
            vote_average: note,
            poster_path: movie_cover,
            release_date: date,
            overview: overview,
            genre: genre
        }
        arrayToStoreData.push(tempMovie)
    }
    return arrayToStoreData
  }

export const movieData: movieType[] =   generateFakeDatabase(16);