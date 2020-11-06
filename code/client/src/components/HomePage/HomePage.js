import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();
    return (
        <div className='home_page'>
            <h1>HomePage</h1>
            <input type='text' />
            <button
                className='myButton'
                onClick={() =>
                    history.push({
                        pathname: '/join',
                        state: { previousPage: 'home' },
                    })
                }
            >
                Next Page
            </button>
        </div>
    );
};

export default HomePage;
