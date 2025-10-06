import React from 'react'
import Navbar from '../components/Navbar'
import Layout from '../Layout/Layout'
import HomeShowcase from '../components/HomeItem/HomeShowcase'
import StatsStrip from '../components/HomeItem/StatsStrip'
import Comparison from '../components/HomeItem/Comparison'
import Offering from '../components/HomeItem/Offering'
import FeaturedListings from '../components/HomeItem/FeaturedListing'
import CategoryShowcase from '../components/HomeItem/CategoryShowcase'
import MarketStories from '../components/HomeItem/MarketStories'
import ParallaxEffect from '../components/HomeItem/ParallaxEffect'
import Testimonials from '../components/HomeItem/Testmonials'
import Newsletter from '../components/HomeItem/Newsletter'
import { Helmet } from 'react-helmet'
import BusinessComparison from '../components/HomeItem/BusinessComparing'
const HomePage = () => {
  return (
    <>
    <Helmet>
        <title>Estate | Home</title>
        <meta name="home" content="home page content" />
      </Helmet>
    <Layout>
      <div className="pt-20 space-y-20">
        <HomeShowcase/>
        <StatsStrip/>
        <Comparison/>
        <Offering/>
        <BusinessComparison/>
        <FeaturedListings/>
        <CategoryShowcase/>
        <MarketStories/>
        <ParallaxEffect/>
        <Testimonials/>
        <Newsletter/>
      </div>

    </Layout>
    </>

  )
}

export default HomePage