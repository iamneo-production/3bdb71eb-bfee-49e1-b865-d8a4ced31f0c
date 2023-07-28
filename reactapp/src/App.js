import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import Reg from './pages/register';
import Entertaiment from './pages/entertaiment';
import LatestNews from './pages/newsapi';
import Science from './pages/science';
import BussinessNews from './pages/bussiness';
import Sports from './pages/game';
import Tech from './pages/technology';
import Health from './pages/health';
import store from './pages/store';
import { Provider } from 'react-redux';
import ContactUs from './pages/contactus';
import SearchNavbar from './components/SearchNavbar';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <SearchNavbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/register" element={<Reg />} />
          <Route path="/home" element={<Home />} />
          <Route path="/entertaiment" element={<Entertaiment />} />
          <Route path="/newsapi" element={<LatestNews />} />
          <Route path="/science" element={<Science />} />
          <Route path="/bussiness" element={<BussinessNews />} />
          <Route path="/game" element={<Sports />} />
          <Route path="/technology" element={<Tech />} />
          <Route path="/health" element={<Health />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/SearchNavbar" element={<SearchNavbar />} />

        </Routes>
      </div>
    </Provider>
  );
}

export default App;
