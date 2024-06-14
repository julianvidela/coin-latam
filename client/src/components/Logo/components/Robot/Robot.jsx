import React from 'react';
import { Head, Eyes, Eye } from '../..';

const Robot = ({ _css }) => {
    return (
        <div className={_css.robot_container}>
            <Head _css={_css}>
                <Eyes _css={_css}>
                    <Eye _css={_css} />
                    <Eye _css={_css} />
                </Eyes>
            </Head>
        </div>
    );
};

export default Robot;
