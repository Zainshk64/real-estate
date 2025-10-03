import React from 'react'
import Navbar from '../components/Navbar'
import Layout from '../Layout/Layout'
import HomeShowcase from '../components/HomeItem/HomeShowcase'
import StatsStrip from '../components/HomeItem/StatsStrip'
import Comparison from '../components/HomeItem/Comparison'
import Offering from '../components/HomeItem/Offering'
import HouseComparing from '../components/HomeItem/HouseComparing'
import FeaturedListings from '../components/HomeItem/FeaturedListing'
import CategoryShowcase from '../components/HomeItem/CategoryShowcase'
import MarketStories from '../components/HomeItem/MarketStories'
import ParallaxEffect from '../components/HomeItem/ParallaxEffect'
import Testimonials from '../components/HomeItem/Testmonials'
import Newsletter from '../components/HomeItem/Newsletter'
const HomePage = () => {
  return (
    <Layout>
      <div className="pt-20 space-y-20">
        <HomeShowcase/>
        <StatsStrip/>
        <Comparison/>
        <Offering/>
        <HouseComparing/>
        <FeaturedListings/>
        <CategoryShowcase/>
        <MarketStories/>
        <ParallaxEffect/>
        <Testimonials/>
        <Newsletter/>
      </div>

    </Layout>
  )
}

export default HomePage