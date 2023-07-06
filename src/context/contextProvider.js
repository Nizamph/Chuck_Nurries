import React, { useEffect } from 'react';
import jokeContext from './jokeContext';
import { useState } from 'react';
import { RANDOM_JOKS_FROM_CATEGORY } from '../utils/constants';
const JokeProvider = (props) => {
  const [jokes, setJokes] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [JockType, setJockType] = useState('');
  const [loadSpinnner, setLoadSpinner] = useState(false);
  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    console.log('calling');
    setShowModal(false);
  };
  console.log('jocktype from context', JockType);
  const JokesList = async () => {
    setLoadSpinner(true);
    try {
      if (JockType !== '') {
        console.log(JockType);
        let res = await fetch(RANDOM_JOKS_FROM_CATEGORY + JockType);
        let randomJock = await res.json();
        console.log('random jock from fetch', randomJock);
        setJokes(randomJock.value);
        setLoadSpinner(false);
      }
    } catch (err) {
      setLoadSpinner(false);
      console.log(err);
    }
  };

  const jokesData = {
    jock: jokes,
    setJock: setJockType,
    openModalHandler: openModalHandler,
    closeModalHandler: closeModalHandler,
    fetchjocks: JokesList,
    showModal: showModal,
    jockType: JockType,
    loadSpinner: loadSpinnner,
    setLoadSpinner: setLoadSpinner,
  };
  return (
    <jokeContext.Provider value={jokesData}>
      {props.children}
    </jokeContext.Provider>
  );
};

export default JokeProvider;
