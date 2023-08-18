import React from 'react';

function SecondsCounter({ seconds }) {
    const digits = String(seconds).padStart(7, '0').split(''); // Convert seconds to an array of digits
    
    return (
        <div className="counter-container d-flex align-items-center justify-content-center">
            <i className="fa fa-clock icon-style"></i> 
            {digits.map((digit, index) => (
                <div key={index} className="p-3 m-1 border bg-white rounded">
                    {digit}
                </div>
            ))}
        </div>
    );
}

export default SecondsCounter;
