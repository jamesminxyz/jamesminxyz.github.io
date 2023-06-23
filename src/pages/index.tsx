// pages/index.tsx

import type { ReactElement } from 'react'
import Layout from '../components/Layout'
// import NestedLayout from '../components/nested-layout'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'

const Page: NextPageWithLayout = () => {
  return (
    <div className="page page-home">
      <section className="intro">
        <p>James Min is a multidisciplinary designer and developer working in visual design, web design and development and 3D design.</p>
      </section>

      <section className="featured-projects">
        <div id="featured-projects-nav" className="featured-projects-nav">
          <div className="sticky-scroll">
            <h2>Featured <br /> Projects</h2>
            <div className="featured-projects-list">
              <a className="no-fade-link" href="#project-selz">Selz</a>
              <a className="no-fade-link" href="#project-brickx">BrickX</a>
              <a className="no-fade-link" href="#project-telstra">Telstra</a>
              <a className="no-fade-link" href="#project-anz">ANZ</a>
              <Link href="/projects">View all projects→</Link>
            </div>
          </div>
        </div>
  
        <div className="featured-projects-container">
          <a id="project-selz" className="project project-selz" href="projects/selz.html">
            <div className="project-cover"></div>
            <div className="project-info">
              <h4 className="project-name">Selz</h4>
              <p>Creating new brand experience <br className="mobile-hidden" /> for ecommerce platform</p> 
            </div>
          </a>
    
          <a id="project-brickx" className="project project-brickx" href="projects/brickx.html">
            <div className="project-cover"></div>
            <div className="project-info">
              <h4 className="project-name">BrickX</h4>
              <p>Property investment platform <br className="mobile-hidden" /> UI design for fintech startup</p>
            </div>
          </a>
    
          <a id="project-telstra" className="project project-telstra" href="projects/telstra.html">
            <div className="project-cover"></div>
            <div className="project-info">
              <h4 className="project-name">Telstra</h4>
              <p>Designing bill and <br className="mobile-hidden" /> payment experience</p>
            </div>
            <span className="tag-private"> <span className="google-icon-lock"></span> private</span>
          </a>
    
          <a id="project-anz" className="project project-anz" href="projects/anz.html">
            <div className="project-cover"></div>
            <div className="project-info">
              <h4 className="project-name">ANZ</h4>
              <p>Creating 3D visuals for <br className="mobile-hidden" /> ANZ Plus mobile experience</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {/* <NestedLayout> */}
      {page}
      {/* </NestedLayout> */}
    </Layout>
  )
}

export default Page