import React from 'react';

const Eyes = ({ _css, children }) => {
    return (
        <div className={_css.eyes_wrapper}>
            {children}
        </div>
    );
};

export default Eyes;
    