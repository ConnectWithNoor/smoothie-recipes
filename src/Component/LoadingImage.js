import React from 'react';

const LoadingImage = () => {
  return (
    <div>
      <img
        src={require('../assets/images/loader.gif')}
        alt='loader'
        width='100'
        height='100'
        className='center'
      />
    </div>
  );
};

export default LoadingImage;
