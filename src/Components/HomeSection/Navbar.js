import React from 'react';
import './HomeSection.css';
function Navbar() {
  return (
    <>
      <section className="bg-lightMode d-flex">
        <div
          className=""
          style={{ height: '12vh', width: '90vw', border: '2px solid black' }}
        >
          hii i am Border horizontal
        </div>
        <div
          className=""
          style={{ height: '80vh', width: '10vw', border: '2px solid black' }}
        >
          hii i am Border vertical
        </div>
      </section>
    </>
  );
}
export default Navbar;
