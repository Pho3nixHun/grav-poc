import van from 'vanjs-core';
import { AppVM } from './app.model.ts';

const {
  div
} = van.tags;

export const AppComponent = (vm: AppVM) =>
  div(
    {
      class: 'light surface md-typescale-body-medium h-screen flex flex-col',
    },
    'It works'
  );
