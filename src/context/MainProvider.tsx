import { createContext, useContext, useState } from "react";
import { IMovie } from "../interfaces";
import movies from "../data";

export const mainContext = createContext({})
//! TODO add genre filter



const MainProvider = ({children}: {children: React.ReactNode}) => {


const [allMovies, setAllMovies] = useState<IMovie[]>(movies)
const [searchedMovies, setSearchedMovies] = useState<IMovie[]>()
const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);


    return ( 
        <mainContext.Provider value={{allMovies, setAllMovies, searchedMovies, setSearchedMovies, selectedMovie, setSelectedMovie}}>
            {children}
        </mainContext.Provider>
     );
}
 
export default MainProvider;