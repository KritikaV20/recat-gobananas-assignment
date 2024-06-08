import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState('Home');

  const pages = ['Home', 'Posts', 'About'];

  return (
    <div>
      <Navigation pages={pages} setPage={setPage} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ItemList searchQuery={searchQuery} />
    </div>
  );
};

export default App;
