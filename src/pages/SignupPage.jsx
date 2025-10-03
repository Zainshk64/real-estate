import React from "react";
import Layout from "../Layout/Layout";
import Signup from "../components/Auth/Signup";

const SignupPage = () => {
  return (
    <Layout>
      <div className="pt-20 space-y-20">
        <Signup />
      </div>
    </Layout>
  );
};

export default SignupPage;
