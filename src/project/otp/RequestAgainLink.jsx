import React from 'react';

const RequestAgainLink = ({ handleRequestAgain }) => {
  return (
    <div className="text-center text-sm sm:text-base">
      <span className="text-white">Didn't receive code? </span>
      <a
        href="#"
        onClick={handleRequestAgain}
        className="text-white"
      >
        Request again
      </a>
    </div>
  );
};

export default RequestAgainLink;
