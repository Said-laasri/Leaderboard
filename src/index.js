/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './styles.css';
import displayScore from './display.js';
import API_URL from './constants.js';
import getData from './fetch.js';

const formUp = document.querySelector('.form-submit');
const refresh = document.querySelector('.refresh-btn');
const { nameinG, scoorinG } = formUp.elements;

const formUpload = async (event) => {
  event.preventDefault();
  if (!nameinG.value || !scoorinG.value) return;
  await getData({ user: nameinG.value, score: scoorinG.value });
  nameinG.value = '';
  scoorinG.value = '';
};

const renderAPI = async () => {
  const fetchData = await fetch(API_URL);
  const data = await fetchData.json();
  displayScore(data.result);
};

formUp.addEventListener('submit', formUpload);
refresh.addEventListener('click', renderAPI);
