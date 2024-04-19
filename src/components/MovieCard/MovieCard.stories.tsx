import {Meta, StoryFn} from '@storybook/react';

import {IMovieCard} from "./types";
import MovieCard from "./MovieCard";
import React from 'react';

const meta = {
    title: 'Components/MovieCard',
    component: MovieCard,
    parameters: {
        layout: "centered",
        docs: {
            story: {
                inline: false,
                iframeHeight: false
            }
        }
    },
    argTypes: {
        title: {
            control: {
                type: 'text',
            }
        },
        genreId: {
            control: {
                type: 'number',
            }
        },
        movieId: {
            control: {
                type: 'number',
            }
        },
        voteAverage: {
            control: {
                type: 'number',
            }
        },
        posterPath: {
            control: {
                type: 'text',
            }
        }
    },
    tags: ["autodocs"],
} as Meta;

export default meta;

const Template: StoryFn<IMovieCard> = (args) => <MovieCard {...args} />;

/**
 * A default moviecard wit all the props.
 */
export const Default = Template.bind({});
Default.args = {
    title: 'John Wick Chapter 4',
    genreId: 28,
    movieId: 603692,
    voteAverage: 8.1,
    posterPath: 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
};