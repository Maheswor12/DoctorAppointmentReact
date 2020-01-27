import React, { Component } from "react";
import LandingNav from "./Landing/LandingNav";

class Landing extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="header-blue headerSize">
            <LandingNav />
            <div className="container hero">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                  <h1>The revolution is here.</h1>
                  <p>
                    Mauris egestas tellus non ex condimentum, ac ullamcorper
                    sapien dictum. Nam consequat neque quis sapien viverra
                    convallis. In non tempus lorem.{" "}
                  </p>
                  <button
                    className="btn btn-light btn-lg action-button"
                    type="button"
                  >
                    Learn More
                  </button>
                </div>
                <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                  <div className="iphone-mockup">
                    <img src="assets/img/iphone.svg" className="device" />
                    <div className="screen"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="features-boxed">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Features </h2>
              <p className="text-center">
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                Vestibulum nibh erat, pellentesque ut laoreet vitae.
              </p>
            </div>
            <div className="row justify-content-center features">
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-map-marker icon"></i>
                  <h3 className="name">Works everywhere</h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" className="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-clock-o icon"></i>
                  <h3 className="name">Always available</h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" className="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-list-alt icon"></i>
                  <h3 className="name">Customizable </h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" className="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-eye icon"></i>
                  <h3 className="name">Organic </h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" className="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-plane icon"></i>
                  <h3 className="name">Fast </h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" className="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-phone icon"></i>
                  <h3 className="name">Mobile-first</h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" className="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-boxed">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Team </h2>
              <p className="text-center">
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                Vestibulum nibh erat, pellentesque ut laoreet vitae.
              </p>
            </div>
            <div className="row people">
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <img className="rounded-circle" src="assets/img/1.jpg" />
                  <h3 className="name">Ben Johnson</h3>
                  <p className="title">Musician</p>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est, et interdum justo suscipit id. Etiam dictum
                    feugiat tellus, a semper massa.{" "}
                  </p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook-official"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <img className="rounded-circle" src="assets/img/2.jpg" />
                  <h3 className="name">Emily Clark</h3>
                  <p className="title">Artist</p>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est, et interdum justo suscipit id. Etiam dictum
                    feugiat tellus, a semper massa.{" "}
                  </p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook-official"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <img className="rounded-circle" src="assets/img/3.jpg" />
                  <h3 className="name">Carl Kent</h3>
                  <p className="title">Stylist</p>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est, et interdum justo suscipit id. Etiam dictum
                    feugiat tellus, a semper massa.{" "}
                  </p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook-official"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-clean">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Testimonials </h2>
              <p className="text-center">
                Our customers love us! Read what they have to say below. Aliquam
                sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet
                vitae.
              </p>
            </div>
            <div className="row people">
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est.
                  </p>
                </div>
                <div className="author">
                  <img className="rounded-circle" src="assets/img/1.jpg" />
                  <h5 className="name">Ben Johnson</h5>
                  <p className="title">CEO of Company Inc.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description">
                    Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est, et interdum justo suscipit id.
                  </p>
                </div>
                <div className="author">
                  <img className="rounded-circle" src="assets/img/3.jpg" />
                  <h5 className="name">Carl Kent</h5>
                  <p className="title">Founder of Style Co.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description">
                    Aliquam varius finibus est, et interdum justo suscipit.
                    Vulputate quis leo in, vehicula rhoncus lacus. Praesent
                    aliquam in tellus eu.
                  </p>
                </div>
                <div className="author">
                  <img className="rounded-circle" src="assets/img/2.jpg" />
                  <h5 className="name">Emily Clark</h5>
                  <p className="title">Owner of Creative Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-boxed"></div>
        <div className="footer-dark foot">
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3 item">
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <a href="#">Web design</a>
                    </li>
                    <li>
                      <a href="#">Development</a>
                    </li>
                    <li>
                      <a href="#">Hosting</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                  <h3>About</h3>
                  <ul>
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 item text">
                  <h3>Company Name</h3>
                  <p>
                    Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                    Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                    quis tristique lectus. Aliquam in arcu eget velit pulvinar
                    dictum vel in justo.
                  </p>
                </div>
                <div className="col item social">
                  <a href="#">
                    <i className="icon ion-social-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="icon ion-social-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="icon ion-social-snapchat"></i>
                  </a>
                  <a href="#">
                    <i className="icon ion-social-instagram"></i>
                  </a>
                </div>
              </div>
              <p className="copyright">Company Name © 2017</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default Landing;
