import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import "../css/navbar.css"; // Make sure to import the CSS file with appropriate styles

function SearchNavbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle the search submission logic here, e.g., redirect to search results page with the search query.
    console.log("Search Query:", searchQuery);
    // Implement your logic to handle the search submission and redirect if needed.
  };

  return (
    <nav className="search-navbar">
      <div className="navbar-logo">
        <a href="/"></a>
      </div>

      {/* Search Box */}
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button type="submit" className="search-button">
          <MdSearch className="search-icon" />
        </button>
      </form>
    </nav>
  );
}

export default SearchNavbar;
