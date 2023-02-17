import {MovieType} from "./models/MovieType";
import { CategoryType } from "./models/CategoryType";

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
            genre: genre
        }
        arrayToStoreData.push(tempMovie)
    }
    return arrayToStoreData
  }

  
export const movieData: MovieType[] =   generateFakeDatabase(16);

export const CategoryList: CategoryType[] =
    [{ "id": 28, "name": "Action" }, { "id": 12, "name": "Adventure" }, { "id": 16, "name": "Animation" },
      { "id": 35, "name": "Comedy" }, { "id": 80, "name": "Crime" }, { "id": 99, "name": "Documentary" },
      { "id": 18, "name": "Drama" }, { "id": 10751, "name": "Family" }, { "id": 14, "name": "Fantasy" },
      { "id": 36, "name": "History" }, { "id": 27, "name": "Horror" }, { "id": 10402, "name": "Music" },
      { "id": 9648, "name": "Mystery" }, { "id": 10749, "name": "Romance" }, { "id": 878, "name": "Science Fiction" },
      { "id": 10770, "name": "TV Movie" }, { "id": 53, "name": "Thriller" }, { "id": 10752, "name": "War" },
      { "id": 37, "name": "Western" }];

export const DiscoverList: string[] = ["Popular", "Top Rated", "Upcoming"]