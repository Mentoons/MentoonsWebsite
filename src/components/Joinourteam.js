import React from "react";
import "../css/joinourteam.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsPersonArmsUp } from "react-icons/bs";

import { Link } from "react-router-dom";
const Joinourteam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="join-container">
      <div className="main-join">
      {/* <img src={bronwave} className="brounwave" /> */}
      <div
        className="apply-bord"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
      >
         <div className="join-heading">

<BsPersonArmsUp className='per-icons'/>
<BsPersonArmsUp className='per-iconsa'/>
<h1>JOIN MENTOONS</h1>
  </div>
      </div>
      <div className="join-container">
        <div className="w-3/4 m-auto">
          <div className="mt-20">
            <Slider {...settings}>
              {data.map((d) => (
                <div className="bg-white h-[790px] w-[94] text-black rounded-xl">
                  <div className=" h-56  rounded-t-xl bg-purple-500 flex justify-center item-center">
                    <img src={d.img} className="my-5 h-44 w-44 rounded-sm" />
                  </div>

                  <div className="flex flex-col justify-center items-center gap-3 p-12">
                    <p className="text-4xl font-semibold">{d.name}</p>
                    <p className="text-xs">{d.position}</p>
                    <Link to="/Jobapply">
                      <button className="btn-color">
                        <span> Apply Now</span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* <img src={lightwave} className="lightwave" alt="" /> */}
    </div>
    </div>
    
  );
};

const data = [
  {
    name: `Story Teller`,
    img: `https://mentoons.com/img/blogprev2.jpg`,
    position: `            
    We are currently seeking a Storyteller to join our creative team.
     This individual will be the heart of our narrative, weaving captivating
      stories to engage our audience. Your role involves crafting compelling
       content for various platforms, evoking emotions, and conveying messages
        effectively. The ideal candidate will have a passion for storytelling,
         a vivid imagination, and the ability to bring stories to life.
          Experience in content creation, whether through writing, video,
           or other mediums, is highly valued. Join us in creating and sharing
            stories that leave a lasting impact on our audience.
  `,
  },
  {
    name: `Model And Actor`,
    img: `https://mentoons.com/img/blogprev3.jpg`,
    position: `
    We are currently seeking an Actor/Model to become the face
     of our creative projects. This versatile individual will
      play a pivotal role in bringing our stories and concepts
       to life through performance and visual representation.
        Your responsibilities will include embodying characters,
         conveying emotions, and participating in photoshoots or
          video productions. The ideal candidate will possess exceptional
           acting or modeling skills,
  `,
  },
  {
    name: `Anchor`,
    img: `https://mentoons.com/img/blogprev4.jpg`,
    position: `
    Join Mentoons as an Anchor, where you'll connect with our audience through YouTube videos and social media
    Your role includes introducing new products and conducting insightful interviews with experts.
    We seek excellent communication skills, video hosting experience, and a passion for our mission.
    Familiarity with LinkedIn, Facebook, Instagram, and Pinterest is a plus.
    We embrace diversity and are proud to be an equal opportunity employer.
    Ready to make learning fun and easy? Apply now and let's explore potential together!
  `,
  },
  {
    name: `Flim Maker`,
    img: `https://mentoons.com/img/blogprev5.jpg`,
    position: `
    We are currently seeking a Filmmaker to join our creative team.
     This individual will be responsible for bringing our stories
      to life through the art of film. Your role involves concept
       development, scriptwriting, directing, and overseeing the
        production process. The ideal candidate will have a strong
         passion for filmmaking, a keen eye for visual storytelling,
          and experience in creating compelling cinematic content.
           Join us in producing films that captivate, entertain, and inspire our audience.
  `,
  },
  {
    name: `Backend Developer`,
    img: `https://mentoons.com/img/blogprev1.jpg`,
    position: `

    We are currently seeking a Backend Developer to join our
     dynamic team. This individual will play a vital role 
     enabling the development of e-commerce, managing databases, 
     assisting in podcast creation and supporting YouTube channel
      content. The ideal candidate will have an extensive experience of working with full Stack MERN and managing MongoDB databases.                `,
  },
];

export default Joinourteam;
