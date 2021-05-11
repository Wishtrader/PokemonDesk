import React from 'react';
import cn from 'classnames';

import style from './App.modules.scss';
import './custom.css'

const App = () => {
  return(
    <div className={cn(style.header, ' color')}>React Component</div>
  )
}

export default App;