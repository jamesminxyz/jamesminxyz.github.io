import { ReactElement, useState } from 'react'
import type { NextPageWithLayout } from '../_app'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const Page: NextPageWithLayout = () => {

  return (
    <div className="page-project page-anz">
      <section className="intro">
        <div className="intro-image"></div>
        <div className="intro-image-shadow"></div>
      </section>

      <section className="project-info project-page-wrapper">
        <h1 className="project-title">ANZ Plus</h1>

        <div className="project-desc">
          <h2 className="project-subtitle">Manage My Money</h2>

          <p>ANZ Plus is a new banking service and mobile app of ANZ. I was part of an internal studio team in the Manage My Money stream, creating various 3D illustrations and motion design. The following works are the examples of 3D icons that I worked on for lighting, texturing and rendering.</p>

          <div className="project-area">
            <h3 className="project-area-heading">Work Areas</h3>
            <p>3D Illustration</p>
          </div>
        </div>
      </section>


      {/* 3D icons */}
      <section className="insert-image insert-image-brick">
      </section>

      <section className="project-page-wrapper section section-3d-icons">
        <h3 className="section-heading-48">ANZ Plus 3D Icons</h3>

        <div className="gallery grid grid-col-3 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageIconCoach} alt="coach icon" />
          <Image className="nextjs-image-reset" src={imageIconWallet} alt="wallet icon" />
          <Image className="nextjs-image-reset" src={imageIconScroll} alt="scroll icon" />
        </div>

        <div className="gallery grid grid-col-3 grid-col-1-600px">
          <Image style={{ gridColumn: "span 2"}} className="nextjs-image-reset" src={imageIconEmail} alt="email icon" />

          <div className="grid">
            <Image className="nextjs-image-reset" src={imageIconMagnifier} alt="" />
            <Image className="nextjs-image-reset" src={imageIconBrick} alt="" />
          </div>      
        </div>

        <div className="gallery grid grid-col-2 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageIconUpcoming} alt="" />
          <Image className="nextjs-image-reset" src={imageIconPayment} alt="" />
        </div>

        <div className="gallery grid grid-col-3 grid-col-1-600px">
          <div className="grid">
            <Image className="nextjs-image-reset" src={imageIconWarning} alt="" />
            <Image className="nextjs-image-reset" src={imageIconSiren} alt="" />
          </div>
          
          <Image style={{ gridColumn: "span 2"}} className="nextjs-image-reset" src={imageIconSleep} alt="" />
        </div>

        <div className="gallery grid grid-col-4 grid-col-2-600px">
          <Image className="nextjs-image-reset" src={imageIconGreenUp} alt="" />
          <Image className="nextjs-image-reset" src={imageIconGreenDown} alt="" />
          <Image className="nextjs-image-reset" src={imageIconRedUp} alt="" />
          <Image className="nextjs-image-reset" src={imageIconRedDown} alt="" />
        </div>
      </section>


      {/* 2.5D icons */}
      <section className="insert-image insert-image-heart">
      </section>

      <section className="project-page-wrapper section section-3d-icons">
        <h3 className="section-heading-48">2.5D Icon Exploration</h3>

        <div className="gallery grid grid-col-3 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageIconPieChart} alt="" />
          <Image className="nextjs-image-reset" src={imageIconRoadSign} alt="" />
          <Image className="nextjs-image-reset" src={imageIconSpaceship} alt="" />
          <Image className="nextjs-image-reset" src={imageIconHomeWallet} alt="" />
          <Image className="nextjs-image-reset" src={imageIconHomeImprovement} alt="" />
          <Image className="nextjs-image-reset" src={imageIconWalletPixel} alt="" />
          <Image className="nextjs-image-reset" src={imageIconSunny} alt="" />
          <Image className="nextjs-image-reset" src={imageIconEducation} alt="" />
          <Image className="nextjs-image-reset" src={imageIconHeart} alt="" />
        </div>
      </section>

      {/* Goals */}
      <section className="insert-image insert-image-pet">
      </section>

      <section className="project-page-wrapper section section-3d-icons">
        <h3 className="section-heading-48">Personalised savings goals</h3>

        <div className="gallery grid grid-col-2 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageGoalPetTile} alt="" />
          <Image className="nextjs-image-reset" src={imageGoalPetUI} alt="" />
        </div>

        <div className="gallery grid grid-col-1">
          <Image className="nextjs-image-reset" src={imageGoalPetLayout} alt="" />
        </div>

        <div className="gallery grid grid-col-2 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageGoalWeddingTile} alt="" />
          <Image className="nextjs-image-reset" src={imageGoalWeddingUI} alt="" />
        </div>

        <div className="gallery grid grid-col-1">
          <Image className="nextjs-image-reset" src={imageGoalWeddingLayout} alt="" />
        </div>
      </section>

      <Link className="next-project next-project-selz-spc" href="/projects/selz-spc">
        <h6>Next Project</h6>
        <p>Selz &mdash; SPC</p>
        <div className="project-cover"></div>
      </Link>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return ( <Layout>{page}</Layout> )
}

export default Page

// import images
import imageIconCoach from '../../../public/projects/anz/icon-coach.jpg'
import imageIconWallet from '../../../public/projects/anz/icon-wallet.jpg'
import imageIconScroll from '../../../public/projects/anz/icon-scroll.jpg'
import imageIconEmail from '../../../public/projects/anz/icon-email.jpg'
import imageIconMagnifier from '../../../public/projects/anz/icon-magnifier.jpg'
import imageIconBrick from '../../../public/projects/anz/icon-brick.jpg'
import imageIconUpcoming from '../../../public/projects/anz/icon-upcoming.jpg'
import imageIconPayment from '../../../public/projects/anz/icon-payment.jpg'
import imageIconWarning from '../../../public/projects/anz/icon-warning.jpg'
import imageIconSiren from '../../../public/projects/anz/icon-siren.jpg'
import imageIconSleep from '../../../public/projects/anz/icon-sleep.jpg'
import imageIconGreenUp from '../../../public/projects/anz/icon-green-up.jpg'
import imageIconGreenDown from '../../../public/projects/anz/icon-green-down.jpg'
import imageIconRedUp from '../../../public/projects/anz/icon-red-up.jpg'
import imageIconRedDown from '../../../public/projects/anz/icon-red-down.jpg'


import imageIconPieChart from '../../../public/projects/anz/icon-pie-chart.jpg'
import imageIconRoadSign from '../../../public/projects/anz/icon-road-sign.jpg'
import imageIconSpaceship from '../../../public/projects/anz/icon-spaceship.jpg'
import imageIconHomeWallet from '../../../public/projects/anz/icon-home-wallet.jpg'
import imageIconHomeImprovement from '../../../public/projects/anz/icon-home-improvement.jpg'
import imageIconWalletPixel from '../../../public/projects/anz/icon-wallet-pixel.jpg'
import imageIconSunny from '../../../public/projects/anz/icon-sunny.jpg'
import imageIconEducation from '../../../public/projects/anz/icon-education.jpg'
import imageIconHeart from '../../../public/projects/anz/icon-heart.jpg'

import imageGoalPetTile from '../../../public/projects/anz/goal-pet-tile.jpg'
import imageGoalPetUI from '../../../public/projects/anz/goal-pet-ui.jpg'
import imageGoalPetLayout from '../../../public/projects/anz/goal-pet-layout.jpg'

import imageGoalWeddingTile from '../../../public/projects/anz/goal-wedding-tile.jpg'
import imageGoalWeddingUI from '../../../public/projects/anz/goal-wedding-ui.jpg'
import imageGoalWeddingLayout from '../../../public/projects/anz/goal-wedding-layout.jpg'


