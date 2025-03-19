import { useContext } from "react";
import { IMovieStateProps } from "../interfaces";
import { mainContext } from "../context/Mainprovider";
import { useNavigate } from "react-router-dom";

const MovieDetail = () => {

const { selectedMovie } = useContext(mainContext) as IMovieStateProps

//Um per Klick des Emojis unten eine Route zurück zu navigieren
const navigate = useNavigate()

    return (
 <section className="p-5">
 
    <div className="cursor-pointer text-6xl" onClick={()=>navigate(-1)}>🎥<br/><p className="text-sm">all movies</p></div>
    <section className="h-screen flex justify-center items-center">
           <section className="bg-indigo-900 flex flex-col items-center p-5 gap-4 border border-black text-white lg:w-1/2">
             <div className="flex flex-col items-center">
            <h4 className="font-bold text-xl text-center">{selectedMovie.title}</h4>
            <h2 className="text-center">by {selectedMovie.director}</h2>
            </div>
            <p className="font-bold">{selectedMovie.year}</p>
            <p>{selectedMovie.duration}</p>
            <h2 className="font-bold">⭐️ {selectedMovie.rate}</h2>
           <div className="flex flex-col items-center gap-1">
           {selectedMovie.genre.map((genre)=> (
                <p key={crypto.randomUUID()}>{genre}</p>
            ))}
           </div>
        </section>
 </section>
 
 </section>
     );
}
 
export default MovieDetail;