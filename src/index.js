import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));  /*This is new with react 18.
                                                                      1) Here we are fetching from the DOM
                                                                      2) To understand more open the index.html file and search for root id 
                                                                      in a tag */

root.render(<App/>);