import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="header-blue headerSize">
          <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
            <div className="container">
              <a className="navbar-brand" href="#">
                Hamro Doctor
              </a>
              <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navcol-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-toggle nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      Contact Us
                    </a>
                    <div className="dropdown-menu" role="menu">
                      <a className="dropdown-item" role="presentation" href="#">
                        First Item
                      </a>
                      <a className="dropdown-item" role="presentation" href="#">
                        Second Item
                      </a>
                      <a className="dropdown-item" role="presentation" href="#">
                        Third Item
                      </a>
                    </div>
                  </li>
                </ul>
                <form className="form-inline mr-auto" target="_self">
                  <div className="form-group">
                    <label for="search-field">
                      <i className="fa fa-search"></i>
                    </label>
                    <input
                      className="form-control search-field"
                      type="search"
                      name="search"
                      id="search-field"
                    />
                  </div>
                </form>
                <span className="navbar-text">
                  {" "}
                  <a href="#" className="login">
                    Log In
                  </a>
                </span>
                <a
                  className="btn btn-light action-button"
                  role="button"
                  href="#"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </nav>
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
    );
  }
}
export default Landing;
