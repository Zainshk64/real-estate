import React from 'react'
import SalesTeamDashboard from '../components/SaleTeam/SaleTeamDash'
import { Helmet } from 'react-helmet'

const SaleTeamPage = () => {
  return (
    <>
    <Helmet>
        <title>Estate | SaleTeam Dashboard </title>
        <meta name="saleteam" content="saleteam page content" />
      </Helmet>
    <SalesTeamDashboard/>
    </>
  )
}

export default SaleTeamPage