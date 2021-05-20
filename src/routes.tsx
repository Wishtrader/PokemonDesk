import React from 'react';
import EmptyPage from './pages/Empty';
import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: (id?: string) => JSX.Element;
}
// eslint-disable-next-line no-shadow
export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = "POKEMON"
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation" />,
  },
];
export const NOT_LISTED: IGeneralMenu[] = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: (id) => <PokedexPage id={id} />,
  },
];
type IAccMenu = {
  [key: string]: () => JSX.Element;
};

const routes = [...GENERAL_MENU, ...NOT_LISTED].reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;