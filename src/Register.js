import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
        <div class="register-photo">
          <div class="form-container">
            <div class="image-holder"></div>
            <form method="post" enctype="multipart/form-data">
              <h2 class="text-center">
                <strong>Create</strong> an account.
              </h2>
              <div class="form-group">
                <input
                  class="form-control"
                  type="text"
                  name="fullname"
                  placeholder="Fullname"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="number"
                  name="number"
                  placeholder="Number"
                  required
                />
              </div>

              <div class="form-group">
                <select class="form-control">
                  <option>Blood Group</option>
                  <option>A(+)</option>
                  <option>B(+)</option>
                  <option>0(+)</option>
                  <option>AB(+)</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="number"
                  name="age"
                  placeholder="Age"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="password"
                  name="password-repeat"
                  placeholder="Password (repeat)"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="file"
                  name="file"
                  required
                />
              </div>
              <div class="form-group">
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" />I agree to
                    the license terms.
                  </label>
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn-block" type="submit">
                  Sign Up
                </button>
              </div>
              <a href="http://localhost:3001/login" class="already">
                You already have an account? Login here.
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
