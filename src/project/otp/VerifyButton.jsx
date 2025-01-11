import React from 'react'
import{Link } from 'react-router-dom'


const VerifyButton = ({ handleVerify }) => {
  return (
    <Link to='/create-new-password'>
    <button
      onClick={handleVerify}
      className="mb-4 w-full rounded-lg bg-[#04153F] px-4 py-2 text-sm font-medium text-white hover:bg-[#04153F]/90 focus:outline-none sm:text-base"
    >
      Verify
    </button>
    </Link>
  );
};

export default VerifyButton;
