import React from 'react';
import HeaderComponent from './components/header/headerComponents';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import './App.css';
import ListOfArticles from './pages/ListOfArticles/ListOfArticlesPage';
import "./assets/fonts/Montserrat-Thin.ttf";
import "./assets/fonts/Montserrat-BlackItalic.ttf";
import "./assets/fonts/Montserrat-Bold.ttf";
import "./assets/fonts/Montserrat-BoldItalic.ttf";
import "./assets/fonts/Montserrat-ExtraBold.ttf";
import "./assets/fonts/Montserrat-ExtraBoldItalic.ttf";
import "./assets/fonts/Montserrat-ExtraLight.ttf";
import "./assets/fonts/Montserrat-ExtraLightItalic.ttf";
import "./assets/fonts/Montserrat-Italic.ttf";
import "./assets/fonts/Montserrat-Light.ttf";
import "./assets/fonts/Montserrat-LightItalic.ttf";
import "./assets/fonts/Montserrat-Medium.ttf";
import "./assets/fonts/Montserrat-MediumItalic.ttf";
import "./assets/fonts/Montserrat-Regular.ttf";
import "./assets/fonts/Montserrat-SemiBold.ttf";
import "./assets/fonts/Montserrat-SemiBoldItalic.ttf";
import "./assets/fonts/Montserrat-Thin.ttf";
import "./assets/fonts/Montserrat-ThinItalic.ttf";
import footer_img from "./assets/img/bitmap_2@2x.png";

function App() {
  return (
    <div className="App">
      <header className="">
        <HeaderComponent />
      </header>
      <main>
        <ListOfArticles />
      </main>
      <footer>
        <div>
          <p> GOT JOKES? GET PAID</p>
          <p>FOR SUBMITTING!</p>
          <a href="#">SUBMIT JOKE</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
