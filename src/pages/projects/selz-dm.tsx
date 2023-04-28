import { ReactElement, useState } from 'react'
import type { NextPageWithLayout } from '../_app'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const Page: NextPageWithLayout = () => {

  return (
    <div className="page-project page-selz-dm">
      <section className="intro">
        <div className="intro-image"></div>
        <div className="intro-image-shadow"></div>
      </section>

      <section className="project-info project-page-wrapper">
        <h1 className="project-title">Selz</h1>

        <div className="project-desc">
          <h2 className="project-subtitle">Digital Marketing</h2>

          <p>Along with the redesign of visual identity and website (<a href="selz.html">project link</a>), I worked with the marketing team to create new visual designs for various digital channels and media. </p>

          <p>The following page showcases some of the digital marketing designs such as display ads, landing pages, social media assets, video and 2D &amp; 3D illustrations.</p>

          <p>(Selz was acquired by Amazon and the business is now operating under Amazon. The Selz brand itself no longer exists.)</p>

          <div className="project-area">
            <h3 className="project-area-heading">Work Areas</h3>
            <p>Web &bullet; Digital &bullet; Motion &bullet; Illustration</p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Digital marketing campaign */}
      <section className="project-page-wrapper section section-scrolling-info section-digital-marketing-campaign">
        <div className="section-info-container">
          <div className="sticky-scroll">
            <h3 className="section-heading-64">Digital Marketing Campaign</h3>
            <p className="section-desc">A set of key visuals and marketing assets were created to appeal to targeted segments. The example here shows the visual designs for digital marchant segments.</p>

            <div className="section-nav-container">
              <a className="no-fade-link" href="#ebook-campaign">Ebook merchant segment</a>
              <a className="no-fade-link" href="#business-campaign">Business coach segment</a>
              <a className="no-fade-link" href="#videographer-campaign">Videographer segment</a>
            </div>
          </div>
        </div>
        
        <div className="gallery-container">
          <div id="ebook-campaign" className="gallery grid grid-col-1">
            <p>Ebook Segment &mdash; Display Ads</p>
            <Image className="nextjs-image-reset" src={imageDisplayEbook} alt="" />
            <div className="spacer"></div>
            <p>Landing Page</p>
            <Image className="nextjs-image-reset" src={imageLandingPageEbook} alt="" />
            <div className="spacer"></div>
            <p>Additional Images</p>
            <Image className="nextjs-image-reset" src={imageEbookImage1} alt="" />
            <Image className="nextjs-image-reset" src={imageEbookImage2} alt="" />
          </div>

          <div id="business-campaign" className="gallery grid grid-col-1">
            <p>Business Coach Segment &mdash; Display Ads</p>
            <Image className="nextjs-image-reset" src={imageDisplayBusinessCoach} alt="" />
            <div className="spacer"></div>
            <p>Landing Page</p>
            <Image className="nextjs-image-reset" src={imageLandingPageBusinessCoach} alt="" />
          </div>

          <div id="videographer-campaign" className="gallery grid grid-col-1">
            <p>Videographer Segment &mdash; Display Ads</p>
            <Image className="nextjs-image-reset" src={imageDisplaySellVideo} alt="" />
            <div className="spacer"></div>
            <p>Landing Page</p>
            <Image className="nextjs-image-reset" src={imageLandingPageSellVideo} alt="" />
          </div>
        </div>
      </section>

      <section className="insert-image insert-image-landing-page">
      </section>


      {/* Motion design */}
      <section className="insert-image insert-image-motion">
      </section>

      <section className="project-page-wrapper section section-scrolling-info section-motion-design">
        <div className="section-info-container">
          <div className="sticky-scroll">
            <h3 className="section-heading-64">Motion Design</h3>
            <p className="section-desc">Motion graphics video and animations were created to enhance the brand experience and product marketing. The following example is made for promoting an expert service.</p>
          </div>
        </div>
        
        <div className="gallery-container">
          <div className="gallery grid grid-col-1">
            <div className="difm-video">
              <div className="animation-video-container">
                {/* Video iframe */}
                <iframe  src="https://www.youtube.com/embed/JZ1noaPD-DA" style={{borderWidth: "0px"}} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
          </div>
          </div>

          <div className="gallery grid grid-col-2">
            <Image style={{ gridColumn: "2 span" }} className="nextjs-image-reset" src={imageMotionStill1} alt="" />
            <Image className="nextjs-image-reset" src={imageMotionStill2} alt="" />
            <Image className="nextjs-image-reset" src={imageMotionStill3} alt="" />
            <Image style={{ gridColumn: "2 span" }} className="nextjs-image-reset" src={imageMotionStill4} alt="" />
            <Image className="nextjs-image-reset" src={imageMotionStill5} alt="" />
            <Image className="nextjs-image-reset" src={imageMotionStill6} alt="" />
          </div>
        </div>
      </section>

      <section className="project-page-wrapper section section-scrolling-info section-motion-design-process">
        <div className="section-info-container">
          <div className="sticky-scroll">
            <p className="section-desc">The Process</p>
            <p className="section-desc">As the service can cover a broad spectrum of audience, I chose to translate the story into a visual metaphor that represents concepts and ideas.</p>
            <p className="section-desc">This way, instead of depicting one specific example case, I believed it could establish a higher level of generality which can keep the audience from taking their interpretation of the story too narrowly.</p>
            <p className="section-desc">This direction led to illustrating the scenes in an abstract way using simple shapes which combined together speak for the elements of the story.</p>
          </div>
        </div>
        
        <div className="gallery-container">
          <div className="gallery grid grid-col-1">
            <Image className="nextjs-image-reset" src={imageMotionStoryboard1} style={{ border: "1px solid #ddd" }} alt="" />
          </div>

          <div className="gallery grid grid-col-3">
            <Image className="nextjs-image-reset" src={imageMotionStoryboard1} alt="" />
            <Image className="nextjs-image-reset" src={imageMotionStoryboard2} alt="" />
            <Image className="nextjs-image-reset" src={imageMotionStoryboard3} alt="" />
            <Image className="nextjs-image-reset" src={imageMotionStoryboard4} alt="" />
            <Image className="nextjs-image-reset" src={imageMotionStoryboard5} alt="" />
            <Image className="nextjs-image-reset" src={imageMotionStoryboard6} alt="" />
            <Image className="nextjs-image-reset" src={imageMotionStoryboard7} alt="" />
            <Image className="nextjs-image-reset" src={imageMotionStoryboard8} alt="" />
            <Image className="nextjs-image-reset" src={imageMotionStoryboard9} alt="" />
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* 2D illustration */}
      <section className="project-page-wrapper section section-2d-illustration">
        <h3 className="section-heading-64">2D Illustration</h3>
        <p className="section-desc">New illustrations were made to be used in diverse digital channels such as social, EDMs and blog posts.</p>

        <div className="gallery grid grid-col-2 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageIllustPeople} alt="" />
          <Image className="nextjs-image-reset" src={imageIllustFinance} alt="" />
        </div>
        <div style={{ gridTemplateColumns: "1fr 1.5fr"}} className="gallery grid grid-col-2 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageIllustBlog1} alt="" />
          <Image className="nextjs-image-reset" src={imageIllustBlog2} alt="" />
        </div>
        <div className="gallery grid grid-col-2 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageIllustBlog3} alt="" />
          <Image className="nextjs-image-reset" src={imageIllustBlog4} alt="" />
        </div>
        <div style={{ gridTemplateColumns: "1.5fr 1fr "}} className="gallery grid grid-col-2 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageIllustBlog5} alt="" />
          <Image className="nextjs-image-reset" src={imageIllustBlog6} alt="" />
        </div>
        <div className="gallery grid grid-col-2 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageIllustEmail3} alt="" />
          <Image className="nextjs-image-reset" src={imageIllustEmail2} alt="" />
        </div>
      </section>

      {/* 3D illustration */}
      <section className="insert-image insert-image-3d-illust">
      </section>

      <section className="project-page-wrapper section section-3d-illust">
        <h3 className="section-heading-64">3D Illustration</h3>
        <p className="section-desc">3D illustrations were also developed to complement the comprehensive visual design set of the new brand.</p>

        <div className="gallery flex">
          <Image className="nextjs-image-reset illust-1" src={image3DIllust1} alt="" />
        </div>

        <div className="gallery flex flex-row-reverse">
          <Image className="nextjs-image-reset illust-2" src={image3DIllust2} alt="" />
        </div>

        <div className="gallery flex">
          <Image className="nextjs-image-reset illust-3" src={image3DIllust3} alt="" />
        </div>

        <div className="gallery flex flex-row-reverse">
          <Image className="nextjs-image-reset illust-4" src={image3DIllust4} alt="" />
        </div>

        <div style={{ alignItems: "flex-end", justifyContent: "flex-start"}} className="gallery flex">
          <Image className="nextjs-image-reset illust-5" src={image3DIllust5} alt="" />
          <Image className="nextjs-image-reset illust-6" src={image3DIllust7} alt="" />
        </div>
      </section>

      <Link className="next-project next-project-anz" href="/projects/anz">
        <h6>Next Project</h6>
        <p>ANZ</p>
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
import imageDisplayEbook from '../../../public/projects/selz-dm/display-ebook.jpg'
import imageLandingPageEbook from '../../../public/projects/selz-dm/landing-page-ebook.jpg'
import imageEbookImage1 from '../../../public/projects/selz-dm/ebook-image-1.jpg'
import imageEbookImage2 from '../../../public/projects/selz-dm/ebook-image-2.jpg'
import imageDisplayBusinessCoach from '../../../public/projects/selz-dm/display-business-coach.jpg'
import imageLandingPageBusinessCoach from '../../../public/projects/selz-dm/landing-page-business-coach.jpg'
import imageDisplaySellVideo from '../../../public/projects/selz-dm/display-sell-video.jpg'
import imageLandingPageSellVideo from '../../../public/projects/selz-dm/landing-page-sell-video.jpg'

import imageMotionStill1 from '../../../public/projects/selz-dm/motion/still-01.jpg'
import imageMotionStill2 from '../../../public/projects/selz-dm/motion/still-02.jpg'
import imageMotionStill3 from '../../../public/projects/selz-dm/motion/still-03.jpg'
import imageMotionStill4 from '../../../public/projects/selz-dm/motion/still-04.jpg'
import imageMotionStill5 from '../../../public/projects/selz-dm/motion/still-05.jpg'
import imageMotionStill6 from '../../../public/projects/selz-dm/motion/still-06.jpg'

import imageMotionStoryboard1 from '../../../public/projects/selz-dm/motion/storyboard-01.jpg'
import imageMotionStoryboard2 from '../../../public/projects/selz-dm/motion/storyboard-02.jpg'
import imageMotionStoryboard3 from '../../../public/projects/selz-dm/motion/storyboard-03.jpg'
import imageMotionStoryboard4 from '../../../public/projects/selz-dm/motion/storyboard-04.jpg'
import imageMotionStoryboard5 from '../../../public/projects/selz-dm/motion/storyboard-05.jpg'
import imageMotionStoryboard6 from '../../../public/projects/selz-dm/motion/storyboard-06.jpg'
import imageMotionStoryboard7 from '../../../public/projects/selz-dm/motion/storyboard-07.jpg'
import imageMotionStoryboard8 from '../../../public/projects/selz-dm/motion/storyboard-08.jpg'
import imageMotionStoryboard9 from '../../../public/projects/selz-dm/motion/storyboard-09.jpg'

import imageIllustPeople from '../../../public/projects/selz-dm/illust/illust-people.jpg'
import imageIllustFinance from '../../../public/projects/selz-dm/illust/illust-finance.jpg'
import imageIllustBlog1 from '../../../public/projects/selz-dm/illust/illust-blog-01.png'
import imageIllustBlog2 from '../../../public/projects/selz-dm/illust/illust-blog-02.png'
import imageIllustBlog3 from '../../../public/projects/selz-dm/illust/illust-blog-03.png'
import imageIllustBlog4 from '../../../public/projects/selz-dm/illust/illust-blog-04.png'
import imageIllustBlog5 from '../../../public/projects/selz-dm/illust/illust-blog-05.png'
import imageIllustBlog6 from '../../../public/projects/selz-dm/illust/illust-blog-06.png'
import imageIllustEmail2 from '../../../public/projects/selz-dm/illust/illust-email-02.png'
import imageIllustEmail3 from '../../../public/projects/selz-dm/illust/illust-email-03.png'

import image3DIllust1 from '../../../public/projects/selz-dm/3d/3d-illust-1.jpg'
import image3DIllust2 from '../../../public/projects/selz-dm/3d/3d-illust-2.png'
import image3DIllust3 from '../../../public/projects/selz-dm/3d/3d-illust-3.png'
import image3DIllust4 from '../../../public/projects/selz-dm/3d/3d-illust-4.png'
import image3DIllust5 from '../../../public/projects/selz-dm/3d/3d-illust-5.png'
import image3DIllust7 from '../../../public/projects/selz-dm/3d/3d-illust-7.jpg'






