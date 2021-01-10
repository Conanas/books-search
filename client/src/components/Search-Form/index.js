import React from 'react';
import './style.css';

export default function SearchForm() {
  return (
    <form className="search-form container">
      <header className="form-header">
        <h2>Book Search</h2>
      </header>
      <label>Book</label>
      <input className="search-input" placeholder="Search for book title" />
      <div className="submit-div">
        <input className="form-search-submit" type="submit" />
      </div>
    </form>
  )
}