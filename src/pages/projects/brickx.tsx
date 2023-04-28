import { ReactElement, useState } from 'react'
import type { NextPageWithLayout } from '../_app'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const Page: NextPageWithLayout = () => {

  return (
    <div className="page-project page-brickx">
      <section className="intro">
        <div className="intro-image"></div>
        <div className="intro-image-shadow"></div>
      </section>

      <section className="project-info project-page-wrapper">
        <h1 className="project-title">BrickX</h1>

        <div className="project-desc">
          <h2 className="project-subtitle">Smart Invest</h2>

          <p>BrickX is fintech startup that provides a micro property investment platform. The company introduced a new product called Smart Invest that enabled automatic investment activities based on target criteri of the users.</p>

          <p>With the launch of Smart Invest, a comprehensive set of visual design was created across branding, web, digital and product.</p>

          <div className="project-area">
            <h3 className="project-area-heading">Work Areas</h3>
            <p>Web &bullet; UI &bullet; Branding</p>
          </div>
        </div>
      </section>

      <section className="insert-image insert-image-brickx-logo">
        <Image style={{ height: "80%" }} src={imageBrickXInsertLogo} alt="" />
      </section>

      {/* Rebranding */}
      <section className="project-page-wrapper section section-rebranding">
        <h3 className="section-heading-64">Rebranding</h3>
        <p className="section-desc">The Smart Invest rebranding was done in collaboration with an external agency. The logo and the colour palette was laid out by the agency. I was responsible for developing typography, user interface elements and new iconography.</p>
      </section>

      <section className="project-page-wrapper section section-logo section-scrolling-info">
        <div className="section-info-container">
          <h3 className="section-heading-40">Logo</h3>
        </div>   
        <div className="gallery-container">
          <div className="gallery grid grid-col-1">
            <Image className="nextjs-image-reset" src={imageBrandingLogo} alt="" />
          </div>
        </div>
      </section>

      <section className="project-page-wrapper section section-color section-scrolling-info">
        <div className="section-info-container">
          <h3 className="section-heading-40">Brand Colour</h3>
        </div>   
        <div className="gallery-container">
          <div className="gallery grid grid-col-1">
            <Image className="nextjs-image-reset" src={imageBrandingColor1} alt="" />
          </div>
        </div>
      </section>

      <section className="project-page-wrapper section section-ui-color section-scrolling-info">
        <div className="section-info-container">
          <h3 className="section-heading-24">Extended colour palette for UI design</h3>
          <p className="section-desc">Extended set of colour palette (based on from the brand colour above) to be used in the UI design </p>
        </div>   
        <div className="gallery-container">
          <div className="gallery grid grid-col-1">
            <Image className="nextjs-image-reset" src={imageBrandingColor2} alt="" />
          </div>
        </div>
      </section>

      <div className="divider"></div> 

      {/* Typography */}
      <section className="project-page-wrapper section section-typography section-scrolling-info">
        <div className="section-info-container">
          <h3 className="section-heading-40">Typography</h3>
          <p className="section-desc">After having extensive testing on the typography with a number of typefaces, Calibre was chosen to be the new brand typeface for its clean legibility and better numerical readability.</p>
        </div>   
        <div className="gallery-container">
          <div className="gallery grid grid-col-2 grid-col-1-600px">
            <Image className="nextjs-image-reset" src={imageTypeHeading} alt="" />
            <Image className="nextjs-image-reset" src={imageTypeBody} alt="" />
          </div>
        </div>
      </section>

      <section className="insert-image insert-image-typography"></section>

      {/* UI Components */}
      <section className="insert-image insert-image-ui-anatomy">
      </section>

      <section className="project-page-wrapper section section-ui-component">
        <div className="section-info-container">
          <h3 className="section-heading-40">User Interface Components</h3>
        </div>   
        <div className="gallery-container">
          <div className="gallery grid grid-col-2 grid-col-1-600px">
            <Image className="nextjs-image-reset" src={imageUIComponent1} alt="" />
            <Image className="nextjs-image-reset" src={imageUIComponent2} alt="" />
            <Image className="nextjs-image-reset" src={imageUIComponent3} alt="" />
            <Image className="nextjs-image-reset" src={imageUIComponent4} alt="" />
            <Image className="nextjs-image-reset" src={imageUIComponent5} alt="" />
            <Image className="nextjs-image-reset" src={imageUIComponent6} alt="" />
          </div>
        </div>
      </section>
      <section className="insert-image insert-image-ui-example">
      </section>

      {/* Icon */}
      <section className="insert-image insert-image-icon-thumbsup">
      </section>

      <section className="project-page-wrapper section section-icon">
        <div className="section-info-container">
          <h3 className="section-heading-40">Iconography</h3>
        </div>   
        <div className="gallery-container">
          <div className="gallery grid">
            <Image className="nextjs-image-reset" src={imageIcon1} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon2} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon3} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon4} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon5} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon6} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon7} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon8} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon9} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon10} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon11} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon12} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon13} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon14} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon15} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon16} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon17} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon18} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon19} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon20} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon21} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon22} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon23} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon24} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon25} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon26} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon27} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon28} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon29} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon30} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon31} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon32} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon33} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon34} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon35} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon36} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon37} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon38} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon39} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon40} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon41} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon42} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon43} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon44} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon45} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon46} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon47} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon48} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon49} alt="" /> 
            <Image className="nextjs-image-reset" src={imageIcon50} alt="" /> 
          </div>
        </div>
      </section>

      <section className="insert-image insert-image-icon-grid">
      </section>

      {/* Smart Invest */}
      <section className="insert-image insert-image-smart-invest">
      </section>

      <section className="project-page-wrapper section">
        <h3 className="section-heading-64">Smart Invest</h3>
      </section>

      <section className="project-page-wrapper section section-scrolling-info section-onboarding">
        <div className="section-info-container">
          <div className="sticky-scroll">
            <h4 className="section-heading-40">Onboarding</h4>
            <p className="section-desc">The onboarding journey with Smart Invest was divided into small steps that utilised new branding and UI components throughout.</p>
          </div>
        </div>
        
        <div className="gallery-container">
          <div className="gallery grid grid-col-1">
            <Image className="nextjs-image-reset" src={imageOnboarding1} alt="" />
            <Image className="nextjs-image-reset" src={imageOnboarding2} alt="" />
            <Image className="nextjs-image-reset" src={imageOnboarding3} alt="" />
          </div>
        </div>
      </section>

      <section className="project-page-wrapper section section-scrolling-info section-website-feature">
        <div className="section-info-container">
          <div className="sticky-scroll">
            <h4 className="section-heading-40">Investment Activity</h4>
            <p className="section-desc">The new Smart Invest investment activity UI designs aimed for improved organisation of investment information with visual elements for better understanding of the investment performance.</p>
          </div>
        </div>
        
        <div className="gallery-container">
          <div className="gallery grid grid-col-1">
            <Image className="nextjs-image-reset" src={imageInvestment1} alt="" />
          </div>
          <div className="gallery grid grid-col-2">
            <Image className="nextjs-image-reset" src={imageInvestment2} alt="" />
            <Image className="nextjs-image-reset" src={imageInvestment3} alt="" />
          </div>
        </div>
      </section>

      <Link className="next-project next-project-telstra" href="/projects/telstra">
        <h6>Next Project</h6>
        <p>Telstra</p>
        <div className="project-cover"></div>
      </Link>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return ( <Layout>{page}</Layout> )
}

export default Page


// images
import imageBrickXInsertLogo from '../../../public/projects/brickx/brickx-insert-logo.jpg'
import imageBrandingLogo from '../../../public/projects/brickx/branding-logo.jpg'
import imageBrandingColor1 from '../../../public/projects/brickx/branding-color-1.jpg'
import imageBrandingColor2 from '../../../public/projects/brickx/branding-color-2.jpg'
import imageTypeHeading from '../../../public/projects/brickx/type-heading.jpg'
import imageTypeBody from '../../../public/projects/brickx/type-body.jpg'


import imageUIComponent1 from "../../../public/projects/brickx/ui-component-1.jpg"
import imageUIComponent2 from "../../../public/projects/brickx/ui-component-2.jpg"
import imageUIComponent3 from "../../../public/projects/brickx/ui-component-3.jpg"
import imageUIComponent4 from "../../../public/projects/brickx/ui-component-4.jpg"
import imageUIComponent5 from "../../../public/projects/brickx/ui-component-5.jpg"
import imageUIComponent6 from "../../../public/projects/brickx/ui-component-6.jpg"


// Generate image imports
// for (let i=1; i<51; i++) {
//   console.log(
//     `import imageIcon${i} from "../../../public/projects/brickx/icon-${i}.jpg"`
//   )
// }

// for (let i=1; i<51; i++) {
//   console.log(
//     `<Image className="nextjs-image-reset" src={imageIcon${i}} alt="" /> `
//   )
// }

import imageIcon1 from "../../../public/projects/brickx/icon-1.jpg"
import imageIcon2 from "../../../public/projects/brickx/icon-2.jpg"
import imageIcon3 from "../../../public/projects/brickx/icon-3.jpg"
import imageIcon4 from "../../../public/projects/brickx/icon-4.jpg"
import imageIcon5 from "../../../public/projects/brickx/icon-5.jpg"
import imageIcon6 from "../../../public/projects/brickx/icon-6.jpg"
import imageIcon7 from "../../../public/projects/brickx/icon-7.jpg"
import imageIcon8 from "../../../public/projects/brickx/icon-8.jpg"
import imageIcon9 from "../../../public/projects/brickx/icon-9.jpg"
import imageIcon10 from "../../../public/projects/brickx/icon-10.jpg"
import imageIcon11 from "../../../public/projects/brickx/icon-11.jpg"
import imageIcon12 from "../../../public/projects/brickx/icon-12.jpg"
import imageIcon13 from "../../../public/projects/brickx/icon-13.jpg"
import imageIcon14 from "../../../public/projects/brickx/icon-14.jpg"
import imageIcon15 from "../../../public/projects/brickx/icon-15.jpg"
import imageIcon16 from "../../../public/projects/brickx/icon-16.jpg"
import imageIcon17 from "../../../public/projects/brickx/icon-17.jpg"
import imageIcon18 from "../../../public/projects/brickx/icon-18.jpg"
import imageIcon19 from "../../../public/projects/brickx/icon-19.jpg"
import imageIcon20 from "../../../public/projects/brickx/icon-20.jpg"
import imageIcon21 from "../../../public/projects/brickx/icon-21.jpg"
import imageIcon22 from "../../../public/projects/brickx/icon-22.jpg"
import imageIcon23 from "../../../public/projects/brickx/icon-23.jpg"
import imageIcon24 from "../../../public/projects/brickx/icon-24.jpg"
import imageIcon25 from "../../../public/projects/brickx/icon-25.jpg"
import imageIcon26 from "../../../public/projects/brickx/icon-26.jpg"
import imageIcon27 from "../../../public/projects/brickx/icon-27.jpg"
import imageIcon28 from "../../../public/projects/brickx/icon-28.jpg"
import imageIcon29 from "../../../public/projects/brickx/icon-29.jpg"
import imageIcon30 from "../../../public/projects/brickx/icon-30.jpg"
import imageIcon31 from "../../../public/projects/brickx/icon-31.jpg"
import imageIcon32 from "../../../public/projects/brickx/icon-32.jpg"
import imageIcon33 from "../../../public/projects/brickx/icon-33.jpg"
import imageIcon34 from "../../../public/projects/brickx/icon-34.jpg"
import imageIcon35 from "../../../public/projects/brickx/icon-35.jpg"
import imageIcon36 from "../../../public/projects/brickx/icon-36.jpg"
import imageIcon37 from "../../../public/projects/brickx/icon-37.jpg"
import imageIcon38 from "../../../public/projects/brickx/icon-38.jpg"
import imageIcon39 from "../../../public/projects/brickx/icon-39.jpg"
import imageIcon40 from "../../../public/projects/brickx/icon-40.jpg"
import imageIcon41 from "../../../public/projects/brickx/icon-41.jpg"
import imageIcon42 from "../../../public/projects/brickx/icon-42.jpg"
import imageIcon43 from "../../../public/projects/brickx/icon-43.jpg"
import imageIcon44 from "../../../public/projects/brickx/icon-44.jpg"
import imageIcon45 from "../../../public/projects/brickx/icon-45.jpg"
import imageIcon46 from "../../../public/projects/brickx/icon-46.jpg"
import imageIcon47 from "../../../public/projects/brickx/icon-47.jpg"
import imageIcon48 from "../../../public/projects/brickx/icon-48.jpg"
import imageIcon49 from "../../../public/projects/brickx/icon-49.jpg"
import imageIcon50 from "../../../public/projects/brickx/icon-50.jpg"

import imageOnboarding1 from "../../../public/projects/brickx/onboarding-1.jpg"
import imageOnboarding2 from "../../../public/projects/brickx/onboarding-2.jpg"
import imageOnboarding3 from "../../../public/projects/brickx/onboarding-3.jpg"

import imageInvestment1 from "../../../public/projects/brickx/investment-1.jpg"
import imageInvestment2 from "../../../public/projects/brickx/investment-2.jpg"
import imageInvestment3 from "../../../public/projects/brickx/investment-3.jpg"



