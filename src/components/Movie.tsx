
import { IMovie, IMovieProps } from "../interfaces";




const Movie = ({movie}: IMovieProps) => {
    
    return ( 
        <>
            <div className="flex flex-col items-center">
            <h4 className="font-bold text-xl text-center">{movie.title}</h4>
            <h2 className="text-center">by {movie.director}</h2>
            </div>
            <p className="font-bold">{movie.year}</p>
            {/* <p>{movie.duration}</p> */}
            <h2 className="font-bold">⭐️ {movie.rate}</h2>
           {/* <div className="flex flex-col items-center gap-1">
           {movie.genre.map((genre)=> (
                <p key={crypto.randomUUID()}>{genre}</p>
            ))}
           </div> */}
        </>
     );
}
 
export default Movie;