import React, {useContext} from 'react';
import {AppTheme} from './App';

const ChildComponent = (props) => {
    const contextValue = useContext(AppTheme);
    return (

        <>
            <hr/>
            <h4>Child Component</h4>
            <div className='form-check form-switch'>
                <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={() => contextValue.setLight(!contextValue.light)}
                    checked={contextValue.light}
                />
                <label className='form-check-label'>{contextValue.light ? 'Light' : 'Dark'}</label>
            </div>
            {contextValue.light ? (
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
