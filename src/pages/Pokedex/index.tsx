/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import useDebounce from '../../hooks/useDebounce';
import usePokemons from '../../hooks/usePokemons';
import s from './style.module.scss';
import Layout from '../../components/Layout';

interface IQuery {
  limit: number;
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12,
  });

  const debouncedValue = useDebounce(searchValue, 1000);

  const { isLoading, isError, data } = usePokemons('getPokemons', query, [searchValue]);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('debouncedValue =>', debouncedValue);
  }, [debouncedValue]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setQuery((state: IQuery) => ({
      ...state,
      name: value,
    }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong...</div>;

  return (
    <div className={s.root}>
      <Layout className={s.flexVertical}>
        <Heading level="h3">
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <input
          className={s.pokemonInput}
          placeholder="Choose pokemon"
          type="text"
          value={searchValue}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <ul className={s.content}>
          {data.pokemons.map((pokemon: any, index: number) => {
            const { id, name_clean, stats, types, img } = pokemon;
            if (index > 8) return null;

            return (
              <PokemonCard
                key={id}
                name={name_clean}
                attack={stats.attack}
                defense={stats.defense}
                types={types}
                img={img}
              />
            );
          })}
        </ul>
      </Layout>
    </div>
  );
};

export default PokedexPage;