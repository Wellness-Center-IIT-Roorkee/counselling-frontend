import React from 'react';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
