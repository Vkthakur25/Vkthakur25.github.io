import React from 'react';
import './HomeSection.css';
function Navbar() {
  return (
    <>
      <section className="bg-lightMode d-flex">
        <div className="" style={{ height: '12vh', width: '94vw' }}>
          <ul
            className="d-flex"
            style={{ 'margin-left': '5rem', 'margin-top': '2rem' }}
          >
            <li className=" fs-4 list-unstyled">
              <a className="text-decoration-none text-black" href="">
                {' '}
                Home
              </a>
            </li>
            <li className="mx-5 fs-4 list-unstyled">
              <a className="text-decoration-none text-black" href="">
                {' '}
                About
              </a>
            </li>
            <li className="mx-4 fs-4 list-unstyled">
              <a className="text-decoration-none text-black" href="">
                {' '}
                Projects
              </a>
            </li>
            <li className="mx-5 fs-4 list-unstyled">
              <a className="text-decoration-none text-black" href="">
                {' '}
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="" style={{ height: '80vh', width: '6vw' }}>
          <div className="social-box ">
            <a href="">
              <img
                className="social"
                src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="social"
                src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="social"
                src="https://www.svgrepo.com/show/424905/instagram-logo-facebook.svg"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="social"
                src="https://www.svgrepo.com/show/306328/leetcode.svg"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="social"
                src="https://www.svgrepo.com/show/364439/discord-logo-fill.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Navbar;
