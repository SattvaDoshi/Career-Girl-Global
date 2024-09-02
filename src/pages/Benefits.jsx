import React from 'react'
import TedTalk from '../components/benefits/TedTalk'
import Podcast from '../components/benefits/Podcast'
import Resume from '../components/benefits/Resume'
import EbookPromotion from '../components/benefits/Ebook'

const Benefits = () => {
  return (
    <div>
      <EbookPromotion/>
      <TedTalk/>
      <Podcast/>
      <Resume/>
    </div>
  )
}

export default Benefits