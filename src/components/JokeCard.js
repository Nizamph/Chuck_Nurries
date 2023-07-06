import React from 'react';
import RandomJocksModal from './RandomJocksModal';
import { useContext } from 'react';
import jokeContext from '../context/jokeContext';
const JokeCard = ({ jockCategoryName }) => {
  const jockCntx = useContext(jokeContext);

  const jockTriggerHandler = () => {
    jockCntx.openModalHandler();
    console.log('triggering');
    console.log(jockCategoryName);
    jockCntx.fetchjocks();
    jockCntx.setJock(jockCategoryName);
  };

  return (
    <>
      <button onClick={jockTriggerHandler}>
        <h3>{jockCategoryName}</h3>
        <p>
          Unlimited Jokes On <span>{jockCategoryName}</span>
        </p>
      </button>
    </>
  );
};

export default JokeCard;
