import React, { useState } from 'react';
import ParentComponent from './ParentComponent';

export const AppTheme = React.createContext();

function App() {
  const [light, setLight] = useState(true);

  const handleToggle = () => {
    setLight(!light);
  };

  return (
    <>
      <div className='container p-5'>
        <h3>Learning Context API</h3>
        <hr />
        <div className='form-check form-switch'>
          <input
            className='form-check-input'
            type='checkbox'
            onChange={handleToggle}
            checked={light}
          />
          <label className='form-check-label'>{light ? 'Light' : 'Dark'}</label>
        </div>
        <AppTheme.Provider value={{light, setLight}}>
          <ParentComponent />
        </AppTheme.Provider>
      </div>
    </>
  );
}

export default App;
