import React from 'react';

const OtpInput = ({ otp, inputRefs, activeInput, handleChange, handleKeyDown, handleClick }) => {
  return (
    <div className="mb-6 flex justify-center gap-2">
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          ref={(ref) => {
            inputRefs.current[index] = ref;
          }}
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onClick={() => handleClick(index)}
          className={`h-8 w-8 rounded-lg border text-center text-lg outline-none sm:h-10 sm:w-10 sm:text-xl
            ${index === activeInput ? 'border-[#04153F]' : 'border-gray-300'}
            focus:border-[#04153F] `}
        />
      ))}
    </div>
  );
};

export default OtpInput;
