import React from 'react';
import './HomeSection.css';
function Navbar() {
  return (
    <>
      <section className="bg-lightMode d-flex">
        <div
          className=""
          style={{ height: '12vh', width: '94vw', border: '2px solid black' }}
        >
          hii i am Border horizontal
        </div>
        <div
          className=""
          style={{ height: '80vh', width: '6vw', border: '2px solid black' }}>
          <div className="social-box ">
            <img className="social" src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" alt="" />
            <img className="social" src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" alt="" />
            <img className="social" src="https://www.svgrepo.com/show/424905/instagram-logo-facebook.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Navbar;
