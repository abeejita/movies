import {Meta, StoryFn} from '@storybook/react';

import {IButton} from "./types";
import React from 'react';
import {Button} from "./index";

const meta = {
  title: 'Components/Button',
  component: Button,
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
    }
  },
  tags: ["autodocs"],
} as Meta;

export default meta;

const Template: StoryFn<IButton> = (args) => <Button {...args} />;

/**
 * A default moviecard wit all the props.
 */
export const Default = Template.bind({});
Default.args = {
  title: 'John Wick Chapter 4',
  color: 'blue',
};