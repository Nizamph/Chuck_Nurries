import { createContext } from 'react';

const jokeContext = createContext({
  jock: '',
  setJock: '',
  openModalHandler: function () {},
  closeModalHandler: function () {},
  showModal: false,
  jockType: '',
  fetchjocks: function () {},
  loadSpinner: false,
  setLoadSpinner: function () {},
});

export default jokeContext;
