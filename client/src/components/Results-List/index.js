import React from 'react';
import './style.css';

export default function ResultsList() {
  return (
    <div className="container">
      <header>
        <h2>Results</h2>
      </header>
      <ul className="results-list">
        <li>
          <header>
            <div>
              <h3>Harry Potter</h3>
              <label>Written by: JK Rowling</label>
            </div>
            <div className="view-save-buttons">
              <button>View</button>
              <button>Save</button>
            </div>
          </header>
          <div>
            <img className="book-image" src="https://via.placeholder.com/150" alt="book" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </li>
      </ul>
    </div >
  )
}