import React from 'react';
import logo from './logo.svg';
import HeaderComponent from './components/header/headerComponents';
import './App.css';
import ListOfArticles from './pages/ListOfArticles/ListOfArticlesPage';

function App() {
  return (
    <div className="App">
      <header className="">
        <HeaderComponent />
      </header>
      <main>
        < ListOfArticles />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
