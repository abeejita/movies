import React from 'react';
import './styles.css';
import { IButton } from './types';
import classNames from "classnames";

const Button: React.FC<IButton> = ({
  onClick,
  color,
  title,
  icon,
}) =>  {
  const buttonClass = classNames({
    "blue-color": color === 'blue',
    "gray-color": color === 'gray',
});

  return (
      <button className={buttonClass}>
        <span>
          {icon && ( // Conditional rendering based on the icon prop
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart"
                   className="show-svg" role="img"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path fill="currentColor"
                      d="M 462.3 62.6 C 407.5 15.9 326 24.3 275.7 76.2 L 256 96.5 l -19.7 -20.3 C 186.1 24.3 104.5 15.9 49.7 62.6 c -62.8 53.6 -66.1 149.8 -9.9 207.9 l 193.5 199.8 c 12.5 12.9 32.8 12.9 45.3 0 l 193.5 -199.8 c 56.3 -58.1 53 -154.3 -9.8 -207.9 Z"></path>
              </svg>
          )}
        <span>
          {title}
        </span>
        </span>
      </button>
  );
};

export default Button;