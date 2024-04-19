import {Meta, StoryFn} from '@storybook/react';

import {IPill} from "./types";
import Pill from "./Pill";
import React from 'react';

const meta = {
    title: 'Components/Pill',
    component: Pill,
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
        color: {
            control: {
                type: 'text',
            }
        },
        movieId: {
            control: {
                type: 'number',
            }
        }
    },
    tags: ["autodocs"],
} as Meta;

export default meta;

const Template: StoryFn<IPill> = (args) => <Pill {...args} />;

/**
 * A default pill with all the props.
 */
export const Default = Template.bind({});
Default.args = {
    title: 'Action',
    color: 'red',
};