import React from 'react';
import {IMAGE_SOURCE} from "../../constants/moviesMock";
import {IMovieCard} from "./types";
import Pill from "../Pill/Pill";
import './MovieCard.css';
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../routes/constants";

const MovieCard: React.FC<IMovieCard> = ({
    title,
    genreId,
    movieId,
    voteAverage,
    posterPath,
}) => {
    const navigate = useNavigate()
    // states
    const poster = IMAGE_SOURCE + posterPath;

    const getGenre = (genreId: number): string => {
        switch (genreId) {
            case 28: {
                return 'Action';
            }
            case 12: {
                return 'Adventure';
            }
            case 16: {
                return 'Animation';
            }
            case 35: {
                return 'Comedy';
            }
            case 80: {
                return 'Crime';
            }
            case 99: {
                return 'Documentary';
            }
            case 18: {
                return 'Drama';
            }
            case 10751: {
                return 'Family';
            }
            case 14: {
                return 'Fantasy';
            }
            case 36: {
                return 'History';
            }
            case 27: {
                return 'Horror';
            }
            case 10402: {
                return 'Music';
            }
            case 9648: {
                return 'Mystery';
            }
            case 10749: {
                return 'Romance';
            }
            case 878: {
                return 'Science Fiction';
            }
            case 10770: {
                return 'TV Movie';
            }
            case 53: {
                return 'Thriller';
            }
            case 10752: {
                return 'War';
            }
            case 37: {
                return 'Western';
            }
            default: {
                return 'Unknown';
            }
        }
        // use effects
    }

    const navigateMovies = (id:number, movieName: string) => {
        navigate(`${ROUTES.SHOW}${id}`, {state: {name: movieName}});
    }

    return (
        <div className="movie-box" onClick={() => navigateMovies(movieId, title)}>
            <div className="poster-box">
                <img src={poster} alt={title}/>
            </div>
            {title && genreId && voteAverage && (
                <div className="info-show">
                    <div className="text-box">
                        <div>
                            <Pill title={getGenre(genreId)} color='red'/>
                        </div>
                        <div className="movie-titles">{title}</div>
                        <div className="show-movie-pair">
                            <span>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                     className="show-svg" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path fill="white"
                                          d="M 259.3 17.8 L 194 150.2 L 47.9 171.5 c -26.2 3.8 -36.7 36.1 -17.7 54.6 l 105.7 103 l -25 145.5 c -4.5 26.3 23.2 46 46.4 33.7 L 288 439.6 l 130.7 68.7 c 23.2 12.2 50.9 -7.4 46.4 -33.7 l -25 -145.5 l 105.7 -103 c 19 -18.5 8.5 -50.8 -17.7 -54.6 L 382 150.2 L 316.7 17.8 c -11.7 -23.6 -45.6 -23.9 -57.4 0 Z"></path>
                                </svg>
                            </span>
                            <span className="movie-grading">{voteAverage} /10</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieCard;