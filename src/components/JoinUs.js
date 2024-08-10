import React, { useEffect, useRef } from "react";
import JoinUsImg from "../Images/caro1.jpg";
import gsap from "gsap";
import Navbar from "./Navbar";
import Joinourteam from "./Joinourteam";

const JoinUs = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
      paragraphRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5" // overlap the animations
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className="pb-4">
        <div>
          <div className="caro-container">
            <img className="z-[9999]" src={JoinUsImg} alt="" />
            <div className="main-para" data-aos="zoom-in">
              <h3 ref={headingRef}>WELCOME TO MENTOONS</h3>
              <p ref={paragraphRef}>
                A unique platform that combines Mentoring with <br></br> the
                powerful language of Cartoons.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Joinourteam />
    </>
  );
};

export default JoinUs;
