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
          <Heading tag="h1"> Heading H1 </Heading>
          <Heading tag="h3"> Heading H3</Heading>
          <Heading tag="p"> Paragraph </Heading>
        <h1>
          <b>Find</b> all your favorite <b>Pokemon</b>
        </h1>
        <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
        <Button
          onClick={() => console.log('Click Button1!')}
          >
          See pokemons
        </Button>
        <Button
          onClick={() => console.log('Click Button2!')}
          color="yellow" size="wide"
          >
          See pokemons
        </Button>
        <Button
          onClick={() => console.log('Click Button2!')}
          color="green" size="small"
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