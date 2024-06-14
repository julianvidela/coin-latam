import React from 'react';

const Head = ({ _css, children }) => {
    return (
        <div className={_css.robot_head}>
            {children}
        </div>
    );
};

export default Head;
