// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Unstable_Grid2';
// import Typography from '@mui/material/Typography';

// import { posts } from 'src/_mock/blog';

// import Iconify from 'src/components/iconify';

// import PostCard from '../post-card';
// import PostSort from '../post-sort';
// import PostSearch from '../post-search';

// import '../assets/css/bootstrap.min.css';
// import '../assets/css/animate.min.css';
// import '../assets/css/magnific-popup.css';
// import '../assets/css/fontawesome-all.min.css';
// import '../assets/css/imageRevealHover.css';
// import '../assets/css/swiper-bundle.css';
// import '../assets/css/flaticon.css';
// import '../assets/css/slick.css';
// import '../assets/css/spacing.css';
// import '../assets/css/main.css';

// import * as images from "./news-assets";

// import "../assets/js/vendor/jquery-3.6.0.min";
// import "../assets/js/bootstrap.min";
// import "../assets/js/isotope.pkgd.min";
// import "../assets/js/imagesloaded.pkgd.min";
// import "../assets/js/jquery.magnific-popup.min";
// import "../assets/js/jquery.marquee.min";
// import "../assets/js/imageRevealHover";
// import "../assets/js/swiper-bundle";
// import "../assets/js/TweenMax.min";
// import "../assets/js/slick.min";
// import "../assets/js/ajax-form";
// import "../assets/js/wow.min";
// import "../assets/js/main";
// ----------------------------------------------------------------------

export default function NewsView() {
    return (
      <h1>News</h1>
    // <div>
    //   <div id="preloader">
    //     <div id="loading-center">
    //       <div id="loading-center-absolute">
    //         <div className="object" id="object_one" />
    //         <div className="object" id="object_two" />
    //         <div className="object" id="object_three" />
    //       </div>
    //     </div>
    //   </div>

    //   <button type="button" className="scroll__top scroll-to-target" data-target="html">
    //     <i className="fas fa-angle-up" />
    //   </button>
    //   <header>
    //     <div className="header__top">
    //       <div className="container">
    //         <div className="row align-items-center">
    //           <div className="col-lg-4 col-md-6 col-sm-6 order-2 order-lg-0">
    //             <div className="header__top-search">
    //               <form action="#">
    //                 <input type="text" placeholder="Search here..." />
    //               </form>
    //             </div>
    //           </div>
    //           <div className="col-lg-4 col-md-3 order-0 order-lg-2 d-none d-md-block">
    //             <div className="header__top-logo logo text-lg-center">
    //               <a href="index.html" className="logo-dark">
    //                 <img src={images.logo} alt="Logo" />
    //               </a>
    //               <a href="index.html" className="logo-light">
    //                 <img src={images.w_logo} alt="Logo" />
    //               </a>
    //             </div>
    //           </div>
    //           <div className="col-lg-4 col-md-3 col-sm-6 order-3 d-none d-sm-block">
    //             <div className="header__top-right">
    //               <ul className="list-wrap">
    //                 <li className="news-btn">
    //                   <a href="#newsletter" className="btn">
    //                     <span className="btn-text">subscribe</span>
    //                   </a>
    //                 </li>
    //                 <li className="lang">
    //                   <div className="dropdown">
    //                     <button
    //                       className="dropdown-toggle"
    //                       type="button"
    //                       id="dropdownMenuButton1"
    //                       data-bs-toggle="dropdown"
    //                       aria-expanded="false"
    //                     >
    //                       ENG
    //                     </button>
    //                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    //                       <li>
    //                         <a className="dropdown-item" href="#">
    //                           SPA
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a className="dropdown-item" href="#">
    //                           GRE
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a className="dropdown-item" href="#">
    //                           CIN
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a className="dropdown-item" href="#">
    //                           CIN
    //                         </a>
    //                       </li>
    //                     </ul>
    //                   </div>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div id="header-fixed-height" />
    //     <div id="sticky-header" className="tg-header__area">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-12">
    //             <div className="tgmenu__wrap">
    //               <nav className="tgmenu__nav">
    //                 <div className="logo d-block d-md-none">
    //                   <a href="index.html" className="logo-dark">
    //                     <img src={images.logo} alt="Logo" />
    //                   </a>
    //                   <a href="index.html" className="logo-light">
    //                     <img src={images.w_logo} alt="Logo" />
    //                   </a>
    //                 </div>
    //                 <div className="offcanvas-toggle">
    //                   <a href="#">
    //                     <i className="flaticon-menu-bar" />
    //                   </a>
    //                 </div>
    //                 <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
    //                   <ul className="navigation">
    //                     <li className="active menu-item-has-children">
    //                       <a href="#">Home</a>
    //                       <ul className="sub-menu">
    //                         <li className="active">
    //                           <a href="index.html">Home Default</a>
    //                         </li>
    //                         <li>
    //                           <a href="index-2.html">Home Interior</a>
    //                         </li>
    //                         <li>
    //                           <a href="index-3.html">Home Travel</a>
    //                         </li>
    //                         <li>
    //                           <a href="index-4.html">Home Technology</a>
    //                         </li>
    //                         <li>
    //                           <a href="index-5.html">Home NFT</a>
    //                         </li>
    //                         <li>
    //                           <a href="index-6.html">Home Fashion</a>
    //                         </li>
    //                         <li>
    //                           <a href="index-7.html">Home Adventure</a>
    //                         </li>
    //                         <li>
    //                           <a href="index-8.html">Home Minimal</a>
    //                         </li>
    //                       </ul>
    //                     </li>
    //                     <li>
    //                       <a href="lifestyle.html">Lifestyle</a>
    //                     </li>
    //                     <li>
    //                       <a href="travel.html">Travel</a>
    //                     </li>
    //                     <li className="menu-item-has-children">
    //                       <a href="#">Post Type</a>
    //                       <ul className="sub-menu">
    //                         <li>
    //                           <a href="blog.html">Our Blog</a>
    //                         </li>
    //                         <li>
    //                           <a href="blog-details.html">Blog Details</a>
    //                         </li>
    //                       </ul>
    //                     </li>
    //                     <li>
    //                       <a href="nft.html">NFT</a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //                 <div className="tgmenu__action">
    //                   <ul className="list-wrap">
    //                     <li className="mode-switcher">
    //                       <nav className="switcher__tab">
    //                         <span className="switcher__btn light-mode">
    //                           <i className="flaticon-sun" />
    //                         </span>
    //                         <span className="switcher__mode" />
    //                         <span className="switcher__btn dark-mode">
    //                           <i className="flaticon-moon" />
    //                         </span>
    //                       </nav>
    //                     </li>
    //                     <li className="user">
    //                       <a href="#">
    //                         <i className="far fa-user" />
    //                       </a>
    //                     </li>
    //                     <li className="header-cart">
    //                       <a href="#">
    //                         <i className="far fa-shopping-basket" />
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </nav>
    //               <div className="mobile-nav-toggler">
    //                 <i className="fas fa-bars" />
    //               </div>
    //             </div>
    //             <div className="tgmobile__menu">
    //               <nav className="tgmobile__menu-box">
    //                 <div className="close-btn">
    //                   <i className="fas fa-times" />
    //                 </div>
    //                 <div className="nav-logo">
    //                   <a href="index.html" className="logo-dark">
    //                     <img src={images.logo} alt="Logo" />
    //                   </a>
    //                   <a href="index.html" className="logo-light">
    //                     <img src={images.w_logo} alt="Logo" />
    //                   </a>
    //                 </div>
    //                 <div className="tgmobile__search">
    //                   <form action="#">
    //                     <input type="text" placeholder="Search here..." />
    //                     <button type="submit">
    //                       <i className="far fa-search" />
    //                     </button>
    //                   </form>
    //                 </div>
    //                 <div className="tgmobile__menu-outer" />
    //                 <div className="social-links">
    //                   <ul className="list-wrap">
    //                     <li>
    //                       <a href="#">
    //                         <i className="fab fa-facebook-f" />
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a href="#">
    //                         <i className="fab fa-twitter" />
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a href="#">
    //                         <i className="fab fa-instagram" />
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a href="#">
    //                         <i className="fab fa-linkedin-in" />
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a href="#">
    //                         <i className="fab fa-youtube" />
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </nav>
    //             </div>
    //             <div className="tgmobile__menu-backdrop" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="offCanvas__wrap">
    //       <div className="offCanvas__body">
    //         <div className="offCanvas__toggle">
    //           <i className="flaticon-addition" />
    //         </div>
    //         <div className="offCanvas__content">
    //           <div className="offCanvas__logo logo">
    //             <a href="index.html" className="logo-dark">
    //               <img src={images.logo} alt="Logo" />
    //             </a>
    //             <a href="index.html" className="logo-light">
    //               <img src={images.w_logo} alt="Logo" />
    //             </a>
    //           </div>
    //           <p>Change how the world works with Biotellus, made for ecology.</p>
    //           <ul className="offCanvas__instagram list-wrap">
    //             <li>
    //               <a href="../assets/img/blog/blog01.jpg" className="popup-image">
    //                 <img src={images.blog01} alt="img" />
    //               </a>
    //             </li>
    //             <li>
    //               <a href="../assets/img/blog/blog02.jpg" className="popup-image">
    //                 <img src={images.blog02} alt="img" />
    //               </a>
    //             </li>
    //             <li>
    //               <a href="../assets/img/blog/blog03.jpg" className="popup-image">
    //                 <img src={images.blog03} alt="img" />
    //               </a>
    //             </li>
    //             <li>
    //               <a href="../assets/img/blog/blog04.jpg" className="popup-image">
    //                 <img src={images.blog04} alt="img" />
    //               </a>
    //             </li>
    //             <li>
    //               <a href="../assets/img/blog/blog05.jpg" className="popup-image">
    //                 <img src={images.blog05} alt="img" />
    //               </a>
    //             </li>
    //             <li>
    //               <a href="../assets/img/blog/blog06.jpg" className="popup-image">
    //                 <img src={images.blog06} alt="img" />
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="offCanvas__contact">
    //           <h4 className="title">Get In Touch</h4>
    //           <ul className="offCanvas__contact-list list-wrap">
    //             <li>
    //               <i className="fas fa-envelope-open" />
    //               <a href="mailto:info@webmail.com">info@webmail.com</a>
    //             </li>
    //             <li>
    //               <i className="fas fa-phone" />
    //               <a href="tel:88899988877">888 999 888 77</a>
    //             </li>
    //             <li>
    //               <i className="fas fa-map-marker-alt" /> 12/A, New Booston, NYC
    //             </li>
    //           </ul>
    //           <ul className="offCanvas__social list-wrap">
    //             <li>
    //               <a href="#">
    //                 <i className="fab fa-facebook-f" />
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#">
    //                 <i className="fab fa-twitter" />
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#">
    //                 <i className="fab fa-linkedin-in" />
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#">
    //                 <i className="fab fa-youtube" />
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="offCanvas__overlay" />
    //   </header>

    //   <main>
    //     <section className="tgbanner__area">
    //       <div className="container">
    //         <div className="tgbanner__grid">
    //           <div className="tgbanner__post big-post">
    //             <div className="tgbanner__thumb tgImage__hover">
    //               <a href="blog-details.html">
    //                 <img src={images.blog01} alt="img" />
    //               </a>
    //             </div>
    //             <div className="tgbanner__content">
    //               <ul className="tgbanner__content-meta list-wrap">
    //                 <li className="category">
    //                   <a href="blog.html">technology</a>
    //                 </li>
    //                 <li>
    //                   <span className="by">By</span> <a href="blog.html">alonso d.</a>
    //                 </li>
    //                 <li>nov 21, 2022</li>
    //               </ul>
    //               <h2 className="title tgcommon__hover">
    //                 <a href="blog-details.html">
    //                   The multiverse is a hypothetical group of multiple universes.
    //                 </a>
    //               </h2>
    //             </div>
    //           </div>
    //           <div className="tgbanner__side-post">
    //             <div className="tgbanner__post small-post">
    //               <div className="tgbanner__thumb tgImage__hover">
    //                 <a href="blog-details.html">
    //                   <img src={images.blog02} alt="img" />
    //                 </a>
    //               </div>
    //               <div className="tgbanner__content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">multiverse</a>
    //                   </li>
    //                 </ul>
    //                 <h2 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     Together these universes comprise everything that exists
    //                   </a>
    //                 </h2>
    //               </div>
    //             </div>
    //             <div className="tgbanner__post small-post">
    //               <div className="tgbanner__thumb tgImage__hover">
    //                 <a href="blog-details.html">
    //                   <img src={images.blog03} alt="img" />
    //                 </a>
    //               </div>
    //               <div className="tgbanner__content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">technology</a>
    //                   </li>
    //                 </ul>
    //                 <h2 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     Bubble universes or baby black hole universes may exist...
    //                   </a>
    //                 </h2>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="trending-post-area section__hover-line pt-25">
    //       <div className="container">
    //         <div className="section__title-wrap mb-40">
    //           <div className="row align-items-end">
    //             <div className="col-sm-6">
    //               <div className="section__title">
    //                 <span className="section__sub-title">Popular Posts</span>
    //                 <h3 className="section__main-title">Trending News</h3>
    //               </div>
    //             </div>
    //             <div className="col-sm-6">
    //               <div className="section__read-more text-start text-sm-end">
    //                 <a href="blog.html">
    //                   More Post <i className="far fa-long-arrow-right" />
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="trending__slider">
    //           <div className="swiper-container trending-active">
    //             <div className="swiper-wrapper">
    //               <div className="swiper-slide">
    //                 <div className="trending__post">
    //                   <div className="trending__post-thumb tgImage__hover">
    //                     <a href="#" className="addWish">
    //                       <i className="fal fa-heart" />
    //                     </a>
    //                     <a href="blog-details.html">
    //                       <img src={images.blog04} alt="img" />
    //                     </a>
    //                     <span className="is_trend">
    //                       <i className="fas fa-bolt" />
    //                     </span>
    //                   </div>
    //                   <div className="trending__post-content">
    //                     <ul className="tgbanner__content-meta list-wrap">
    //                       <li className="category">
    //                         <a href="blog.html">Gaming</a>
    //                       </li>
    //                       <li>
    //                         <span className="by">By</span> <a href="blog.html">miranda h.</a>
    //                       </li>
    //                     </ul>
    //                     <h4 className="title tgcommon__hover">
    //                       <a href="blog-details.html">
    //                         Scientists speculate that ours might not be held
    //                       </a>
    //                     </h4>
    //                     <ul className="post__activity list-wrap">
    //                       <li>
    //                         <i className="fal fa-signal" /> 1.0k
    //                       </li>
    //                       <li>
    //                         <a href="blog-details.html">
    //                           <i className="fal fa-comment-dots" /> 128
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <i className="fal fa-share-alt" /> 29
    //                       </li>
    //                     </ul>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="swiper-slide">
    //                 <div className="trending__post">
    //                   <div className="trending__post-thumb tgImage__hover">
    //                     <a href="#" className="addWish">
    //                       <i className="fal fa-heart" />
    //                     </a>
    //                     <a href="blog-details.html">
    //                       <img src={images.blog05} alt="img" />
    //                     </a>
    //                   </div>
    //                   <div className="trending__post-content">
    //                     <ul className="tgbanner__content-meta list-wrap">
    //                       <li className="category">
    //                         <a href="blog.html">tech</a>
    //                       </li>
    //                       <li>
    //                         <span className="by">By</span> <a href="blog.html">miranda h.</a>
    //                       </li>
    //                     </ul>
    //                     <h4 className="title tgcommon__hover">
    //                       <a href="blog-details.html">
    //                         The Multiverse is the collection of alternate universes
    //                       </a>
    //                     </h4>
    //                     <ul className="post__activity list-wrap">
    //                       <li>
    //                         <i className="fal fa-signal" /> 1.0k
    //                       </li>
    //                       <li>
    //                         <a href="blog-details.html">
    //                           <i className="fal fa-comment-dots" /> 115
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <i className="fal fa-share-alt" /> 19
    //                       </li>
    //                     </ul>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="swiper-slide">
    //                 <div className="trending__post">
    //                   <div className="trending__post-thumb tgImage__hover">
    //                     <a href="#" className="addWish">
    //                       <i className="fal fa-heart" />
    //                     </a>
    //                     <a href="blog-details.html">
    //                       <img src={images.blog06} alt="img" />
    //                     </a>
    //                     <span className="is_trend">
    //                       <i className="fas fa-bolt" />
    //                     </span>
    //                   </div>
    //                   <div className="trending__post-content">
    //                     <ul className="tgbanner__content-meta list-wrap">
    //                       <li className="category">
    //                         <a href="blog.html">movie</a>
    //                       </li>
    //                       <li>
    //                         <span className="by">By</span> <a href="blog.html">miranda h.</a>
    //                       </li>
    //                     </ul>
    //                     <h4 className="title tgcommon__hover">
    //                       <a href="blog-details.html">
    //                         That share a universal hierarchy a large variety of these
    //                       </a>
    //                     </h4>
    //                     <ul className="post__activity list-wrap">
    //                       <li>
    //                         <i className="fal fa-signal" /> 1.2k
    //                       </li>
    //                       <li>
    //                         <a href="blog-details.html">
    //                           <i className="fal fa-comment-dots" /> 110
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <i className="fal fa-share-alt" /> 16
    //                       </li>
    //                     </ul>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="swiper-slide">
    //                 <div className="trending__post">
    //                   <div className="trending__post-thumb tgImage__hover">
    //                     <a href="#" className="addWish">
    //                       <i className="fal fa-heart" />
    //                     </a>
    //                     <a href="blog-details.html">
    //                       <img src={images.blog07} alt="img" />
    //                     </a>
    //                   </div>
    //                   <div className="trending__post-content">
    //                     <ul className="tgbanner__content-meta list-wrap">
    //                       <li className="category">
    //                         <a href="blog.html">sports</a>
    //                       </li>
    //                       <li>
    //                         <span className="by">By</span> <a href="blog.html">miranda h.</a>
    //                       </li>
    //                     </ul>
    //                     <h4 className="title tgcommon__hover">
    //                       <a href="blog-details.html">
    //                         Universes were originated from another due to a major
    //                       </a>
    //                     </h4>
    //                     <ul className="post__activity list-wrap">
    //                       <li>
    //                         <i className="fal fa-signal" /> 1.5k
    //                       </li>
    //                       <li>
    //                         <a href="blog-details.html">
    //                           <i className="fal fa-comment-dots" /> 150
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <i className="fal fa-share-alt" /> 42
    //                       </li>
    //                     </ul>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="swiper-slide">
    //                 <div className="trending__post">
    //                   <div className="trending__post-thumb tgImage__hover">
    //                     <a href="#" className="addWish">
    //                       <i className="fal fa-heart" />
    //                     </a>
    //                     <a href="blog-details.html">
    //                       <img src={images.blog08} alt="img" />
    //                     </a>
    //                   </div>
    //                   <div className="trending__post-content">
    //                     <ul className="tgbanner__content-meta list-wrap">
    //                       <li className="category">
    //                         <a href="blog.html">sports</a>
    //                       </li>
    //                       <li>
    //                         <span className="by">By</span> <a href="blog.html">miranda h.</a>
    //                       </li>
    //                     </ul>
    //                     <h4 className="title tgcommon__hover">
    //                       <a href="blog-details.html">
    //                         A hypothetical collection of potentially diverse
    //                       </a>
    //                     </h4>
    //                     <ul className="post__activity list-wrap">
    //                       <li>
    //                         <i className="fal fa-signal" /> 1.5k
    //                       </li>
    //                       <li>
    //                         <a href="blog-details.html">
    //                           <i className="fal fa-comment-dots" /> 150
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <i className="fal fa-share-alt" /> 32
    //                       </li>
    //                     </ul>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="featured-post-area section__hover-line pt-75">
    //       <div className="container">
    //         <div className="section__title-wrap mb-40">
    //           <div className="row align-items-end">
    //             <div className="col-sm-6">
    //               <div className="section__title">
    //                 <span className="section__sub-title">Featured</span>
    //                 <h3 className="section__main-title">Editor Choice</h3>
    //               </div>
    //             </div>
    //             <div className="col-sm-6">
    //               <div className="section__read-more text-start text-sm-end">
    //                 <a href="blog.html">
    //                   More Featured Post <i className="far fa-long-arrow-right" />
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="col-lg-4 col-sm-6">
    //             <div className="featured__post">
    //               <div className="featured__thumb" data-background="../assets/img/blog/blog08.jpg">
    //                 01
    //               </div>
    //               <div className="featured__content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">nature</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">Yokolili L.</a>
    //                   </li>
    //                 </ul>
    //                 <h4 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     A hypothetical collection of potentially diverse
    //                   </a>
    //                 </h4>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-lg-4 col-sm-6">
    //             <div className="featured__post">
    //               <div className="featured__thumb" data-background="../assets/img/blog/blog09.jpg">
    //                 02
    //               </div>
    //               <div className="featured__content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">seo</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">limonda a.</a>
    //                   </li>
    //                 </ul>
    //                 <h4 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     Experimentally accessible by a connected community
    //                   </a>
    //                 </h4>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-lg-4 col-sm-6">
    //             <div className="featured__post">
    //               <div className="featured__thumb" data-background="../assets/img/blog/blog10.jpg">
    //                 03
    //               </div>
    //               <div className="featured__content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">human</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">ukolili l.</a>
    //                   </li>
    //                 </ul>
    //                 <h4 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     Stanford physicists Andrei Linde In a new study
    //                   </a>
    //                 </h4>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-lg-4 col-sm-6">
    //             <div className="featured__post">
    //               <div className="featured__thumb" data-background="../assets/img/blog/blog11.jpg">
    //                 04
    //               </div>
    //               <div className="featured__content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">technology</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">Pablo M.</a>
    //                   </li>
    //                 </ul>
    //                 <h4 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     Observable universes each of which would comprise
    //                   </a>
    //                 </h4>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-lg-4 col-sm-6">
    //             <div className="featured__post">
    //               <div className="featured__thumb" data-background="../assets/img/blog/blog12.jpg">
    //                 05
    //               </div>
    //               <div className="featured__content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">gaming</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">hilix x.</a>
    //                   </li>
    //                 </ul>
    //                 <h4 className="title tgcommon__hover">
    //                   <a href="blog-details.html">Of observers the observable known universe</a>
    //                 </h4>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-lg-4 col-sm-6">
    //             <div className="featured__post">
    //               <div className="featured__thumb" data-background="../assets/img/blog/blog13.jpg">
    //                 06
    //               </div>
    //               <div className="featured__content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">medical</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">hilix x.</a>
    //                   </li>
    //                 </ul>
    //                 <h4 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     Accessible to telescopes, is about 90 billion years
    //                   </a>
    //                 </h4>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <div className="advertisement pt-45 pb-80">
    //       <div className="container">
    //         <div className="col-12">
    //           <div className="advertisement__image text-center">
    //             <a href="#">
    //               <img src={images.advertisement} alt="advertisement" />
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <section className="video-post-area section__hover-line white-bg pt-75 pb-80">
    //       <div className="container">
    //         <div className="section__title-wrap mb-40">
    //           <div className="row align-items-end">
    //             <div className="col-sm-6">
    //               <div className="section__title">
    //                 <span className="section__sub-title">Video</span>
    //                 <h3 className="section__main-title">Recent Video Post</h3>
    //               </div>
    //             </div>
    //             <div className="col-sm-6">
    //               <div className="section__read-more text-start text-sm-end">
    //                 <a href="blog.html">
    //                   More Video Post <i className="far fa-long-arrow-right" />
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="col-xl-8 col-lg-7">
    //             <div className="video__post-item big-post">
    //               <div className="video__post-thumb">
    //                 <a href="blog-details.html">
    //                   <img src={images.blog14} alt="img" />
    //                 </a>
    //                 <a href="https://www.youtube.com/watch?v=FT3ODSg1GFE" className="popup-video">
    //                   <i className="fas fa-play" />
    //                 </a>
    //               </div>
    //               <div className="video__post-content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">technology</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">alonso d.</a>
    //                   </li>
    //                   <li>nov 21, 2022</li>
    //                 </ul>
    //                 <h3 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     The multiverse is a hypothetical group of multiple universes.
    //                   </a>
    //                 </h3>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-xl-4 col-lg-5">
    //             <div className="video__post-item side-post">
    //               <div className="video__post-thumb tgImage__hover">
    //                 <a href="https://www.youtube.com/watch?v=FT3ODSg1GFE" className="popup-video">
    //                   <img src={images.blog15} alt="img" />
    //                   <i className="fas fa-play" />
    //                 </a>
    //               </div>
    //               <div className="video__post-content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">medical</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">alonso d.</a>
    //                   </li>
    //                 </ul>
    //                 <h3 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     Stanford physicists Andrei Linde In a new study
    //                   </a>
    //                 </h3>
    //               </div>
    //             </div>
    //             <div className="video__post-item side-post">
    //               <div className="video__post-thumb tgImage__hover">
    //                 <a href="https://www.youtube.com/watch?v=FT3ODSg1GFE" className="popup-video">
    //                   <img src={images.blog16} alt="img" />
    //                   <i className="fas fa-play" />
    //                 </a>
    //               </div>
    //               <div className="video__post-content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">medical</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">alonso d.</a>
    //                   </li>
    //                 </ul>
    //                 <h3 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     Accessible to telescopes, is about 90 billion years
    //                   </a>
    //                 </h3>
    //               </div>
    //             </div>
    //             <div className="video__post-item side-post">
    //               <div className="video__post-thumb tgImage__hover">
    //                 <a href="https://www.youtube.com/watch?v=FT3ODSg1GFE" className="popup-video">
    //                   <img src={images.blog17} alt="img" />
    //                   <i className="fas fa-play" />
    //                 </a>
    //               </div>
    //               <div className="video__post-content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">medical</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">alonso d.</a>
    //                   </li>
    //                 </ul>
    //                 <h3 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     Observable universes each of which would comprise
    //                   </a>
    //                 </h3>
    //               </div>
    //             </div>
    //             <div className="video__post-item side-post">
    //               <div className="video__post-thumb tgImage__hover">
    //                 <a href="https://www.youtube.com/watch?v=FT3ODSg1GFE" className="popup-video">
    //                   <img src={images.blog18} alt="img" />
    //                   <i className="fas fa-play" />
    //                 </a>
    //               </div>
    //               <div className="video__post-content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">medical</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">alonso d.</a>
    //                   </li>
    //                 </ul>
    //                 <h3 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     Experimentally accessible by a connected community
    //                   </a>
    //                 </h3>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="hand-picked-area black-bg fix section__hover-line pt-75 pb-80">
    //       <div className="container">
    //         <div className="section__title-wrap section__title-white mb-40">
    //           <div className="row align-items-end">
    //             <div className="col-sm-6">
    //               <div className="section__title">
    //                 <span className="section__sub-title">hand-picked</span>
    //                 <h3 className="section__main-title">More to Watch</h3>
    //               </div>
    //             </div>
    //             <div className="col-sm-6">
    //               <div className="section__read-more text-start text-sm-end">
    //                 <a href="blog.html">
    //                   Hand-Picked Post <i className="far fa-long-arrow-right" />
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="trending__slider dark-post-slider">
    //         <div className="swiper-container handpicked-active">
    //           <div className="swiper-wrapper">
    //             <div className="swiper-slide">
    //               <div className="trending__post">
    //                 <div className="trending__post-thumb tgImage__hover">
    //                   <a href="#" className="addWish">
    //                     <i className="fal fa-heart" />
    //                   </a>
    //                   <a href="blog-details.html">
    //                     <img src={images.blog19} alt="img" />
    //                   </a>
    //                   <span className="is_trend">
    //                     <i className="fas fa-bolt" />
    //                   </span>
    //                 </div>
    //                 <div className="trending__post-content">
    //                   <ul className="tgbanner__content-meta list-wrap">
    //                     <li className="category">
    //                       <a href="blog.html">Gaming</a>
    //                     </li>
    //                     <li>
    //                       <span className="by">By</span> <a href="blog.html">miranda h.</a>
    //                     </li>
    //                   </ul>
    //                   <h4 className="title tgcommon__hover">
    //                     <a href="blog-details.html">
    //                       Scientists speculate that ours might not be held
    //                     </a>
    //                   </h4>
    //                   <ul className="post__activity list-wrap">
    //                     <li>
    //                       <i className="fal fa-signal" /> 1.0k
    //                     </li>
    //                     <li>
    //                       <a href="blog-details.html">
    //                         <i className="fal fa-comment-dots" /> 128
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <i className="fal fa-share-alt" /> 29
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="swiper-slide">
    //               <div className="trending__post">
    //                 <div className="trending__post-thumb tgImage__hover">
    //                   <a href="#" className="addWish">
    //                     <i className="fal fa-heart" />
    //                   </a>
    //                   <a href="blog-details.html">
    //                     <img src={images.blog20} alt="img" />
    //                   </a>
    //                 </div>
    //                 <div className="trending__post-content">
    //                   <ul className="tgbanner__content-meta list-wrap">
    //                     <li className="category">
    //                       <a href="blog.html">tech</a>
    //                     </li>
    //                     <li>
    //                       <span className="by">By</span> <a href="blog.html">miranda h.</a>
    //                     </li>
    //                   </ul>
    //                   <h4 className="title tgcommon__hover">
    //                     <a href="blog-details.html">
    //                       The Multiverse is the collection of alternate universes
    //                     </a>
    //                   </h4>
    //                   <ul className="post__activity list-wrap">
    //                     <li>
    //                       <i className="fal fa-signal" /> 1.0k
    //                     </li>
    //                     <li>
    //                       <a href="blog-details.html">
    //                         <i className="fal fa-comment-dots" /> 115
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <i className="fal fa-share-alt" /> 19
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="swiper-slide">
    //               <div className="trending__post">
    //                 <div className="trending__post-thumb tgImage__hover">
    //                   <a href="#" className="addWish">
    //                     <i className="fal fa-heart" />
    //                   </a>
    //                   <a href="blog-details.html">
    //                     <img src={images.blog21} alt="img" />
    //                   </a>
    //                   <span className="is_trend">
    //                     <i className="fas fa-bolt" />
    //                   </span>
    //                 </div>
    //                 <div className="trending__post-content">
    //                   <ul className="tgbanner__content-meta list-wrap">
    //                     <li className="category">
    //                       <a href="blog.html">movie</a>
    //                     </li>
    //                     <li>
    //                       <span className="by">By</span> <a href="blog.html">miranda h.</a>
    //                     </li>
    //                   </ul>
    //                   <h4 className="title tgcommon__hover">
    //                     <a href="blog-details.html">
    //                       The Multiverse is the collection of alternate universes
    //                     </a>
    //                   </h4>
    //                   <ul className="post__activity list-wrap">
    //                     <li>
    //                       <i className="fal fa-signal" /> 1.2k
    //                     </li>
    //                     <li>
    //                       <a href="blog-details.html">
    //                         <i className="fal fa-comment-dots" /> 110
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <i className="fal fa-share-alt" /> 16
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="swiper-slide">
    //               <div className="trending__post">
    //                 <div className="trending__post-thumb tgImage__hover">
    //                   <a href="#" className="addWish">
    //                     <i className="fal fa-heart" />
    //                   </a>
    //                   <a href="blog-details.html">
    //                     <img src={images.blog22} alt="img" />
    //                   </a>
    //                 </div>
    //                 <div className="trending__post-content">
    //                   <ul className="tgbanner__content-meta list-wrap">
    //                     <li className="category">
    //                       <a href="blog.html">sports</a>
    //                     </li>
    //                     <li>
    //                       <span className="by">By</span> <a href="blog.html">miranda h.</a>
    //                     </li>
    //                   </ul>
    //                   <h4 className="title tgcommon__hover">
    //                     <a href="blog-details.html">
    //                       Universes were originated from another due to a major
    //                     </a>
    //                   </h4>
    //                   <ul className="post__activity list-wrap">
    //                     <li>
    //                       <i className="fal fa-signal" /> 1.5k
    //                     </li>
    //                     <li>
    //                       <a href="blog-details.html">
    //                         <i className="fal fa-comment-dots" /> 150
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <i className="fal fa-share-alt" /> 42
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="swiper-slide">
    //               <div className="trending__post">
    //                 <div className="trending__post-thumb tgImage__hover">
    //                   <a href="#" className="addWish">
    //                     <i className="fal fa-heart" />
    //                   </a>
    //                   <a href="blog-details.html">
    //                     <img src={images.blog23} alt="img" />
    //                   </a>
    //                 </div>
    //                 <div className="trending__post-content">
    //                   <ul className="tgbanner__content-meta list-wrap">
    //                     <li className="category">
    //                       <a href="blog.html">sports</a>
    //                     </li>
    //                     <li>
    //                       <span className="by">By</span> <a href="blog.html">miranda h.</a>
    //                     </li>
    //                   </ul>
    //                   <h4 className="title tgcommon__hover">
    //                     <a href="blog-details.html">
    //                       A hypothetical collection of potentially diverse
    //                     </a>
    //                   </h4>
    //                   <ul className="post__activity list-wrap">
    //                     <li>
    //                       <i className="fal fa-signal" /> 1.5k
    //                     </li>
    //                     <li>
    //                       <a href="blog-details.html">
    //                         <i className="fal fa-comment-dots" /> 150
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <i className="fal fa-share-alt" /> 32
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="swiper-slide">
    //               <div className="trending__post">
    //                 <div className="trending__post-thumb tgImage__hover">
    //                   <a href="#" className="addWish">
    //                     <i className="fal fa-heart" />
    //                   </a>
    //                   <a href="blog-details.html">
    //                     <img src={images.blog24} alt="img" />
    //                   </a>
    //                 </div>
    //                 <div className="trending__post-content">
    //                   <ul className="tgbanner__content-meta list-wrap">
    //                     <li className="category">
    //                       <a href="blog.html">sports</a>
    //                     </li>
    //                     <li>
    //                       <span className="by">By</span> <a href="blog.html">miranda h.</a>
    //                     </li>
    //                   </ul>
    //                   <h4 className="title tgcommon__hover">
    //                     <a href="blog-details.html">
    //                       That share a universal hierarchy a large variety of these
    //                     </a>
    //                   </h4>
    //                   <ul className="post__activity list-wrap">
    //                     <li>
    //                       <i className="fal fa-signal" /> 1.5k
    //                     </li>
    //                     <li>
    //                       <a href="blog-details.html">
    //                         <i className="fal fa-comment-dots" /> 150
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <i className="fal fa-share-alt" /> 32
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="stories-post-area section__hover-line pt-75 pb-40">
    //       <div className="container">
    //         <div className="section__title-wrap mb-40">
    //           <div className="row align-items-end">
    //             <div className="col-sm-6">
    //               <div className="section__title">
    //                 <span className="section__sub-title">Stories</span>
    //                 <h3 className="section__main-title">Popular Stories</h3>
    //               </div>
    //             </div>
    //             <div className="col-sm-6">
    //               <div className="section__read-more text-start text-sm-end">
    //                 <a href="blog.html">
    //                   Stories Post <i className="far fa-long-arrow-right" />
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row row-gutters-40">
    //           <div className="col-md-6">
    //             <div className="stories-post__item">
    //               <div className="stories-post__thumb tgImage__hover">
    //                 <a href="blog-details.html">
    //                   <img src={images.blog25} alt="img" />
    //                 </a>
    //               </div>
    //               <div className="stories-post__content video__post-content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">technology</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">alonso d.</a>
    //                   </li>
    //                   <li>nov 21, 2022</li>
    //                 </ul>
    //                 <h3 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     The multiverse is a hypothetical group of the multiple universes.
    //                   </a>
    //                 </h3>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-md-6">
    //             <div className="stories-post__item">
    //               <div className="stories-post__thumb tgImage__hover">
    //                 <a href="blog-details.html">
    //                   <img src={images.blog26} alt="img" />
    //                 </a>
    //               </div>
    //               <div className="stories-post__content video__post-content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">technology</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">alonso d.</a>
    //                   </li>
    //                   <li>nov 22, 2022</li>
    //                 </ul>
    //                 <h3 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     Experimentally accessible by a connection to the multiple communities
    //                   </a>
    //                 </h3>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="col-xl-3 col-lg-4 col-md-6">
    //             <div className="trending__post stories-small-post__item">
    //               <div className="trending__post-thumb tgImage__hover">
    //                 <a href="#" className="addWish">
    //                   <i className="fal fa-heart" />
    //                 </a>
    //                 <a href="blog-details.html">
    //                   <img src={images.blog27} alt="img" />
    //                 </a>
    //               </div>
    //               <div className="trending__post-content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">Gaming</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">miranda h.</a>
    //                   </li>
    //                 </ul>
    //                 <h4 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     Scientists speculate that ours might not be held
    //                   </a>
    //                 </h4>
    //                 <ul className="post__activity list-wrap">
    //                   <li>
    //                     <i className="fal fa-signal" /> 1.5k
    //                   </li>
    //                   <li>
    //                     <a href="blog-details.html">
    //                       <i className="fal fa-comment-dots" /> 150
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <i className="fal fa-share-alt" /> 32
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-xl-3 col-lg-4 col-md-6">
    //             <div className="trending__post stories-small-post__item">
    //               <div className="trending__post-thumb tgImage__hover">
    //                 <a href="#" className="addWish">
    //                   <i className="fal fa-heart" />
    //                 </a>
    //                 <a href="blog-details.html">
    //                   <img src={images.blog28} alt="img" />
    //                 </a>
    //               </div>
    //               <div className="trending__post-content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">tech</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">miranda h.</a>
    //                   </li>
    //                 </ul>
    //                 <h4 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     The Multiverse is the collection of alternate universes
    //                   </a>
    //                 </h4>
    //                 <ul className="post__activity list-wrap">
    //                   <li>
    //                     <i className="fal fa-signal" /> 1.5k
    //                   </li>
    //                   <li>
    //                     <a href="blog-details.html">
    //                       <i className="fal fa-comment-dots" /> 150
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <i className="fal fa-share-alt" /> 32
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-xl-3 col-lg-4 col-md-6">
    //             <div className="trending__post stories-small-post__item">
    //               <div className="trending__post-thumb tgImage__hover">
    //                 <a href="#" className="addWish">
    //                   <i className="fal fa-heart" />
    //                 </a>
    //                 <a href="blog-details.html">
    //                   <img src={images.blog29} alt="img" />
    //                 </a>
    //               </div>
    //               <div className="trending__post-content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">movie</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">miranda h.</a>
    //                   </li>
    //                 </ul>
    //                 <h4 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     That share a universal hierarchy a large variety of these
    //                   </a>
    //                 </h4>
    //                 <ul className="post__activity list-wrap">
    //                   <li>
    //                     <i className="fal fa-signal" /> 1.2k
    //                   </li>
    //                   <li>
    //                     <a href="blog-details.html">
    //                       <i className="fal fa-comment-dots" /> 150
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <i className="fal fa-share-alt" /> 26
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-xl-3 col-lg-4 col-md-6">
    //             <div className="trending__post stories-small-post__item">
    //               <div className="trending__post-thumb tgImage__hover">
    //                 <a href="#" className="addWish">
    //                   <i className="fal fa-heart" />
    //                 </a>
    //                 <a href="blog-details.html">
    //                   <img src={images.blog30} alt="img" />
    //                 </a>
    //               </div>
    //               <div className="trending__post-content">
    //                 <ul className="tgbanner__content-meta list-wrap">
    //                   <li className="category">
    //                     <a href="blog.html">sports</a>
    //                   </li>
    //                   <li>
    //                     <span className="by">By</span> <a href="blog.html">miranda h.</a>
    //                   </li>
    //                 </ul>
    //                 <h4 className="title tgcommon__hover">
    //                   <a href="blog-details.html">
    //                     Universes were originated from another due to a major
    //                   </a>
    //                 </h4>
    //                 <ul className="post__activity list-wrap">
    //                   <li>
    //                     <i className="fal fa-signal" /> 1.2k
    //                   </li>
    //                   <li>
    //                     <a href="blog-details.html">
    //                       <i className="fal fa-comment-dots" /> 150
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <i className="fal fa-share-alt" /> 26
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="newsletter-area pb-80">
    //       <div className="container">
    //         <div className="newsletter__wrap">
    //           <div className="row align-items-center">
    //             <div className="col-xl-5 col-lg-6">
    //               <div className="newsletter__title">
    //                 <span className="sub-title">newsletter</span>
    //                 <h4 className="title">
    //                   Get notified of the best deals on our WordPress Themes
    //                 </h4>
    //               </div>
    //             </div>
    //             <div className="col-xl-7 col-lg-6">
    //               <div className="newsletter__form-wrap">
    //                 <form action="#" className="newsletter__form">
    //                   <div className="newsletter__form-grp">
    //                     <input type="email" placeholder="Email address" required />
    //                     <div className="form-check">
    //                       <label className="form-check-label" htmlFor="flexCheckDefault">
    //                         I agree that my submitted data is being collected and stored.
    //                         <input
    //                           className="form-check-input"
    //                           type="checkbox"
    //                           id="flexCheckDefault"
    //                         />
    //                       </label>
    //                     </div>
    //                   </div>
    //                   <button className="btn" type="submit">
    //                     <span className="text">Subscribe</span> <i className="fas fa-paper-plane" />
    //                   </button>
    //                 </form>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </main>

    //   <footer className="footer-area black-bg">
    //     <div className="container">
    //       <div className="footer__top-wrap">
    //         <div className="row">
    //           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
    //             <div className="footer__widget">
    //               <h4 className="fw-title">Worldwide</h4>
    //               <ul className="list-wrap">
    //                 <li>
    //                   <a href="#">U.N.</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Conflicts</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Terrorism</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Disasters</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Global Economy</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Environment</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Religion</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Scandals</a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
    //             <div className="footer__widget">
    //               <h4 className="fw-title">Politics</h4>
    //               <ul className="list-wrap">
    //                 <li>
    //                   <a href="#">Executive</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Senate</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">House</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Judiciary</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Global Economy</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Foreign policy</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Polls</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Elections</a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
    //             <div className="footer__widget">
    //               <h4 className="fw-title">Entertainment</h4>
    //               <ul className="list-wrap">
    //                 <li>
    //                   <a href="#">Celebrity News</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Movies</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">TV News</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Disasters</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Music News</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Environment</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Style News</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Entertainment Video</a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
    //             <div className="footer__widget">
    //               <h4 className="fw-title">Business</h4>
    //               <ul className="list-wrap">
    //                 <li>
    //                   <a href="#">Environment</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Conflicts</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Terrorism</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Disasters</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Global Economy</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Environment</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Religion</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Scandals</a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
    //             <div className="footer__widget">
    //               <h4 className="fw-title">Health</h4>
    //               <ul className="list-wrap">
    //                 <li>
    //                   <a href="#">Movies</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Conflicts</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Terrorism</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Disasters</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Global Economy</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Scandals</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Environment</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Religion</a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //           <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
    //             <div className="footer__widget">
    //               <h4 className="fw-title">Trending In</h4>
    //               <ul className="list-wrap">
    //                 <li>
    //                   <a href="#">U.N.</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Conflicts</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Terrorism</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Disasters</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Global Economy</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Environment</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Religion</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Scandals</a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="footer__logo-wrap">
    //         <div className="row align-items-center">
    //           <div className="col-lg-3 col-md-4">
    //             <div className="footer__logo logo">
    //               <a href="index.html">
    //                 <img src={images.w_logo} alt="Logo" />
    //               </a>
    //             </div>
    //           </div>
    //           <div className="col-lg-9 col-md-8">
    //             <div className="footer__social">
    //               <ul className="list-wrap">
    //                 <li>
    //                   <a href="#">
    //                     <i className="fab fa-facebook-f" /> Facebook <span>25K</span>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#">
    //                     <i className="fab fa-twitter" /> Twitter <span>44K</span>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#">
    //                     <i className="fab fa-youtube" /> Youtube <span>91K</span>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="footer__copyright">
    //         <div className="row">
    //           <div className="col-lg-6">
    //             <div className="copyright__text">
    //               <p>
    //                 Copyright & Design By <span>@Theme_Genix</span> - 2022
    //               </p>
    //             </div>
    //           </div>
    //           <div className="col-lg-6">
    //             <div className="copyright__menu">
    //               <ul className="list-wrap">
    //                 <li>
    //                   <a href="#">Contact Us</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Terms of Use</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Advertise</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Store</a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
}
