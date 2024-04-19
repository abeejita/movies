import React from 'react';
import {movies} from "../../constants/moviesMock";
import {MovieCard} from "../../components/MovieCard";
import './Home.css';

const Home = () => {
    return (
        <div className="background">
            <div className="category">
                POPULAR
            </div>
            <div className="movies">
                <div className="movie">
                    <MovieCard
                        movieId={movies[0].id}
                        posterPath={movies[0].poster_path}
                        title={movies[0].title}
                        voteAverage={movies[0].vote_average}
                        genreId={movies[0].genre_ids[0]}
                    />
                </div>
                <div className="movie">
                    <MovieCard
                        movieId={movies[1].id}
                        posterPath={movies[1].poster_path}
                        title={movies[1].title}
                        voteAverage={movies[1].vote_average}
                        genreId={movies[1].genre_ids[1]}
                    />
                </div>
                <div className="movie">
                    <MovieCard
                        movieId={movies[2].id}
                        posterPath={movies[2].poster_path}
                        title={movies[2].title}
                        voteAverage={movies[2].vote_average}
                        genreId={movies[2].genre_ids[1]}
                    />
                </div>
                <div className="movie">
                    <MovieCard
                        movieId={movies[3].id}
                        posterPath={movies[3].poster_path}
                        title={movies[3].title}
                        voteAverage={movies[3].vote_average}
                        genreId={movies[3].genre_ids[1]}
                    />
                </div>
                <div className="movie">
                    <MovieCard
                        movieId={movies[4].id}
                        posterPath={movies[4].poster_path}
                        title={movies[4].title}
                        voteAverage={movies[4].vote_average}
                        genreId={movies[4].genre_ids[1]}
                    />
                </div>
                <div className="movie">
                    <MovieCard
                        movieId={movies[5].id}
                        posterPath={movies[5].poster_path}
                        title={movies[5].title}
                        voteAverage={movies[5].vote_average}
                        genreId={movies[5].genre_ids[1]}
                    />
                </div>
                <div className="movie">
                    <MovieCard
                        movieId={movies[6].id}
                        posterPath={movies[6].poster_path}
                        title={movies[6].title}
                        voteAverage={movies[6].vote_average}
                        genreId={movies[6].genre_ids[1]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home