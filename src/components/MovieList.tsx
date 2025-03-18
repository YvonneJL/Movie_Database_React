import { useContext } from "react";
import movies from "../data";
import Movie from "./Movie";
import { mainContext } from "../context/Mainprovider";
import { IMovieProps } from "../interfaces";



const MovieList = () => {

    const {allMovies} = useContext(mainContext) as IMovieProps
    console.log(allMovies);

    return ( 
        <section className="flex flex-col gap-5 px-5 text-white lg:grid lg:grid-cols-3 pb-5">
            {allMovies?.map((movie)=> (
                <article className="bg-indigo-900 flex flex-col items-center p-5 gap-4 border border-black hover:scale-105" key={crypto.randomUUID()}>
                    <Movie movie={movie}/>
                </article>
            ))}
        </section>
     );
}
 
export default MovieList;