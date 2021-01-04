import React from 'react';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <main style={{ height: '100vh', overflow: 'hidden' }}>{children}</main>
    </div>
  );
};

export default DefaultLayout;
