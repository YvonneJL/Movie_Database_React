
import { IMovieProps } from "../interfaces";



//rendert erste Übersicht
//Komponente für je einen Film plus Daten
//Mit Props aus MovieList
const Movie = ({movie}: IMovieProps) => {
    
    return ( 
        <>
            <div className="flex flex-col items-center">
            <h4 className="font-bold text-xl text-center">{movie.title}</h4>
            <h2 className="text-center">by {movie.director}</h2>
            </div>
            <p className="font-bold">{movie.year}</p>
            <h2 className="font-bold">⭐️ {movie.rate}</h2>
        </>
     );
}
 
export default Movie;