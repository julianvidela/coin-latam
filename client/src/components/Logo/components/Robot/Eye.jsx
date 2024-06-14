import React from 'react';

export const Eye = ({ _css }) => {
    return (
        <div className={_css.eye}>
            <div className={_css.closed} />
            <div className={_css.spark} />
            <div className={_css.small_spark} />
        </div>
    );
};
