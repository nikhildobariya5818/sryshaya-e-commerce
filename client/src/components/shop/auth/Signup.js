import React, { useState } from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import { Link } from "react-router-dom";
import { signupReq } from "./fetchApi";
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Signup = (props) => {
  const history = useHistory();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
    error: false,
    loading: false,
    success: false,
    showPassword: false,
    cshowPassword: false
  });

  const togglePasswordVisibility = () => {
    setData({ ...data, showPassword: !data.showPassword });
  };
  const ctogglePasswordVisibility = () => {
    setData({ ...data, cshowPassword: !data.cshowPassword });
  };

  const alert = (msg, type) => (
    <div className={`text-sm text-${type}-500`}>{msg}</div>
  );

  const formSubmit = async () => {
    setData({ ...data, loading: true });
    if (data.cPassword !== data.password) {
      return setData({
        ...data,
        error: {
          cPassword: "Password doesn't match",
          password: "Password doesn't match",
        },
      });
    }
    try {
      let responseData = await signupReq({
        name: data.name,
        email: data.email,
        password: data.password,
        cPassword: data.cPassword,
      });
      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
          cPassword: "",
        });
      } else if (responseData.success) {
        setData({
          success: responseData.success,
          name: "",
          email: "",
          password: "",
          cPassword: "",
          loading: false,
          error: false,
        });
        // Redirect to login page after successful registration
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="max-w-md mx-auto my-10 p-8 border rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Register</h2>
        </div>
        <form className="w-full">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="name">
              Name *
            </label>
            <Input
              id="name"
              placeholder="Enter your name"
              type="text"
              value={data.name}
              onChange={(e) =>
                setData({ ...data, success: false, error: {}, name: e.target.value })
              }
            />
            {data.error ? alert(data.error.name, "red") : null}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="email">
              Email address *
            </label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              value={data.email}
              onChange={(e) =>
                setData({ ...data, success: false, error: {}, email: e.target.value })
              }
            />
            {data.error ? alert(data.error.email, "red") : null}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="password">
              Password *
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 relative">
              <input
                id="password"
                placeholder="Enter your password"
                type={data.showPassword ? "text" : "password"}
                value={data.password}
                onChange={(e) =>
                  setData({
                    ...data,
                    success: false,
                    error: {},
                    password: e.target.value,
                  })
                }
                className="w-full outline-none"
              />
              <FontAwesomeIcon
                icon={data.showPassword ? faEye : faEyeSlash}
                onClick={togglePasswordVisibility}
                className="ml-2 cursor-pointer text-gray-600"
              />
              {data.error && data.error.password ? (
                <div className="absolute left-0 bottom-full mb-1 text-sm text-red-500">
                  {data.error.password}
                </div>
              ) : null}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="confirm-password">
              Confirm Password *
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 relative">
              <input
                id="confirm-password"
                placeholder="Confirm your password"
                type={data.cshowPassword ? "text" : "password"}
                value={data.cPassword}
                onChange={(e) =>
                  setData({
                    ...data,
                    success: false,
                    error: {},
                    cPassword: e.target.value,
                  })
                }
                className="w-full outline-none"
              />
              <FontAwesomeIcon
                icon={data.cshowPassword ? faEye : faEyeSlash}
                onClick={ctogglePasswordVisibility}
                className="ml-2 cursor-pointer text-gray-600"
              />
              {data.error && data.error.cPassword ? (
                <div className="absolute left-0 bottom-full mb-1 text-sm text-red-500">
                  {data.error.cPassword}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Checkbox id="remember-me" />
              <label className="ml-2 text-sm font-medium" htmlFor="remember-me">
                Remember me*
              </label>
            </div>
            <div className="flex items-center">
              <Link to="/login" className="ml-2 text-sm font-medium ml  -4 mb-2">
                Already have an Account ?
              </Link>
            </div>
          </div>
          <Button
            className="w-full mb-4"
            onClick={(e) => {
              e.preventDefault();
              formSubmit();
            }}
          >
            Create Account
          </Button>
          <div className="flex items-center justify-center mb-4">
            <Button className="w-full" variant="secondary">
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
