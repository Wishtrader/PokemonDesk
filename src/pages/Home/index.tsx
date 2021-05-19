/* eslint-disable no-console */
import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading tag="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading tag="p">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button
            onClick={() => console.log('Click Button1!')}
            >
            See pokemons
          </Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;