import React from 'react';
import ListItem from '../List-Item/';
import './style.css';

export default function ResultsList() {
  return (
    <div className="container">
      <header>
        <h2>Results</h2>
      </header>
      <ul className="results-list">
        <ListItem />
      </ul>
    </div >
  )
}