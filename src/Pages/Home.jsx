import React from 'react'
import CatBar from '../components/CatBar'
import HomeSlider from '../components/HomeSlider'
import LatestColl from '../components/LatestColl'
import MenSubCats from '../components/MenSubCats'

const Home = () => {
  return (
    <div>
      <CatBar />
      <HomeSlider />
      <LatestColl />
      <MenSubCats />
    </div>
  )
}

export default Home
