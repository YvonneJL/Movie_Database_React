import { useContext } from "react";
import Button from "./Button";
import { IMovieStateProps } from "../interfaces";
import { mainContext } from "../context/MainProvider";


const Nav = () => {


    const {allMovies, setAllMovies} = useContext(mainContext) as IMovieStateProps

    //Funktionen für die Sortierbuttons
    const sortByRating = () => {
        const sortedMovies = [...allMovies].sort((a,b)=> Number(b.rate) - Number(a.rate))
        setAllMovies(sortedMovies)
    }

    const sortByNameAtoZ = () => {
        const sortedMovies = [...allMovies].sort((a,b)=> (a.title).localeCompare(b.title))
        setAllMovies(sortedMovies)
    }

    const sortByNameZtoA = () => {
        const sortedMovies = [...allMovies].sort((a,b)=> (b.title).localeCompare(a.title))
        setAllMovies(sortedMovies)
    }

    const sortByDateDescending = () => {
        const sortedMovies = [...allMovies].sort((a,b)=> Number(b.year) - Number(a.year))
        setAllMovies(sortedMovies)
    }


    const sortByDateAscending = () => {
        const sortedMovies = [...allMovies].sort((a,b)=> Number(a.year) - Number(b.year))
        setAllMovies(sortedMovies)
    }

    return ( 
        <nav className="flex flex-col lg:flex-row lg:justify-between gap-2">
            <Button onClickFunction={sortByDateAscending} name={"Sort By Date Ascending"}/>
            <Button onClickFunction={sortByDateDescending} name={"Sort By Date Descending"}/>
            <Button onClickFunction={sortByRating} name={"Best Rate"}/>
            <Button onClickFunction={sortByNameAtoZ} name={"A - Z"}/>
            <Button onClickFunction={sortByNameZtoA} name={"Z - A"}/>
        </nav>
     );
}
 
export default Nav;