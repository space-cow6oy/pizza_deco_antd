import { Route, Routes } from 'react-router-dom';
// import { createContext, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';
import { Cart } from './pages/Cart/Cart';
import { Flex } from 'antd';

const App: React.FC = () => {
  return (
    <Flex vertical style={{ width: 'calc(100vw - 10%)', margin: '0 auto' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Flex>
  );
};

export default App;
