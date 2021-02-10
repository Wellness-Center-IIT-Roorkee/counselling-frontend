import React from 'react';
import NavBar from '../components/common/navBar';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <main style={{ height: '100vh', overflow: 'hidden' }}>
        {' '}
        <NavBar />
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
