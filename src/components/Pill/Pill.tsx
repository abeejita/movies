import React from 'react';
import {IPill} from "./types";
import classNames from "classnames";
import './Pill.css';
const Pill: React.FC<IPill> = ({
    title,
    color,
}) => {
    const pillClass = classNames({
        "pill-text": true,
        "red-color": color === 'red',
        "yellow-color": color === 'yellow',
        "green-color": color === 'green',
    });
    return (
        <div className = {pillClass}>
            {title}
        </div>
    )
};

export default Pill;