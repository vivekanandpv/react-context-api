import React from 'react';

function App() {
  //  Creating context
  const AppTheme = React.createContext('light');

  return (
    <>
      <div className='container p-5'>
        <h3>Learning Context API</h3>
        <hr />
        <AppTheme.Provider value='static context prop'></AppTheme.Provider>
      </div>
    </>
  );
}

export default App;
