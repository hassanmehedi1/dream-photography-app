import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";

const Register = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  let errorMsg;
  if (error) {
    errorMsg = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }

  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    console.log(user);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    //  alert("Updated profile");
    
  };
  
  if(user){
    navigate("/login");
  }

  return (
    <div className="register-form">
      <h2 className="text-center text-2xl font-semibold text-blue-500">
        Please Register
      </h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Your Name" />

        <input type="email" name="email" placeholder="Email Address" required />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <div className="flex">
          <div>
            <input
              onClick={() => setAgree(!agree)}
              type="checkbox"
              name="terms"
              id="terms"
            />
          </div>
          <div>
            <p className={agree ? "ps-2 text-success" : "ps-2"} htmlFor="terms">
              Accept Terms and Conditions
            </p>
          </div>
        </div>

        <input
          disabled={!agree}
          className="w-50 mx-auto d-block mb-2 mt-2 btn btn-primary text-blue-500"
          type="submit"
          value="Register"
        />
      </form>
      {errorMsg}
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>{" "}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;