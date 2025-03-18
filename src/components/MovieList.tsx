import { useContext } from "react";
import Movie from "./Movie";
import { mainContext } from "../context/Mainprovider";
import { IMovieProps } from "../interfaces";
import { Link, useParams } from "react-router-dom";




const MovieList = () => {

    const {allMovies} = useContext(mainContext) as IMovieProps
    

    const {movieParam} = useParams()


    return ( 
        <section className="flex flex-col gap-5 px-5 text-white lg:grid lg:grid-cols-3 pb-5">
            {allMovies?.map((movie)=> (
                <Link to={`${movie.title.split(/\s+/).join('').replace(/[:, ', ,]/g, "").toLowerCase()}`} className="bg-indigo-900 flex flex-col items-center p-5 gap-4 border border-black hover:scale-105" key={crypto.randomUUID()}>
                    <Movie movie={movie}/>
                </Link>
            ))}
        </section>
     );
}
 
export default MovieList;