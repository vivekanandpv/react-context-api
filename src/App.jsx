import React from 'react';

//  Creating context
export const AppTheme = React.createContext();

function App() {
  return (
    <>
      <div className='container p-5'>
        <h3>Learning Context API</h3>
        <hr />
        <AppTheme.Provider value='light'></AppTheme.Provider>
      </div>
    </>
  );
}

export default App;
