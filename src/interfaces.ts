export interface IMovie {
    title: string;
    year: string;
    director: string;
    duration: string;
    genre: string[];
    rate: string;
};

export interface IButtonProps {
    name: string
    onClickFunction: () => void
}

export interface IMovieStateProps {
    allMovies: IMovie[]
    setAllMovies: (allMovies: IMovie[]) => void
    filterMovie: string
    setFilterMovie: (filterMovie: string) => void
    searchedMovies: IMovie[]
    setSearchedMovies: (filterMovie: IMovie[]) => void
    selectedMovie: IMovie
    setSelectedMovie: (selectedMovie: IMovie) => void
}

export interface IMovieProps {
    allMovies?: IMovie[]
    movie: IMovie
}