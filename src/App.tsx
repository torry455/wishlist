import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import WishPage from './pages/WishPage';
import { WishProvider } from './context/WishContext';

const App: React.FC = () => {
  return (
    <div className="dark bg-[#0f0f1a] text-white min-h-screen font-sans">
      <WishProvider>
        <BrowserRouter basename="/wishlist">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/wish/:id" element={<WishPage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </WishProvider>
    </div>
  );
};

export default App;