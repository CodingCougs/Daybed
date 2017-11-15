import React from 'react';

import Navbar from '../components/navbar/navbar'


export default ({ children }) => {
  return (
    <div className={'full'}>
      <Navbar />
      {children}
    </div>
  );
}