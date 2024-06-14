import React from "react";

export const LoadingBar = ({ _css }) => {
  return (
    <div className={`${_css.loading_bar}`}>
      <div className={`${_css.circle} ${_css.c1}`} />
      <div className={`${_css.circle} ${_css.c2}`} />
      <div className={`${_css.circle} ${_css.c3}`} />
      <div className={`${_css.circle} ${_css.c4}`} />
    </div>
  );
};
