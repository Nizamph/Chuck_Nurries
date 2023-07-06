import React from 'react';
import { useState, useContext } from 'react';
import jokeContext from '../context/jokeContext';
import Loader from './Loader';

const RandomJocksModal = ({ randomJock }) => {
  console.log('random jock', randomJock);
  const JockCtx = useContext(jokeContext);
  const jockType = JockCtx.jockType;
  const loadSpinner = JockCtx.loadSpinner;
  const fetchAgainHandler = () => {
    JockCtx.setJock(jockType);
    JockCtx.fetchjocks();
  };
  return (
    <div className='jockModal'>
      <div className='modalContainer'>
        <div className='modalHead'>
          <header>{jockType}</header>
          <div className='closeDiv'>
            <button onClick={() => JockCtx.closeModalHandler()}>x</button>
          </div>
        </div>
        <main className='modalContent'>
          {loadSpinner ? <Loader /> : <h3>{randomJock}</h3>}
        </main>
        <div className='fetchDiv'>
          <button
            className='fetchBtn'
            onClick={fetchAgainHandler}>
            Get jock
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomJocksModal;
