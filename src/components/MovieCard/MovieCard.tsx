import React from 'react';
import {IMAGE_SOURCE} from "../../constants/moviesMock";
import {IMovieCard} from "./types";
import Pill from "../Pill/Pill";
import './MovieCard.css';

const MovieCard: React.FC<IMovieCard> = ({
    title,
    genreId,
    movieId,
    voteAverage,
    posterPath,
}) => {
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
    }
  return (
    <div className="movie-box">
        <div className="poster-box">
            <img src={poster} alt={title}/>
        </div>
        <div className="text-box">
            <div className="genre-box">
                <div className="movie-genre">
                    <Pill title={getGenre(genreId)} color='red'/>
                </div>
            </div>
            <div className="info-box">
                <div className="movie-titles">{title}</div>
                <div className="movie-grading">{voteAverage} /10</div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard;