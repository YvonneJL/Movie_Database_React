import { useContext, useEffect, useState } from "react";
import Nav from "./Nav"
import { mainContext } from "../context/MainProvider";
import { IMovieStateProps } from "../interfaces";
import movies from "../data";


const Header = () => {

    const {setAllMovies} = useContext(mainContext) as IMovieStateProps
    const [input, setInput] = useState<string>("")

//Filterfunktion für das Inputfeld--> Suche nach Titel
//Funktionier zusammen mit onChange und value beim Inputfeld
useEffect(()=> {
    if (input.length <= 0) {
        setAllMovies(movies)
    } else {
        const filteredMovies = movies.filter((movie)=> {
            return movie.title.toLowerCase().includes(input.toLowerCase())
        })
        setAllMovies(filteredMovies)
}
}, [input])




    return ( 
        <header className="p-5">
            <h1 className="bg-indigo-200 lg:flex-1 border border-black w-full h-10 mb-5 flex justify-center items-center text-2xl">Movie Database</h1>
            <Nav/>
            <select className="bg-indigo-200 lg:flex-1 border border-black w-full h-10 my-5 flex justify-center items-center text-sm text-center" name="genre-search" id="genre-search">
                <option value="">Search by genre</option>
                <option value="action">Action</option>
                <option value="adventure">Adventure</option>
                <option value="family">Family</option>
                <option value="crime">Crime</option>
                <option value="drama">Drama</option>
                <option value="western">Western</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="thriller">Thriller</option>
                <option value="mystery">Mystery</option>
                <option value="romance">Romance</option>
                <option value="fantasy">Fantasy</option>
            </select>
            <input onChange={(event)=> {setInput(event?.target.value)}} type="text" className="bg-indigo-200 lg:flex-1 border border-black w-full h-10 my-5 flex justify-center items-center text-sm lg:text-2xl placeholder:text-center" placeholder="Search by title" value={input}/>
        </header>
     );
}
 
export default Header;