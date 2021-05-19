import React, { ReactNode } from 'react';
import cn from 'classnames';

import s from './style.module.scss';

interface IProps {
  children: ReactNode;
  className: any;
}

const Layout = ({ children, className = null }: IProps) => (
  <div className={cn(s.root, className)}>
    { children }
  </div>
);

export default Layout;