import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Layout from "../Layout/Layout";

const ErrorPage = () => {
  return (
    <Layout>
      <div className="flex flex-col py-96 items-center justify-center h-[70vh] md:h-[90vh]">
        <div className="hidden md:flex">
          <DotLottieReact
            src="/Error404.lottie"
            loop
            autoplay
            style={{ width: 400, height: 400 }}
          />
        </div>
        <div className="md:hidden">
          <DotLottieReact
            src="/Error404.lottie"
            loop
            autoplay
            style={{ width: 300, height: 300 }}
          />
        </div>
        <h1 className="mt-6 text-2xl font-bold text-forest">
          Oops! Page not found
        </h1>
        <p className="text-sm text-center text-ink/70 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>
      </div>
    </Layout>
  );
};

export default ErrorPage;
