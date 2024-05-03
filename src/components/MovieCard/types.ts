export interface IMovieCard {
    /**
     * The title of the movie
     */
    title: string;
    /**
     * The genre ID of the movie
     */
    genreId?: number;
    /**
     * The ID of the movie
     */
    movieId: number;
    /**
     * The average vote of the movie
     */
    voteAverage?: number;
    /**
     * The path to the poster of the movie
     */
    posterPath: string;
}