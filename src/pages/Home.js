import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';

const Home = () => {
  return(
    <>
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="/images/main-banner.png "
              className="img-fluid rounded"
              alt="main banner"/>
              <div className="main-banner-content position-absolute">
                {/*<h4>Add some here</h4>*/}
                {/*<h5>Can add text here</h5>*/}
                {/*<p>A paragraph</p>*/}
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-texts-center">
            <div className="small-banner position-relative">
              <div className="free-delivery-sticker position-absolute py-1">
                <img src="/images/delivery.png" alt="Free Delivery" />
              </div>
              <img src="/images/neutrogena.jpeg"
              className="img-fluid rounded"
              alt="main banner"/>
              <div className="small-banner-content position-absolute">
                {/*<h2>15% OFF</h2>*/}
                {/*<h5>Some text</h5>*/}
                {/*<p>Ksh. </p>*/}
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="/images/neutrogena2.jpg "
              className="img-fluid rounded"
              alt="main banner"/>
              <div className="small-banner-content position-absolute">
                {/*<h4>New Arrival</h4>*/}
                {/*<h5>Buy Ipad Air</h5>*/}
                {/*<p>From $999.00 <br/> or $41.62/mo.</p>*/}
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="/images/neutrogena3.jpg "
              className="img-fluid rounded"
              alt="main banner"/>
              <div className="small-banner-content position-absolute">
                {/*<h4>FREE ENGRAVING</h4>*/}
                {/*<h5>AirPods Max</h5>*/}
                {/*<p>From $999.00 <br/> or $41.62/mo.</p>*/}

              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="/images/neutrogena5.jpeg "
              className="img-fluid rounded"
              alt="main banner"/>
              <div className="small-banner-content position-absolute">
                {/*<h4>BEST SALES</h4>*/}
                {/*<h5>Laptops Max</h5>*/}
                {/*<p>From $999.00 <br/> or $41.62/mo.</p>*/}

              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                <img src="/images/service.png" alt="services"/>
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0">Orders above $5.00</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="/images/service-02.png" alt="services"/>
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className="mb-0">Save upto 25% off.</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="/images/service-03.png" alt="services"/>
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Get intouch to e-mali Support team. </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="/images/service-04.png" alt="services"/>
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Get Our Exclusive Offer Prices.</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="/images/service-05.png" alt="services"/>
                <div>
                  <h6>Secure Payment</h6>
                  <p className="mb-0">100% Protected Payment <br/> through e-malipay and other Payment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  {/*<h6>Cameras</h6>*/}
                  <p>10 items</p>
                </div>
                <img src="/images/neutrogena_deep_clean.jpg" alt="neutrogena deep clean" style={{ width: '50%', maxWidth: '500px', height: 'auto'}}/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Acnes Vitamin Cream 40gm</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/acnes.jpeg" alt="acnes" style={{ width: '50%', maxWidth: '500px', height: 'auto'}}/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Veet Removal Cream Sensitive Skin - 100ML</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/veet.jpg" alt="veet" style={{ width: '50%', maxWidth: '500px', height: 'auto' }}/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cocopulp Skin Lightening & Brightening Face & Body Cream</h6>
                  <p>5 items</p>
                </div>
                <img src="/images/Cocopul.jpg" alt="camera" style={{ width: '50%', maxWidth: '500px', height: 'auto' }}/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>St Ives Renewing Collagen & Elastin Moisturizer</h6>
                  <p>5 items</p>
                </div>
                <img src="/images/st_ives.jpg" alt="st.ives cream" style={{ width: '50%', maxWidth: '500px', height: 'auto' }}/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Vitamin C Anti-Aging Brightening Serum</h6>
                  <p>4 items</p>
                </div>
                <img src="/images/anti_aging.jpg" alt="anti_aging cream" style={{ width: '50%', maxWidth: '500px', height: 'auto' }}/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>NIVEA Moisturising Creme Jar 200ml</h6>
                  <p>12 items</p>
                </div>
                <img src="/images/nivea_soft.jpg" alt="Nivea Soft" style={{ width: '50%', maxWidth: '500px', height: 'auto' }}/>
              </div>
              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Garnier Skin Active Pure Charcoal Black Tissue Face Mask</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/garnier_skin_active.jpg" alt="garnier Mask" style={{ width: '50%', maxWidth: '500px', height: 'auto' }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="featured-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </section>
    <section className="famous-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/tab.jpg"className="img-fluid" alt="famous"/>
              <div className="famous-content position-absolute">
              <h5 className="text-dark">BIG SCREEN</h5>
              <h6>Smart Watch Series 7</h6>
              <p>From $399 or 16.62/mo. for 24mo</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/tab2.jpg"
              className="img-fluid"
              alt="famous"/>
              <div className="famous-content position-absolute">
              <h5 className="text-dark">Studio Display</h5>
              <h6 className="text-dark">600 unit of Brightness</h6>
              <p className="text-dark">27-inch 5k Retina Display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/tab3.jpg"
              className="img-fluid"
              alt="famous"/>
              <div className="famous-content position-absolute">
              <h5 className="text-dark">SMARTPHONE</h5>
              <h6 className="text-dark">Smart Phone Pro</h6>
              <p className="text-dark">
                Now in Green From $999.00 or $41.62/mo for 24mo Footnote*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/tab3.jpg"
              className="img-fluid"
              alt="famous"/>
              <div className="famous-content position-absolute">
              <h5 className="text-dark">HOME SPEAKER</h5>
              <h6 className="text-dark">Room-Filling Sound</h6>
              <p className="text-dark">
                From $699 or 116.58/mo for 12mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="special-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
        </div>
      </div>
    </section>
    <section className="popular-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </section>
    <section className="merque-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
            <Marquee className='d-flex'>
              <div className="mx-4 w-25">
                <img src="/images/brand-01.png" alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src="/images/brand-02.png" alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src="/images/brand-03.png" alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src="/images/brand-04.png" alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src="/images/brand-05.png" alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src="/images/brand-06.png" alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src="/images/brand-07.png" alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src="/images/brand-08.png" alt="brand"/>
              </div>
            </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="blog-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
 
        </div>
        <div className="row">
          <div className="col-3">
          <BlogCard/>
          </div>
          <div className="col-3">
          <BlogCard/>
          </div>
          <div className="col-3">
          <BlogCard/>
          </div>
          <div className="col-3">
          <BlogCard/>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
