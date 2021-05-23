import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import req, { IPokemonsResponse } from '../../utils/request';
import s from './style.module.scss';

const usePokemons = () => {
  const [data, setData] = useState<IPokemonsResponse>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    req('getPokemons')
      .then((result) => setData(result))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export interface IPokedexPage {
  id?: string | number;
}

const PokedexPage: React.FC<IPokedexPage> = ({ id }: IPokedexPage) => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <Heading level="h3">Is Loading...</Heading>;
  }

  if (isError) {
    return <Heading level="h3">Something wrong!</Heading>;
  }

  return (
    <div className={s.root}>
      <Layout className={s.flexVertical}>
        <Heading level="h4">
          {data?.total}<b> Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.content}>
          {data?.pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name_clean}
              attack={pokemon.stats.attack}
              defense={pokemon.stats.defense}
              img={pokemon.img}
              types={pokemon.types}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
};
export default PokedexPage;