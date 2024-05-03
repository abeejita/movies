import React, {useEffect, useState} from 'react';
import {getNowPlayingMovies} from "../../services/movies";
import {IMovieResponse} from "../../services/movies/types";
import MovieCard from "../../components/MovieCard/MovieCard";
import './NowPlaying.css';

const Playing: React.FC = () => {
    const [movies, setMovies] = useState<IMovieResponse[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorMovies, setErrorMovies] = useState<boolean>(false);

    const getNowPlaying = async () => {
        await getNowPlayingMovies()
            .then((res) => {
                if (res && res.data) {
                    console.log(res.data.results, "res");
                    setMovies(res.data.results);
                }
            })
            .catch((err) => {
                setErrorMovies(true);
            });
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        getNowPlaying();
    }, []);

    return (
        <div className="content">
            <div className="category">
                NOW PLAYING
            </div>
            <div className="movies-table">
                {loading && <div> Loading...</div>}
                {errorMovies && <div> Error...</div>}
                {movies?.length > 0 &&
                    movies.map((movie) => (
                        <div className="movie-element" key={movie.id}>
                            <MovieCard
                                key={movie.id}
                                movieId={movie.id}
                                posterPath={movie.poster_path}
                                title={movie.title}
                                voteAverage={movie.vote_average}
                                genreId={movie.genre_ids[0]}
                            />
                        </div>
                    ))}
            </div>
        </div>
    )
};

export default Playing;