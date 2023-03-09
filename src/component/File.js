import React, { useState } from 'react';

const File = () => {
    const [num, setNum] = useState(0);

    const increase = () => {
        setNum(num + 1);
    };

    const decrease = () => {
        setNum(num - 1);
    };

    const reset = () => {
        setNum(0);
    }

    return (
        <div className='container'>
            <div className='sub-container'>
                <h1 className='title'>{num}</h1>
                <div className='counter-btn'>
                    <button id='increment' onClick={increase}>Increase</button>
                    <button id='resetBtn' onClick={reset}>Reset</button>
                    <button id='decrement' onClick={decrease}>Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default File;