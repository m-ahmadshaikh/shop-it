import React from 'react';
import { Puff } from 'react-loader-spinner';

function LoadingSpinner() {
  return (
    <div className="cv">
      <Puff
        height="100%"
        width="100%"
        radius="12"
        color="darkgray"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}

export default LoadingSpinner;
