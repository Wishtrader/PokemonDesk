import React from 'react';
import Header from '../../components/Header';
import s from './style.module.scss';

interface EmptyPageProps {
  title?: string
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div className={s.root}>
      <Header />
      This is Empty page for {title}!
    </div>
  );
}; 

export default EmptyPage;