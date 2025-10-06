import React from 'react'
import Section1 from '../components/FeatureItem/Section1'
import Layout from '../Layout/Layout'
import Section2 from '../components/FeatureItem/Section2'
import Section3 from '../components/FeatureItem/Section3'
import Section4 from '../components/FeatureItem/Section4'
const FeaturePage = () => {
  return (
    <>
    <Layout>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>

    </Layout>
    </>
  )
}

export default FeaturePage