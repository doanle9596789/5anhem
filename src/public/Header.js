import {Link} from "react-router-dom";

export default function Header(){
    return(
        <>
            <header className="top-header th-bg" id="top-header-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 col-sm-7">
                            <div className="list-inline">
                                <a href="tel:1-7X0-555-8X22"><i className="fa fa-phone"></i>1-7X0-555-8X22</a>
                                <a href="#" className="mr-0"><i
                                    className="flaticon-facebook-placeholder-for-locate-places-on-maps"></i>20/F Green
                                    Road, Dhanmondi,</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-sm-5">
                            <ul className="top-social-media pull-right">
                                <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" className="google"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#" className="rss"><i className="fa fa-rss"></i></a></li>
                                <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>



            <header className="main-header sticky-header" id="main-header-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg navbar-light rounded">
                                <a className="navbar-brand logo" href="index.html">
                                    <img src="assets/img/logos/black-logo.png" alt="logo"/>
                                </a>
                                <button className="navbar-toggler" type="button" id="drawer">
                                    <span className="fa fa-bars"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbar">
                                    <ul className="navbar-nav  justify-content-center">
                                        <li className="nav-item dropdown active">
                                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink"
                                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#"
                                               id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                My Account
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#"
                                               id="navbarDropdownMenuLink7" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                Pages
                                            </a>

                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#"
                                               id="navbarDropdownMenuLink6" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                Agents
                                            </a>

                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#"
                                               id="navbarDropdownMenuLink5" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                Blog
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li className="dropdown-submenu"><a
                                                    className="dropdown-item dropdown-toggle" href="#">Columns</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="blog-columns-2col.html">2
                                                            Columns</a></li>
                                                        <li><a className="dropdown-item" href="blog-columns-3col.html">3
                                                            Columns</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a
                                                    className="dropdown-item dropdown-toggle" href="#">Classic</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item"
                                                               href="blog-classic-sidebar-right.html">Right Sidebar</a>
                                                        </li>
                                                        <li><a className="dropdown-item"
                                                               href="blog-classic-sidebar-left.html">Left Sidebar</a>
                                                        </li>
                                                        <li><a className="dropdown-item"
                                                               href="blog-classic-fullwidth.html">FullWidth</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a
                                                    className="dropdown-item dropdown-toggle" href="#">Blog Details</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item"
                                                               href="blog-single-sidebar-right.html">Right Sidebar</a>
                                                        </li>
                                                        <li><a className="dropdown-item"
                                                               href="blog-single-sidebar-left.html">Left Sidebar</a>
                                                        </li>
                                                        <li><a className="dropdown-item"
                                                               href="blog-single-fullwidth.html">Fullwidth</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown4"
                                               role="button" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                Shop
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                                <a className="dropdown-item" href="shop-list.html">Shop List</a>
                                                <a className="dropdown-item" href="shop-cart.html">Shop Cart</a>
                                                <a className="dropdown-item" href="shop-checkout.html">Shop Checkout</a>
                                                <a className="dropdown-item" href="shop-single.html">Shop Details</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3"
                                               role="button" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                Account
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                               <Link to={"/login"} className="dropdown-item" >Login</Link>
                                               <Link to={"/register"} className="dropdown-item" >Register</Link>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav ml-auto  justify-content-end">
                                        <li className="nav-item">
                                            <a href="submit-property.html" className="submit-btn">
                                                Submit Property
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <nav id="sidebar" className="nav-sidebar">

                <div id="dismiss">
                    <i className="fa fa-close"></i>
                </div>
                <div className="sidebar-inner">
                    <div className="sidebar-logo">
                        <img src="assets/img/logos/black-logo.png" alt="sidebarlogo"/>
                    </div>
                    <div className="sidebar-navigation">
                        <h3 className="heading">Pages</h3>
                        <ul className="menu-list">
                            <li><a href="#" className="active pt0">Index <em className="fa fa-chevron-down"></em></a>
                                <ul>
                                    <li><a href="index.html">Index 1</a></li>
                                    <li><a href="index-2.html">Index 2</a></li>
                                    <li><a href="index-3.html">Index 3</a></li>
                                    <li><a href="index-4.html">Index 4</a></li>
                                    <li><a href="index-5.html">Index 5</a></li>
                                    <li><a href="index-6.html">Index 6</a></li>
                                    <li><a href="index-7.html">Index 7</a></li>
                                    <li><a href="index-8.html">Index 8</a></li>
                                    <li><a href="index-9.html">Index 9</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Properties <em className="fa fa-chevron-down"></em></a>
                                <ul>
                                    <li>
                                        <a href="#">List Layout <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="properties-list-rightside.html">Right Sidebar</a></li>
                                            <li><a href="properties-list-leftside.html">Left Sidebar</a></li>
                                            <li><a href="properties-list-fullwidth.html">Fullwidth</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Grid Layout <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="properties-grid-rightside.html">Right Sidebar</a></li>
                                            <li><a href="properties-grid-leftside.html">Left Sidebar</a></li>
                                            <li><a href="properties-grid-fullwidth.html">Fullwidth</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Map View <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="properties-map-rightside-list.html">Map List Right Sidebar</a>
                                            </li>
                                            <li><a href="properties-map-leftside-list.html">Map List Left Sidebar</a>
                                            </li>
                                            <li><a href="properties-map-rightside-grid.html">Map Grid Right Sidebar</a>
                                            </li>
                                            <li><a href="properties-map-leftside-grid.html">Map Grid Left Sidebar</a>
                                            </li>
                                            <li><a href="properties-map-full.html">Map FullWidth</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Property Detail <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="properties-details.html">Property Detail 1</a></li>
                                            <li><a href="properties-details-2.html">Property Detail 2</a></li>
                                            <li><a href="properties-details-3.html">Property Detail 3</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Pages <em className="fa fa-chevron-down"></em></a>
                                <ul>
                                    <li>
                                        <a href="#">My Account <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="user-profile.html">User profile</a></li>
                                            <li><a href="my-properties.html">My Properties</a></li>
                                            <li><a href="favorited-properties.html">Favorited Properties</a></li>
                                            <li><a href="submit-property.html">Submit Property</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">About <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="about-me.html">About Me</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Services <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="services.html">Services 1</a></li>
                                            <li><a href="services-2.html">Services 2</a></li>
                                            <li><a href="services-details.html">Services Details</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Pricing Tables <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="pricing-tables-1.html">Pricing Tables 1</a></li>
                                            <li><a href="pricing-tables-2.html">Pricing Tables 2</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Gallery <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="gallery-1.html">Gallery 1</a></li>
                                            <li><a href="gallery-2.html">Gallery 2</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Faq <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="faq-1.html">Faq 1</a></li>
                                            <li><a href="faq-2.html">Faq 2</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Typography <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="typography.html">Typography 1</a></li>
                                            <li><a href="typography-2.html">Typography 2</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">404 Error <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="pages-404.html">404 Error 1</a></li>
                                            <li><a href="pages-404-2.html">404 Error 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="properties-comparison.html">Properties Comparison</a></li>
                                    <li><a href="search-brand.html">Search Brand</a></li>
                                    <li><a href="elements.html">Elements</a></li>
                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                    <li><a href="login.html">Login/Register</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"> Agents <em className="fa fa-chevron-down"></em></a>
                                <ul>
                                    <li>
                                        <a href="#">Agent List <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="agent-list.html">Agent List 1</a></li>
                                            <li><a href="agent-list-2.html">Agent List 2</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Agent Grid <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="agent-grid.html">Agent Grid 1</a></li>
                                            <li><a href="agent-grid-2.html">Agent Grid 2</a></li>
                                            <li><a href="agent-grid-3.html">Agent Grid 3</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="agent-detail.html">Agent Detail</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Blog <em className="fa fa-chevron-down"></em></a>
                                <ul>
                                    <li>
                                        <a href="#">Columns<em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="blog-columns-2col.html">2 Columns</a></li>
                                            <li><a href="blog-columns-3col.html">3 Columns</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Classic <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="blog-classic-sidebar-right.html">Right Sidebar</a></li>
                                            <li><a href="blog-classic-sidebar-left.html">Left Sidebar</a></li>
                                            <li><a href="blog-classic-fullwidth.html">FullWidth</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Blog Details <em className="fa fa-chevron-down"></em></a>
                                        <ul>
                                            <li><a href="blog-single-sidebar-right.html">Right Sidebar</a></li>
                                            <li><a href="blog-single-sidebar-left.html">Left Sidebar</a></li>
                                            <li><a href="blog-single-fullwidth.html">Fullwidth</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">Shop <em className="fa fa-chevron-down"></em></a>
                                <ul>

                                    <li><a className="dropdown-item" href="shop-list.html">Shop List</a></li>
                                    <li><a className="dropdown-item" href="shop-cart.html">Shop Cart</a></li>
                                    <li><a className="dropdown-item" href="shop-checkout.html">Shop Checkout</a></li>
                                    <li><a className="dropdown-item" href="shop-single.html">Shop Details</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Contact <em className="fa fa-chevron-down"></em></a>
                                <ul>
                                    <li><a className="dropdown-item" href="contact-1.html">Contact 1</a></li>
                                    <li><a className="dropdown-item" href="contact-2.html">Contact 2</a></li>
                                    <li><a className="dropdown-item" href="contact-3.html">Contact 3</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="submit-property.html">Submit Property</a>
                            </li>
                        </ul>
                    </div>
                    <div className="get-in-touch">
                        <h3 className="heading">Get in Touch</h3>
                        <div className="media">
                            <i className="fa fa-phone"></i>
                            <div className="media-body">
                                <a href="tel:0477-0477-8556-552">0477 8556 552</a>
                            </div>
                        </div>
                        <div className="media">
                            <i className="fa fa-envelope"></i>
                            <div className="media-body">
                                <a href="#">info@themevessel.com</a>
                            </div>
                        </div>
                        <div className="media mb-0">
                            <i className="fa fa-fax"></i>
                            <div className="media-body">
                                <a href="#">info@themevessel.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="get-social">
                        <h3 className="heading">Get Social</h3>
                        <a href="#" className="facebook-bg">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#" className="twitter-bg">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#" className="google-bg">
                            <i className="fa fa-google"></i>
                        </a>
                        <a href="#" className="linkedin-bg">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </nav>



            <div className="banner banner-bg" id="particles-banner-wrapper">
                <div id="particles-banner-2"></div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item item-bg active">
                            <div className="carousel-caption banner-slider-inner d-flex h-100 text-left">
                                <div className="carousel-content container b1-inner-2">
                                    <div className="t-center">
                                        <h3 data-animation="animated fadeInDown delay-05s">Best
                                            Place <span>For Sell</span> Properties</h3>
                                        <p className="text-p" data-animation="animated fadeInUp delay-10s">
                                            This is real estate website template based on Bootstrap 4 framework.
                                        </p>
                                        <a data-animation="animated fadeInUp delay-10s" href="#"
                                           className="btn btn-2"><span>Get Started Now</span></a>
                                        <a data-animation="animated fadeInUp delay-10s" href="#"
                                           className="btn btn-3"><span>Learn More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item item-bg">
                            <div className="carousel-caption banner-slider-inner d-flex h-100 text-left">
                                <div className="carousel-content container b1-inner-2">
                                    <div className="t-right">
                                        <h3 data-animation="animated fadeInDown delay-05s">Find
                                            Your <span>Dream</span> Properties</h3>
                                        <p className="text-p" data-animation="animated fadeInUp delay-10s">
                                            This is real estate website template based on Bootstrap 4 framework.
                                        </p>
                                        <a data-animation="animated fadeInUp delay-10s" href="#"
                                           className="btn btn-2"><span>Get Started Now</span></a>
                                        <a data-animation="animated fadeInUp delay-10s" href="#"
                                           className="btn btn-3"><span>Learn More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item item-bg">
                            <div className="carousel-caption banner-slider-inner d-flex h-100 text-left">
                                <div className="carousel-content container b1-inner-2">
                                    <div className="t-left">
                                        <h3 data-animation="animated fadeInUp delay-05s">Discover
                                            Modern <span>Villa</span></h3>
                                        <p className="text-p" data-animation="animated fadeInUp delay-10s">
                                            This is real estate website template based on Bootstrap 4 framework.
                                        </p>
                                        <a data-animation="animated fadeInUp delay-10s" href="#"
                                           className="btn btn-2"><span>Get Started Now</span></a>
                                        <a data-animation="animated fadeInUp delay-10s" href="#"
                                           className="btn btn-3"><span>Learn More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
            <span className="slider-mover-left" aria-hidden="true">
                <i className="fa fa-angle-left"></i>
            </span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
            <span className="slider-mover-right" aria-hidden="true">
                <i className="fa fa-angle-right"></i>
            </span>
                    </a>
                    <div className="btn-secton btn-secton-2">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>


                <div className="search-area sa-show-2" id="search-area-4">
                    <div className="container">
                        <div className="search-area-inner">
                            <div className="search-contents ">
                                <form
                                    action="https://storage.googleapis.com/theme-vessel-items/checking-sites/xero-2-html/HTML/main/index.html"
                                    method="GET">
                                    <div className="row">
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="brand">
                                                    <option>Area From</option>
                                                    <option>1500</option>
                                                    <option>1200</option>
                                                    <option>900</option>
                                                    <option>600</option>
                                                    <option>300</option>
                                                    <option>100</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="property-status">
                                                    <option>Property Status</option>
                                                    <option>For Sale</option>
                                                    <option>For Rent</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="location">
                                                    <option>Location</option>
                                                    <option>United Kingdom</option>
                                                    <option>American Samoa</option>
                                                    <option>Belgium</option>
                                                    <option>Canada</option>
                                                    <option>Delaware</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="category">
                                                    <option>Property Types</option>
                                                    <option>Residential</option>
                                                    <option>Commercial</option>
                                                    <option>Land</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="body">
                                                    <option>Bedrooms</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="transmission">
                                                    <option>Bathrooms</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <div className="range-slider">
                                                    <div data-min="0" data-max="150000" data-unit="USD"
                                                         data-min-name="min_price" data-max-name="max_price"
                                                         className="range-slider-ui ui-slider"
                                                         aria-disabled="false"></div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-3">
                                            <div className="form-group">
                                                <button className="btn btn-block btn-4" type="submit">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-area sa-show" id="search-area-1">
                    <div className="container">
                        <div className="search-area-inner">
                            <div className="search-contents ">
                                <form
                                    action="https://storage.googleapis.com/theme-vessel-items/checking-sites/xero-2-html/HTML/main/index.html"
                                    method="GET">
                                    <div className="row">
                                        <div className="col-6 col-lg-3 col-md-6">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="area">
                                                    <option>Area From</option>
                                                    <option>1500</option>
                                                    <option>1200</option>
                                                    <option>900</option>
                                                    <option>600</option>
                                                    <option>300</option>
                                                    <option>100</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="property-status">
                                                    <option>Property Status</option>
                                                    <option>For Sale</option>
                                                    <option>For Rent</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="location">
                                                    <option>Location</option>
                                                    <option>United Kingdom</option>
                                                    <option>American Samoa</option>
                                                    <option>Belgium</option>
                                                    <option>Canada</option>
                                                    <option>Delaware</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="category">
                                                    <option>Property Types</option>
                                                    <option>Residential</option>
                                                    <option>Commercial</option>
                                                    <option>Land</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="bedrooms">
                                                    <option>Bedrooms</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6">
                                            <div className="form-group">
                                                <select className="selectpicker search-fields" name="bathrooms">
                                                    <option>Bathrooms</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-6 col-lg-3 col-md-6">
                                            <div className="form-group">
                                                <button className="btn btn-block btn-4" type="submit">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
