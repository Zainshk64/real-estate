import React from 'react'
import MarketingDashboard from '../components/MarketTeam/MarketingDashboard'
import { Helmet } from 'react-helmet'

const MarketingPage = () => {
  return (
    <>
    
    <Helmet>
        <title>Estate | Market Team Dashboard </title>
        <meta name="market" content="market page content" />
      </Helmet>
        <MarketingDashboard/>
    </>
  )
}

export default MarketingPage