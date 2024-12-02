import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/AppComponent.css';

function App() {
  return (
    <Router basename="/react">
      <div className='App container app-component'>
        <Header />
        <Routes>
          <Route path='/' element={<>
            <Home title="주제 1" />
            <hr />
            <Home title="주제 2" />
            <hr />
            <Home title="주제 3" />
            <hr />
            <Home title="주제 4" />
          </>} />
        <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;