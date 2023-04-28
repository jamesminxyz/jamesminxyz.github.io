import { ReactElement, useState } from 'react'
import type { NextPageWithLayout } from '../_app'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'


const Page: NextPageWithLayout = () => {

  return (
    <div className="page-project page-selz">
      <section className="intro">
        <div className="intro-image"></div>
        <div className="intro-image-shadow"></div>
      </section>

      <section className="project-info project-page-wrapper">
        <h1 className="project-title">Selz</h1>

        <div className="project-desc">
          <h2 className="project-subtitle">Visual Rebranding</h2>

          <p>Selz was an ecommerce platform that empowered physical and digital product merchants to set up their online store and sell products online. The company expanded into more diverse merchant segments who were primarily selling physical products.
          </p>
            
          <p>
          With this strategy, this project was started to rebrand the look and feel of the business to appeal more upscale merchants. It involved a broad range of visual redesign and enhancement across visual identity, website, digital and social channels.
          </p>

          <p>
          (Selz was acquired by Amazon and the business is now operating under Amazon. The Selz brand itself no longer exists.)
          </p>

          <div className="project-area">
          <h3 className="project-area-heading">Work Areas</h3>
          <p>Web • Branding</p>
          </div>
        </div>
      </section>

      <section className="insert-image insert-image-selz-logo">
        <Image src={image3dIllust7} alt="selz-3d-illustration" width={2048} height={2048}/>
      </section>

      {/* Rebranding */}
      <section className="project-page-wrapper section section-scrolling-info section-logo">
        <div className="section-info-container">
          <h3 className="section-heading-64">Rebranding</h3>
          <p className="section-desc">The primary element of the rebrand was the logo. With the complete makeover, the new logo aims to give a more modern look and feel.</p>
        </div>   
        <div className="gallery-container">
          <div className="gallery grid grid-col-1">
            <Image 
              className="nextjs-image-reset"
              style={{ border: "1px solid #ddd"}} 
              src={imageLogoChangeGif} 
              alt="logo change gif"
            />
          </div>
          <div className="gallery grid grid-col-2">
            <Image className="nextjs-image-reset" src={imageSelzLogo2} alt="selz-logo-2"/>
            <Image className="nextjs-image-reset" src={imageSelzLogo3} alt="selz-logo-3"/>
          </div>
        </div>
      </section>

      <section className="project-page-wrapper section section-scrolling-info section-logomark">
        <div className="section-info-container">
          <h4 className="section-heading-40">Logomark</h4>
          <p className="section-desc">The logomark, representing the letter S, is constructed in symmetry in order to give a sense of stability, security, harmony and balance.</p>
          <p className="section-desc">The shape represents the concept of exchange or continuous flow of buying and selling (commerce).</p>
        </div>
        <div className="gallery-container">
          <div className="gallery grid grid-col-2">
            <Image className="nextjs-image-reset" src={imageLogomarkBreakdown} alt="" />
            <Image className="nextjs-image-reset" src={imageLogomarkCombined} alt="" />
          </div>
        </div>
      </section>

      <section className="project-page-wrapper section section-scrolling-info section-color">
        <div className="section-info-container">
          <h3 className="section-heading-40">Colour palette</h3>
          <p className="section-desc">The new colours are small adjustments from the previous, in order to maintain a certain level of continuation of previous Selz.</p>
          <p className="section-desc">The new colour scheme has more saturation, which emphasizes the energy of the company&apos;s new direction.</p>
        </div>
        
        <div className="gallery-container">
          <div className="gallery grid grid-col-1">
            <Image className="nextjs-image-reset" src={imageSelzColor1} alt="" />
            <Image className="nextjs-image-reset" src={imageSelzColor2} alt="" />
          </div>
        </div>
      </section>

      {/* Website redesign */}
      <section className="insert-image insert-image-homepage-mockup">
      </section>

      <section className="project-page-wrapper section">
        <h3 className="section-heading-64">The New Site</h3>
      </section>

      <section className="project-page-wrapper section section-scrolling-info section-website">
        <div className="section-info-container">
          <div className="sticky-scroll">
            <h4 className="section-heading-40">Homepage</h4>
            <p className="section-desc">The new homepage was designed to convey key sets of information in clearly defined sections that were accompanied with new feature images that match the updated brand visuals.</p>
          </div>
        </div>
        
        <div className="gallery-container">
          <div className="gallery grid grid-col-1">
            <Image className="website-desktop nextjs-image-reset" src={imageWebHome1} alt="" />
          </div>
        </div>
      </section>

      <section className="insert-image insert-image-feature-page-mockup"></section>
      <div className="divider"></div>

      <section className="project-page-wrapper section section-scrolling-info section-website-feature">
        <div className="section-info-container">
          <div className="sticky-scroll">
            <h4 className="section-heading-40">Feature Pages</h4>
            <p className="section-desc">The new features pages were built in 3 tiers, dividing the huge amount of feature sets into easily digestible small pieces of content.</p>
          </div>  
        </div>

        
        <div className="gallery-container">
          <div className="gallery grid grid-col-1">
            <p>Tier 1</p>
            <Image className="website-desktop nextjs-image-reset" src={imageWebFeature1} alt="" />
            <div className="spacer"></div>
            <p>Tier 2</p>
            <Image className="website-desktop nextjs-image-reset" src={imageWebFeature2} alt="" />
            <div className="spacer"></div>
            <p>Tier 3</p>
            <Image className="website-desktop nextjs-image-reset" src={imageWebFeature3} alt="" />
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Feature image */}
      <section className="project-page-wrapper section section-feature-images">
        <h3 className="section-heading-40">Feature Images</h3>
        <p className="section-desc">A wide variety of illustrative graphics was created in order to visually help customers understand the diverse and powerful features of the ecommerce platform.
        </p>

        <div className="gallery grid grid-col-3">
          <Image className="nextjs-image-reset" src={imageFeatureImage1} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage2} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage3} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage4} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage5} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage6} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage7} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage8} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage9} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage10} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage11} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage12} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage13} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage14} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage15} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage16} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage17} alt="" />
          <Image className="nextjs-image-reset" src={imageFeatureImage18} alt="" />
        </div>
      </section>

      {/* Pricing page */}
      <section className="insert-image insert-image-pricing-mockup"></section>

      <div className="divider"></div>

      <section className="project-page-wrapper section section-scrolling-info section-website-pricing">
        <div className="section-info-container">
          <div className="sticky-scroll">
            <h4 className="section-heading-40">Pricing Pages</h4>
            <p className="section-desc">The pricing page was enhanced from the previous design to match the new branding along with the addition of upsell features and services such as digital marketing management and business coaching.</p>
          </div>
        </div>
        
        <div className="gallery-container">
          <div className="gallery grid grid-col-1">
            <Image className="website-desktop nextjs-image-reset" src={imageWebPricing} alt="" />
            <Image className="nextjs-image-reset" src={imageWebPricingMobile1} alt="" />
          </div>
          <div className="gallery grid grid-col-2">
            <Image className="nextjs-image-reset" src={imageWebPricingMobile2} alt="" />
            <Image className="nextjs-image-reset" src={imageWebPricingMobile3} alt="" />
          </div>
        </div>
      </section>

      <Link className="next-project next-project-brickx" href="/projects/brickx">
        <h6>Next Project</h6>
        <p>BrickX</p>
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
import image3dIllust7 from '../../../public/projects/selz-dm/3d/3d-illust-7.jpg'
import imageLogoChangeGif from '../../../public/projects/selz/logo-change.gif'
import imageSelzLogo2 from '../../../public/projects/selz/selz-logo-2.jpg'
import imageSelzLogo3 from '../../../public/projects/selz/selz-logo-3.jpg'
import imageLogomarkBreakdown from '../../../public/projects/selz/logomark-breakdown.png'
import imageLogomarkCombined from '../../../public/projects/selz/logomark-combined.png'
import imageSelzColor1 from '../../../public/projects/selz/selz-color-1.jpg'
import imageSelzColor2 from '../../../public/projects/selz/selz-color-2.jpg'
import imageWebHome1 from '../../../public/projects/selz/web-home-1.jpg'
import imageWebFeature1 from '../../../public/projects/selz/web-feature-1.jpg'
import imageWebFeature2 from '../../../public/projects/selz/web-feature-2.jpg'
import imageWebFeature3 from '../../../public/projects/selz/web-feature-3.jpg'
import imageFeatureImage1 from '../../../public/projects/selz/feature-image-1.jpg'
import imageFeatureImage2 from '../../../public/projects/selz/feature-image-2.jpg'
import imageFeatureImage3 from '../../../public/projects/selz/feature-image-3.jpg'
import imageFeatureImage4 from '../../../public/projects/selz/feature-image-4.jpg'
import imageFeatureImage5 from '../../../public/projects/selz/feature-image-5.jpg'
import imageFeatureImage6 from '../../../public/projects/selz/feature-image-6.jpg'
import imageFeatureImage7 from '../../../public/projects/selz/feature-image-7.jpg'
import imageFeatureImage8 from '../../../public/projects/selz/feature-image-8.jpg'
import imageFeatureImage9 from '../../../public/projects/selz/feature-image-9.jpg'
import imageFeatureImage10 from '../../../public/projects/selz/feature-image-10.jpg'
import imageFeatureImage11 from '../../../public/projects/selz/feature-image-11.jpg'
import imageFeatureImage12 from '../../../public/projects/selz/feature-image-12.jpg'
import imageFeatureImage13 from '../../../public/projects/selz/feature-image-13.jpg'
import imageFeatureImage14 from '../../../public/projects/selz/feature-image-14.jpg'
import imageFeatureImage15 from '../../../public/projects/selz/feature-image-15.jpg'
import imageFeatureImage16 from '../../../public/projects/selz/feature-image-16.jpg'
import imageFeatureImage17 from '../../../public/projects/selz/feature-image-17.jpg'
import imageFeatureImage18 from '../../../public/projects/selz/feature-image-18.jpg'
import imageWebPricing from '../../../public/projects/selz/web-pricing.jpg'
import imageWebPricingMobile1 from '../../../public/projects/selz/web-pricing-mobile-1.jpg'
import imageWebPricingMobile2 from '../../../public/projects/selz/web-pricing-mobile-2.jpg'
import imageWebPricingMobile3 from '../../../public/projects/selz/web-pricing-mobile-3.jpg'