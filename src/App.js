import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PhoneDetailComponent from './components/PhoneDetailComponent';
import PhoneListContainer from './components/PhoneListContainer';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/phones" element={<PhoneListContainer />} />
      <Route path="*" element={<PhoneListContainer />} />
      <Route path="/phone/:id" element={<PhoneDetailComponent />} />
    </Routes>
  </Router>
);

export default App;
