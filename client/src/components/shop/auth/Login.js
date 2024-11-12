import React, { useState, useContext } from "react";
import { Input } from "../../ui/input";
import { Checkbox } from "../../ui/checkbox";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { LayoutContext } from "../index";
import { loginReq } from "./fetchApi";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const history = useHistory();
  const handleRegisterClick = () => {
    history.push('/Register');
  };
  // eslint-disable-next-line
  const { data: layoutData, dispatch: layoutDispatch } =
  useContext(LayoutContext);

  const [data, setData] = useState({
    email: "",
    password: "",
    error: false,
    loading: true,
    showPassword: false,
  });
  const togglePasswordVisibility = () => {
    setData({ ...data, showPassword: !data.showPassword });
  };

  const alert = (msg) => <div className="text-xs text-red-500">{msg}</div>;

  const formSubmit = async () => {
    setData({ ...data, loading: true });
    try {
      let responseData = await loginReq({
        email: data.email,
        password: data.password,
      });
      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
        });
      } else if (responseData.token) {
        setData({ email: "", password: "", loading: false, error: false });
        localStorage.setItem("jwt", JSON.stringify(responseData));
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="max-w-md mx-auto my-10 p-8 border rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Login</h2>
          {/* <button className="text-lg">X</button> */}
        </div>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="email">
              Email address *
            </label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={data.email}
              onChange={(e) =>
                setData({ ...data, email: e.target.value, error: false })
              }
            />
            {data.error && alert(data.error)}
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Password *
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <input
                id="password"
                placeholder="Enter your password"
                type={data.showPassword ? "text" : "password"}
                value={data.password}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value, error: false });
                  layoutDispatch({ type: "loginSignupError", payload: false });
                }}
                className="w-full outline-none"
              />
              <FontAwesomeIcon
                icon={data.showPassword ? faEye : faEyeSlash}
                onClick={togglePasswordVisibility}
                className="ml-2 cursor-pointer text-gray-600"
              />
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
              <Link to="/Froget_email" className="ml-2 text-sm font-medium">
                Lost your password?
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
            Login
          </Button>
          <div className="flex items-center justify-center mb-4">
            <Button className="w-full" variant="secondary"
            // onClick={loginWithGoogle} 
            >
              Sign In With Google
            </Button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <hr className="w-full" />
            <span className="px-3 text-sm">or</span>
            <hr className="w-full" />
          </div>
          <Button className="w-full" variant="outline" onClick={handleRegisterClick}>
            Create an account
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
