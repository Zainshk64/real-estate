import React from "react";
import Login from "../components/Auth/Login";
import Layout from "../Layout/Layout";

const LoginPage = () => {
  return (
    <Layout>
      <div className="pt-20 space-y-20">
        <Login />
      </div>
    </Layout>
  );
};

export default LoginPage;
