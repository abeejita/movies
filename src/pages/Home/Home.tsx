import React, {useEffect, useState} from 'react';
import {MovieCard} from "../../components/MovieCard";
import './Home.css';
import {IMovieResponse} from "../../services/movies/types";
import {getNowPlayingMovies, getPopularMovies, getTopRatedMovies} from "../../services/movies";

const Home = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState<IMovieResponse[]>([]);
    const [topRatedMovies, setTopRatedMovies] = useState<IMovieResponse[]>([]);
    const [popularMovies, setPopularMovies] = useState<IMovieResponse[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorMovies, setErrorMovies] = useState<boolean>(false);

    const getPopular = async () => {
        await getPopularMovies()
            .then((res) => {
                if (res && res.data) {
                    console.log(res.data.results, "res");
                    setPopularMovies(res.data.results.slice(0, 8));
                }
            })
            .catch((err) => {
                setErrorMovies(true);
            });
        setLoading(false);
    };

    const getTopRated = async () => {
        await getTopRatedMovies()
            .then((res) => {
                if (res && res.data) {
                    console.log(res.data.results, "res");
                    setTopRatedMovies(res.data.results.slice(0, 8));
                }
            })
            .catch((err) => {
                setErrorMovies(true);
            });
        setLoading(false);
    };

    const getNowPlaying = async () => {
        await getNowPlayingMovies()
            .then((res) => {
                if (res && res.data) {
                    console.log(res.data.results, "res");
                    setNowPlayingMovies(res.data.results.slice(0, 8));
                }
            })
            .catch((err) => {
                setErrorMovies(true);
            });
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        getPopular();
        getTopRated();
        getNowPlaying();
    }, []);

    return (
        <div className="background">
            <div className="category">
                POPULAR
            </div>
            <div className="movies">
                {loading && <div> Loading...</div>}
                {errorMovies && <div> Error...</div>}
                {popularMovies?.length > 0 &&
                    popularMovies.map((movie) => (
                        <div className="individual-movie" key={movie.id}>
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
            <div className="category">
                TOP RATED
            </div>
            <div className="movies">
                {loading && <div> Loading...</div>}
                {errorMovies && <div> Error...</div>}
                {topRatedMovies?.length > 0 &&
                    topRatedMovies.map((movie) => (
                        <div className="individual-movie" key={movie.id}>
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
            <div className="category">
                NOW PLAYING
            </div>
            <div className="movies">
                {loading && <div> Loading...</div>}
                {errorMovies && <div> Error...</div>}
                {nowPlayingMovies?.length > 0 &&
                    nowPlayingMovies.map((movie) => (
                        <div className="individual-movie" key={movie.id}>
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
}

export default Home