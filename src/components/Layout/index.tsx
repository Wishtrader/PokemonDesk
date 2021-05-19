import React from 'react';
import cn from 'classnames';

import s from './style.module.scss';

interface IProps {
    className: string | null;
}

const Layout: React.FC<IProps> = ({ children, className = null }) => {
    return (
      <div className={cn(s.root, className)}>
        {children}
      </div>
    );
};

export default Layout;