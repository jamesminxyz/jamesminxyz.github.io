import { ReactElement, useState } from 'react'
import type { NextPageWithLayout } from '../_app'
import Layout from '../../components/Layout'
import Link from 'next/link'

const Page: NextPageWithLayout = () => {

  return (
    <div className="page page-projects">
      <section className="page-intro">
        <h1>Projects</h1>
      </section>

      <section className="all-projects">
        <div className="projects-container">

          {/* Individual proejct card */}

          <Link href="/projects/selz" id="project-selz" className="project project-selz">
            <div className="project-cover"></div>
            <div className="overlay">
              <div className="bg-color"></div>
              <h4 className="project-name">Selz</h4>
              {/* <p>Creating new brand experience <br> for ecommerce platform</p> */}
            </div>
          </Link>

          <Link href="/projects/brickx" id="project-brickx" className="project project-brickx">
            <div className="project-cover"></div>
            <div className="overlay">
              <div className="bg-color"></div>
              <h4 className="project-name">BrickX</h4>
              {/* <p>Property investment platform <br> UI design for fintech startup</p>  */}
            </div>
          </Link>

          <Link href="/projects/telstra" id="project-telstra" className="project project-telstra">
            <div className="project-cover"></div>
            <div className="overlay">
              <div className="bg-color"></div>
              <h4 className="project-name">Telstra</h4>
              {/* <p>Designing bill and <br /> payment experience</p> */}
            </div>
            <span className="tag-private"> <span className="google-icon-lock"></span> private</span>
          </Link>


          <Link href="/projects/selz-dm" id="project-selz-dm" className="project project-selz-dm" >
            <div className="project-cover"></div>
            <div className="overlay">
              <div className="bg-color"></div>
              <h4 className="project-name">Selz &mdash; Digital Marketing</h4>
              {/* <p>A suite of digital marketing designs</p> */}
            </div>
          </Link>

          <Link href="/projects/anz" id="project-anz" className="project project-anz" >
            <div className="project-cover"></div>
            <div className="overlay">
              <div className="bg-color"></div>
              <h4 className="project-name">ANZ Plus</h4>
              {/* <p>Creating 3D visuals for <br /> ANZ Plus mobile experience</p>   */}
            </div>
          </Link>

          <Link href="/projects/selz-spc" id="project-selz-spc" className="project project-selz-spc" >
            <div className="project-cover"></div>
            <div className="overlay">
              <div className="bg-color"></div>
              <h4 className="project-name">Selz &mdash; Single Page Checkout</h4>
              {/* <p>Enhancing ecommerce checkout and payment experience</p> */}
            </div>
          </Link>

        </div>
      </section>

    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return ( <Layout>{page}</Layout> )
}

export default Page