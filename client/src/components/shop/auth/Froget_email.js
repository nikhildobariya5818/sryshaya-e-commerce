import React, { useState } from 'react';
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { useHistory } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { getOtp } from './fetchApi';

export const ForgetEmail = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegisterClick = () => {
    history.push('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await getOtp(email);
      if (response.message) {
        history.push('/Forget_otp');
      }
      else {
        setError(response.data.error);
      }
    } catch (error) {
      console.log(error);
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="max-w-md mx-auto my-10 p-8 border rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Forgot Password</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email address *
            </label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button className="w-full mb-6" type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Send OTP'}
          </Button>
          <div className="flex items-center justify-center mb-6">
            <div className="border-t border-gray-300 flex-grow mr-3" />
            <div className="text-sm">or</div>
            <div className="border-t border-gray-300 flex-grow ml-3" />
          </div>
          <Button className="w-full" variant="outline" onClick={handleRegisterClick}>
            Login
          </Button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </Container>
  );
};
