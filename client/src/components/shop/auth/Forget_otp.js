import React, { useState, useRef } from 'react';
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useHistory } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { otpVerification } from './fetchApi';

const Forget_otp = () => {
  const history = useHistory();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
  if (value.length > 1) {
    return;
  }

  const updatedOtp = [...otp];
  updatedOtp[index] = value;
  setOtp(updatedOtp);

  if (inputRefs.current[index + 1]) {
    inputRefs.current[index + 1].focus();
  }
};


  const handleVerifyOtp = async () => {
    const enteredOtp = otp.join('');

    try {
      const response = await otpVerification(enteredOtp);
      if (response.message) {
        history.push('/Forget_Password_Update');
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError('Invalid OTP');
      console.log(error);
    }
  };

  const isOtpComplete = otp.every(value => value !== '');

  return (
    <Container>
      <div className="max-w-md mx-auto my-10 p-8 border rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Enter OTP</h2>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="otp">
              Enter OTP *
            </label>
            <div className="flex gap-1">
              {[...Array(6)].map((_, index) => (
                <Input
                  key={index}
                  id={`otp-${index + 1}`}
                  maxLength={1}
                  placeholder=''
                  type="text"
                  value={otp[index] || ''}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  ref={(input) => inputRefs.current[index] = input}
                />
              ))}
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button className="w-full mb-6" onClick={handleVerifyOtp} disabled={!isOtpComplete}>
            Verify OTP
          </Button>
        </form>
        {/* <div className="text-center">
          <Link to="/" className="text-sm">
            Back to Home
          </Link>
        </div> */}
      </div>
    </Container>
  );
};

export default Forget_otp;
