import React from 'react'
import Layout from '../Layout/Layout'
import { Helmet } from 'react-helmet'
import PriceSection from '../components/PricingItem/PriceSection'
const PricingPage = () => {
  return (
    <>
    <Helmet>
        <title>Estate | Princing</title>
        <meta name="notfoundpage" content="not-found page content" />
      </Helmet>
    <Layout>
        <PriceSection/>
    </Layout>
    </>
  )
}

export default PricingPage