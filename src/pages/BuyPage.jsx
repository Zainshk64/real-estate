import React from "react";
import Layout from "../Layout/Layout";
import HouseDetail from "../components/BuyItem/HouseDetails";
import BuyHome from "../components/BuyItem/BuyHome";
import Helmet from "react-helmet";

const BuyPage = () => {
  return (
    <>
      <Helmet>
        <title>Estate | Buy</title>
        <meta name="buypage" content="buy page content" />
      </Helmet>
      <Layout>
        <BuyHome />
      </Layout>
    </>
  );
};

export default BuyPage;
