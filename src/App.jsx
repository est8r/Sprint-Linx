import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Products from './components/Products/Products.jsx';
import FriendForm from './components/FriendForm/FriendForm.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Products />
      <FriendForm />
      <Footer />
    </div>
  );
}

export default App;
