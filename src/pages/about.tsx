import { ReactElement, useState } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/Layout'

const Page: NextPageWithLayout = () => {

  return (
    <div className="page page-about">
      <section className="page-intro">
        <h1 className="heading">About</h1>
        <div className="about-content">
          <p>James Min is a multidisciplinary designer/developer with extensive experience in visual design, web design/development, branding and 3D, specialised in crafting visually compelling and functional design solutions.</p>

          <p>With the diverse range of experience and solution-oriented mindset, he is committed to delivering high-quality design solutions.</p>
        </div>
      </section>

      <section className="section section__skills">
        <h2 className="heading">Skills</h2>
        <div className="skills-content">
          <div className="skills">
            <p>Visual Design</p>
            <p>Web Design</p>
            <p>UI Design</p>
            <p>Figma</p>
            <p>Sketch</p>
            <p>Adobe CC</p>
            <p>Houdini</p>
            <p>Cinema4D</p>
            <p>Redshift</p>
          </div>
          <div className="skills">
            <p>Web Development</p>
            <p>HTML</p>
            <p>CSS / SASS</p>
            {/* <p>SASS</p> */}
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>React.js</p>
            <p>Next.js</p>
            <p>Vue.js</p>
            <p>Git</p>
          </div>
        </div>
      </section>

      <section className="section section__contact">
        <h2 className="heading">Contact</h2>
        <div className="contact-content">
          <a href="mailto:jamesminxyz@gmail.com"> Email  </a>
          {/* <a className="no-fade-link" href="https://www.linkedin.com/in/jamesminxyz/" target="_blank"> LinkedIn  </a> */}
          <a className="no-fade-link" href="https://www.behance.com/jamesminxyz/" target="_blank"> Behance  </a>
        </div>
      </section>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return ( <Layout>{page}</Layout> )
}

export default Page