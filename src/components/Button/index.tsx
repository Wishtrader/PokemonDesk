import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface IButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    size?: 'small' | 'wide';
    color?: 'green' | 'yellow';
}

const Button: React.FC<IButtonProps> = ({ children, onClick, color, size }) => {
    return (
        <button
            className={cn(s.root, s[size as keyof typeof s], s[color as keyof typeof s])}
            type="button"
            onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;