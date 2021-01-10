import React from 'react';
import './style.css';

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1>React Books Search</h1>
        <label>Search for and save books of interest</label>
      </div>
    </header>
  )
}