import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';

const JoinPage = ({ location }) => {
    const history = useHistory();
    return (
        <div className='join_page'>
            <h1>JoinPage</h1>
            <input type='text' />
            <button
                className='myButton'
                onClick={() =>
                    history.push({
                        pathname: '/room',
                        state: { previousPage: 'join' },
                    })
                }
            >
                Next Page
            </button>
        </div>
        // </motion.div>
    );
};

export default JoinPage;
