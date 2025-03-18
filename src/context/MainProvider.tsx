import { createContext, useContext, useState } from "react";
import { IMovie } from "../interfaces";
import movies from "../data";

export const mainContext = createContext({})
//! add genre filter
//! Content MovieDetail


const MainProvider = ({children}: {children: React.ReactNode}) => {

const [allMovies, setAllMovies] = useState<IMovie[]>(movies)
const [filterMovie, setFilterMovie] = useState<string>("")
const [searchedMovies, setSearchedMovies] = useState<IMovie[]>()
const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);


    return ( 
        <mainContext.Provider value={{allMovies, setAllMovies, filterMovie, setFilterMovie, searchedMovies, setSearchedMovies, selectedMovie, setSelectedMovie}}>
            {children}
        </mainContext.Provider>
     );
}
 
export default MainProvider;