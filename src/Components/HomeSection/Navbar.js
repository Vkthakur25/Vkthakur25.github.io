import React from 'react';
import './HomeSection.css';
function Navbar() {
  return (
    <>
      <section className="bg-lightMode">
        <div className="mx-5">
          <ul className="d-flex mx-5 p-4">
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
      </section>
    </>
  );
}
export default Navbar;
