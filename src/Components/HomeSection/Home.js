import React from 'react';

function Home() {
  return (
    <>
      <div className="d-flex">
        <div className="intro w-50">
          <div className="fs-1">HEY, I'M VIVEK KUMAR</div>
          <div>
            A FrontEnd Developer
          </div>
        </div>
        <div className="social-box w-50 p-4">
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
    </>
  );
}
export default Home;
