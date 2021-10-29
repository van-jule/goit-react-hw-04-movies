import React from 'react';
import Loader from 'react-loader-spinner';

const FuncLoader = () => {
  return (
    <div className="loader">
      <Loader type="TailSpin" color="#303f9f" height={80} width={80} />
    </div>
  );
};

export default FuncLoader;
