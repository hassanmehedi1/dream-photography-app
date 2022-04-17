import React, { useRef } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
   const [signInWithEmailAndPassword, user, loading, error] =
     useSignInWithEmailAndPassword(auth);
   const [sendPasswordResetEmail, sending, error1] =
     useSendPasswordResetEmail(auth);

   const emailRef = useRef("");
   const passwordRef = useRef("");
   const navigate = useNavigate();
   const location = useLocation();

   let from = location.state?.from?.pathname || "/";

   let errorMsg;
   if (error) {
     errorMsg = (
       <div>
         <p className="text-danger">Error: {error?.message}</p>
       </div>
     );
   }

   if (user) {
     navigate(from, { replace: true });
   }

   const handleSignIn = (event) => {
     event.preventDefault();
     const email = emailRef.current.value;
     const password = passwordRef.current.value;

     signInWithEmailAndPassword(email, password);
   };

   const resetPassword = async () => {
     const email = emailRef.current.value;
     if (email) {
       await sendPasswordResetEmail(email);
       alert("Email Sent");
     } else {
       alert("Please Enter Your Email address");
     }
   };

   const navigateReg = (event) => {
     navigate("/register");
   };

  return (
    <div className="w-50 mx-auto">
      <h2 className=" text-center mt-2 text-2xl font-serif font-semibold text-green-700">
        Login
      </h2>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-gray-600 font-mono font-semibold">
            Email address
          </Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            className="rounded-md"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-gray-600 font-mono font-semibold">
            Password
          </Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button
          className="w-50 mx-auto d-block mb-2 text-blue-600"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      {errorMsg}
      <p className="text-danger">
        New to Car Servicing?{" "}
        <Link
          to="/register"
          className="text-success pe-auto text-decoration-none"
          onClick={navigateReg}
        >
          Please Register
        </Link>
      </p>
      <p className="text-danger">
        Forget Password?{" "}
        <button
          className="btn btn-link pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
