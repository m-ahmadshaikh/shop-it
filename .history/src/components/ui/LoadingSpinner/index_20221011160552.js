import React from 'react';

function LoadingSpinner(props) {
  return (
    <div className={classes.loadingSpinner}>
      <Puff
        height="200"
        width="200"
        radius="12"
        color="darkgray"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}

export default LoadingSpinner;
