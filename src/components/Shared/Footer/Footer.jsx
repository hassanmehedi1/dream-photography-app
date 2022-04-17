import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-5 d-flex justify-content-center relative bottom-0 w-100">
      <p>
        <small>
          Copyright @ {new Date().getFullYear()} all rights reserved{" "}
        </small>
      </p>
    </footer>
  );
};

export default Footer;
