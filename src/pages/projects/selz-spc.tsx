import { ReactElement, useState } from 'react'
import type { NextPageWithLayout } from '../_app'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const Page: NextPageWithLayout = () => {

  return (
    <div className="page-project page-selz-spc">

      <section className="intro">
        <div className="intro-image"></div>
        <div className="intro-image-shadow"></div>
      </section>

      <section className="project-info project-page-wrapper">
        <h1 className="project-title">Selz</h1>

        <div className="project-desc">
          <h2 className="project-subtitle">Single Page Checkout</h2>

          <p>This project was to redesign the checkout  and payment experience of the online store users. Working with the product team who was involved in the UX side, I was responsible for visually desinging and enhancing the user interface of the checkout application.</p>

          <p>(Selz was acquired by Amazon and the business is now operating under Amazon. The Selz brand itself no longer exists.)</p>

          <div className="project-area">
            <h3 className="project-area-heading">Work Areas</h3>
            <p>Web &bullet; UI</p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Cart page */}
      <section className="project-page-wrapper section section-cart-page">
        <h3 className="section-heading-48">Cart Page</h3>
        <p className="section-desc">The default cart page was designed for simplicity so that it can work as a template for various types of merchants.</p>

        <div className="gallery grid grid-col-2 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageCart1} alt="" />
          <Image className="nextjs-image-reset" src={imageCart2} alt="" />
        </div>
      </section>

      {/* Checkout */}
      <section className="project-page-wrapper section section-3d-icons">
        <h3 className="section-heading-48">Checkout Page</h3>
        <p className="section-desc">The design is largely organised into two sections. One for filling out necessary order information such as shipping address and payment information; and the other for displaying order summary on the right.</p>

        <div className="gallery grid grid-col-1">
          <Image className="nextjs-image-reset" src={imageCheckout1} alt="" />
        </div>

        <div className="gallery grid grid-col-2 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageCheckout2} alt="" />
          <Image className="nextjs-image-reset" src={imageCheckout3} alt="" />
        </div>

        <div className="gallery grid grid-col-3 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageCheckout4} alt="" />
          <Image className="nextjs-image-reset" src={imageCheckout5} alt="" />
          <Image className="nextjs-image-reset" src={imageCheckout6} alt="" />
        </div>
      </section>

      {/* Confirmation */}
      <section className="project-page-wrapper section section-3d-icons">
        <h3 className="section-heading-48">Confirmation Page</h3>
        <p className="section-desc">Key confirmation information is displayed on the left where some additional call-to-actions were also shown.</p>

        <div className="gallery grid grid-col-1">
          <Image className="nextjs-image-reset" src={imageConfirm1} alt="" />
          <Image className="nextjs-image-reset" src={imageConfirm2} alt="" />
        </div>
      </section>

      {/* Email */}
      <section className="project-page-wrapper section section-3d-icons">
        <h3 className="section-heading-48">Emails</h3>
        <p className="section-desc">New email template designs (e.g. receipt, abandoned cart) were created along with the new checkout page designs above. </p>

        <div className="gallery grid grid-col-2 grid-col-1-600px">
          <Image className="nextjs-image-reset" src={imageEmail1} alt="" />
          <Image className="nextjs-image-reset" src={imageEmail2} alt="" />
          <Image className="nextjs-image-reset" src={imageEmail3} alt="" />
          <Image className="nextjs-image-reset" src={imageEmail4} alt="" />
        </div>
      </section>

      <Link className="next-project next-project-selz" href="/projects/selz">
        <h6>Next Project</h6>
        <p>Selz</p>
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
import imageCart1 from '../../../public/projects/selz-spc/cart-1.jpg' 
import imageCart2 from '../../../public/projects/selz-spc/cart-2.jpg' 
import imageCheckout1 from '../../../public/projects/selz-spc/checkout-1.jpg' 
import imageCheckout2 from '../../../public/projects/selz-spc/checkout-2.jpg' 
import imageCheckout3 from '../../../public/projects/selz-spc/checkout-3.jpg' 
import imageCheckout4 from '../../../public/projects/selz-spc/checkout-4.jpg' 
import imageCheckout5 from '../../../public/projects/selz-spc/checkout-5.jpg' 
import imageCheckout6 from '../../../public/projects/selz-spc/checkout-6.jpg' 
import imageConfirm1 from '../../../public/projects/selz-spc/confirm-1.jpg'
import imageConfirm2 from '../../../public/projects/selz-spc/confirm-2.jpg'
import imageEmail1 from '../../../public/projects/selz-spc/email-1.jpg'
import imageEmail2 from '../../../public/projects/selz-spc/email-2.jpg'
import imageEmail3 from '../../../public/projects/selz-spc/email-3.jpg'
import imageEmail4 from '../../../public/projects/selz-spc/email-4.jpg'