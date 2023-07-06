import React from 'react';
import JokeCard from './JokeCard';
import { JOCKS_CATEGORIES } from '../utils/constants';
import { useEffect, useState, useContext } from 'react';
import RandomJocksModal from './RandomJocksModal';
import jokeContext from '../context/jokeContext';

const JokeCards = () => {
  const [jockCategories, setJockCategories] = useState([]);
  const jockCntx = useContext(jokeContext);
  console.log('jocks from crads', jockCntx.jock);
  useEffect(() => {
    try {
      getJocksCategories();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getJocksCategories = async () => {
    jockCntx.setLoadSpinner(true);
    const res = await fetch(JOCKS_CATEGORIES);
    const jokes = await res.json();
    setJockCategories(jokes);
    jockCntx.setLoadSpinner(false);
  };

  return (
    <>
      {jockCategories.map((jockCategory) => (
        <JokeCard
          key={Math.random()}
          jockCategoryName={jockCategory}
        />
      ))}
      {jockCntx.showModal && <RandomJocksModal randomJock={jockCntx.jock} />}
    </>
  );
};

export default JokeCards;
