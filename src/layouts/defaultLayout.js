import React from 'react';
import NavBar from '../components/common/navBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <main style={{ height: '100vh', overflow: 'hidden' }}>
        {' '}
        <NavBar />
        {children}
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={3}
        />
      </main>
    </div>
  );
};

export default DefaultLayout;
