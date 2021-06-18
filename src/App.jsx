import React from 'react';
import ParentComponent from './ParentComponent';

export const AppTheme = React.createContext();

function App() {
  //  Creating context

  return (
    <>
      <div className='container p-5'>
        <h3>Learning Context API</h3>
        <hr />
        <AppTheme.Provider value='light'>
          <ParentComponent />
        </AppTheme.Provider>
      </div>
    </>
  );
}

export default App;
