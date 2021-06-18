import React, { useContext } from 'react';
import { AppTheme } from './App';

const ChildComponent = (props) => {
  const theme = useContext(AppTheme);
  return (
    <>
      {theme ? (
        <div className='alert alert-light'>
          This is child component in light theme
        </div>
      ) : (
        <div className='alert alert-dark'>
          This is child component in dark theme
        </div>
      )}
    </>
  );
};

export default ChildComponent;
