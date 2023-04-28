import { ReactElement, useState } from 'react'
import type { NextPageWithLayout } from '../_app'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const Page: NextPageWithLayout = () => {

  return (
    <div className="page-project page-telstra">
      <section className="intro">
        <div className="intro-image"></div>
        <div className="intro-image-shadow"></div>
      </section>

      <section className="project-info project-page-wrapper">
        <h1 className="project-title">Telstra</h1>
        <div className="project-desc">
          <h2 className="project-subtitle">Payments in MyTelstra</h2>
          <p>MyTelstra is a native mobile (iOS &amp; Android) and web app that enables Telstra customers to manage their services and payments. I was part of the payments team where my main task was to enhance the visual design of the payment management experience.</p>
          <div className="project-area">
            <h3 className="project-area-heading">Work Areas</h3>
            <p>UI Design</p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section section-bill-history project-page-wrapper">
        <h3 className="section-heading-40">Bill history graph view</h3>
        <div className="gallery grid grid-col-2 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageBillHistory1} alt="bill history standard view " />
          <Image className="nextjs-image-reset" src={imageBillHistory2} alt="bill history credit state " />
        </div>
      </section>

      <section className="section section-adjustment project-page-wrapper">
        <h3 className="section-heading-40">Payment adjustments</h3>
        <div className="gallery grid grid-col-2 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageAdjustment1} alt="adjustment" />
          <Image className="nextjs-image-reset" src={imageAdjustment2} alt="adjustment" />
          <Image className="nextjs-image-reset" src={imageAdjustment3} alt="adjustment" />
          <Image className="nextjs-image-reset" src={imageAdjustment4} alt="adjustment" />
        </div>
      </section>

      <section className="section section-payment-method project-page-wrapper">
        <h3 className="section-heading-40">Payment method and discounts</h3>
        <div className="gallery grid grid-col-2 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imagePaymentMethod1}  alt="payment method" />
          <Image className="nextjs-image-reset" src={imagePaymentMethod2} alt="payment method" />
        </div>
      </section>

      <div style={{height: "128px"}} className="spacer"></div>

      <Link className="next-project next-project-selz-dm" href="/projects/selz-dm">
        <h6>Next Project</h6>
        <p>Selz &mdash; Digital Marketing</p>
        <div className="project-cover"></div>
      </Link>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return ( <Layout>{page}</Layout> )
}

export default Page

// import image
import imageBillHistory1 from '../../../public/projects/telstra/bill-history-1.jpg' 
import imageBillHistory2 from '../../../public/projects/telstra/bill-history-2.jpg'
import imageAdjustment1 from '../../../public/projects/telstra/adjustment-1.jpg'
import imageAdjustment2 from '../../../public/projects/telstra/adjustment-2.jpg'
import imageAdjustment3 from '../../../public/projects/telstra/adjustment-3.jpg'
import imageAdjustment4 from '../../../public/projects/telstra/adjustment-4.jpg'
import imagePaymentMethod1 from '../../../public/projects/telstra/payment-method-1.jpg'
import imagePaymentMethod2 from '../../../public/projects/telstra/payment-method-2.jpg'