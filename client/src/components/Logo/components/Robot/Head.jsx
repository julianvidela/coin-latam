import React from 'react';

export const Head = ({ _css, children }) => {
    return (
        <div className={_css.robot_head}>
            {children}
        </div>
    );
};

