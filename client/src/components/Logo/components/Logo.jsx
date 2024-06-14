"use client"
import React from 'react';
import css from '../styles/logo.module.css';
import constants_css from '../styles/constants.module.css';
import { LoadingBar, Robot } from '..';

const Logo = () => {
    return (
        <div className={`${css.container} ${constants_css.constants}`}>
            <Robot _css={css} />
            <LoadingBar _css={css} />
        </div>
    );
};

export default Logo;
