import React, { useState } from 'react';
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import {  useHistory } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { UpdatePassword } from './fetchApi';


const Forget_Password_Update = () => {
  const history = useHistory();
  // const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await UpdatePassword(newPassword);
      if (response.message) {
        history.push("/");
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError('User Not Found');
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="max-w-md mx-auto my-10 p-8 border rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Update Password</h2>
        </div>
        <form onSubmit={handlePasswordUpdate}>
          <div className="mb-6">
            {/* <label className="block text-sm font-medium mb-2" htmlFor="current-password">
              Current Password *
            </label>
            <Input
              className="w-full"
              id="current-password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            /> */}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="new-password">
              New Password *
            </label>
            <Input
              className="w-full"
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="confirm-password">
              Confirm New Password *
            </label>
            <Input
              className="w-full"
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button className="w-full mb-6" type="submit">
            Update Password
          </Button>
          {/* <div className="flex items-center justify-between mb-6">
            <Checkbox id="remember-me" />
            <label className="text-sm" htmlFor="remember-me">
              Remember me
            </label>
            <Link className="text-sm" to="#">
              Lost your password?
            </Link>
          </div>
          <div className="flex items-center justify-center mb-6">
            <div className="border-t border-gray-300 flex-grow mr-3" />
            <div className="text-sm">or</div>
            <div className="border-t border-gray-300 flex-grow ml-3" />
          </div>
          <Button className="w-full mb-6" variant="secondary">
            Sign In With Google
          </Button>
          <div className="text-center">
            <Link className="text-sm" to="#">
              Create an account
            </Link>
          </div> */}
        </form>
      </div>
    </Container>
  );
};

export default Forget_Password_Update;
