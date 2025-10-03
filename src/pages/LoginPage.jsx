import React from "react";
import Login from "../components/Auth/Login";
import Layout from "../Layout/Layout";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Estate | Register</title>
        <meta name="register" content="register page content" />
      </Helmet>
      <Layout>
        <div className="pt-20 space-y-20">
          <Login />
        </div>
      </Layout>
    </>
  );
};

export default LoginPage;
