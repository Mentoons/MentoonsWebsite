import React, { useState } from "react";
import "../css/workshop.css";
import Lottie from "lottie-react";
import Moon from "../animation/Moon.json";
import { BsPersonArmsUp } from "react-icons/bs";
import "../css/Workshop.scss";
import { SlArrowDown } from "react-icons/sl";
const Workshop = () => {
  const data = [
    {
      id: 1,
      heading: "WorkShops",
      linea:
        "Break free from the grip of social media through our holistic laughter workshops. We use the therapeutic power of laughter to relieve stress and mitigate the overwhelming need to constantly check social network channels  ",
      lineb:
        "Gaming De-Addiction: Overcome gaming addiction with Hasyaras's therapeutic laughter sessions. Our interactive workshops inspire positivity, boost self-esteem, and help to cultivate better gaming ethics and habits in a fun environment.",
      linec:
        "Cell Phone de-addiction for teenagers: Reclaim real connections beyond screens through our engaging laughter therapy. Our specially tailored sessions for teenagers harness the healing power of laughter to reduce dependence on mobile devices and promote healthier lifestyle choices.",
      img: require("../Images/service1.jpg"),
      agea: "Join Hasyaras in dynamic and engaging laughter workshops designed specifically for kids aged 6-12 years. We use laughter as a vehicle to instill positivity, improve self-esteem, enhance social skills, and stimulate creativity. Through interactive exercises and games, our laughter workshops encourage children to express themselves openly and embrace the joy of life, promising a boost in their overall well-being.",
      ageb: "Experience the joy of disconnecting! At Hasyaras we use the power of laughter to break the chains of social media addiction. Our engaging workshops promote balance, helping teenagers age 13-19 rediscover the real-world connections away from screens.",
      agec: "Game no more, live more! Dive into our laughter therapy sessions where we help you replace the virtual achievements with real-life interactions and laughter. Hasyaras offers a fun, interactive environment to break free from the virtual world's hooks.",
    },
    {
      id: 2,
      heading: "Comics",
      linea:
        "Our workshops offer a multitude of benefits. These unique, interactive and effective sessions will help you:",
      lineb:
        "Ditch the Screens: Escape from the addictive cycle of social media, online gaming, and constantly being glued to your cellphone screen.",
      linec:
        "Improve Communication Skills: Boost your personal and professional interactions, and build a strong foundation for public speaking.",
      lined:
        "Enhance Creative Thinking: Unlock your creative potential, encourage original thinking and nurture your ability to visualize and convey ideas.",

      img: require("../Images/service2.png"),
      agechilda:
        "No more waiting. It's time to embark on a journey of creativity, fun, bonding and invaluable learning experiences. Book your Storytelling Workshop now! ",
      agechildb:
        "Be part of a memorable narrative. Let your child experience a wonder that lasts beyond the screen time. Unleash the power of Stories. Get ready for a storytelling adventure like no other. Let's make some unforgettable memories.",
      teenagea:
        "Stay away from digital distractions: It's a fun, productive, and innovative shift from your usual gaming hours or social media addiction.",
      teenageb:
        "To register for our Storytelling Workshops, click on Book Workshops. Take the first step on your narrative journey today!",
      teenabovea:
        "The storytelling abilities you gain from these workshops will not only enhance your personal development but could also offer an unmatched advantage in your career path.",
      teenaboveb:
        "Whether you're stepping into the corporate world, the realm of arts, or even entrepreneurship, storytelling is a vital skill often overlooked. Are you ready to unlock your full potential and set yourself apart from the crowd?",
    },
    {
      id: 3,
      heading: "Audio Comics",
      linea:
        "Art Workshops for Reducing Negative Moods: Experience the therapeutic tranquility with our Art Workshops. Kalakriti's sessions provide a safe, conducive space for expression, transforming your negative energy into a beautiful canvas of positivity and calmness. Unleash your creativity and find joy.",
      lineb:
        "Social Media De-Addiction: Our Social Media De-Addiction program is designed with a holistic approach to help you regain control over your online habits. Kalakriti ensures a balanced and healthier relationship with social media, empowering you to live a more productive life.",
      linec:
        "Gaming De-Addiction: Step into a world beyond screens with Kalakriti's Gaming De-Addiction program. We aid in cultivating new hobbies and interests that replace excessive gaming, thus building a more rounded and engaging everyday experience.",
      img: require("../Images/service3.jpg"),
      agea: "Our Social Media De-Addiction program is designed with a holistic approach to help you regain control over your online habits. Kalakriti ensures a balanced and healthier relationship with social media, empowering you to live a more productive life.",
      ageb: "Kalakriti's Cell Phone De-Addiction service is specifically designed for teenagers. We provide practical, age-specific strategies that help young minds understand the value of real-world interactions over screen time, fostering a healthier digital lifestyle.",
      agec: "Kalakriti's Cell Phone De-Addiction service is specifically designed for teenagers. We provide practical, age-specific strategies that help young minds understand the value of real-world interactions over screen time, fostering a healthier digital lifestyle.",
    },
  ];

  const [toggel, setToggle] = useState(1);

  return (
    <div className="workshop">
      <div className="join-heading">
        <BsPersonArmsUp className="per-icons" />
        <BsPersonArmsUp className="per-iconsa" />
        <h1>Work Shops</h1>
      </div>
      <div className="workshop-side-btns">
        {data.map(({ heading, id }) => {
          return (
            <div key={id.id}>
              <button onClick={() => setToggle(id)}>{heading}</button>
            </div>
          );
        })}
      </div>
      <div className="workshop-box">
        <div className="work-image">
          <div className="main-empower-container">
            <div className="full-box-work">
              <div className="workshop-con-box">
                {data.map(
                  ({
                    teenageb,
                    teenagea,
                    teenaboveb,
                    teenabovea,
                    agechildb,
                    agechilda,
                    agea,
                    ageb,
                    agec,
                    heading,
                    linea,
                    lineb,
                    linec,
                    lined,
                    img,
                    id,
                  }) => {
                    return (
                      <div>
                        {toggel === id ? (
                          <div className="main-Workshop-conatiner">
                            <div className="Workshop-image">
                              <img src={img} alt="" />
                            </div>
                            <div className="startup-text">
                              <main className="main">
                                <div className="container-workshpo">
                                  <h1>{heading}</h1>
                                  <details>
                                    <summary>
                                      Activity Description <SlArrowDown />
                                    </summary>
                                    <div className="content">
                                      <ul>
                                        <li>{linea}</li>
                                        <li>{lineb}</li>
                                        <li>{linec}</li>
                                        <li>{lined}</li>
                                      </ul>
                                    </div>
                                  </details>

                                  <details>
                                    <summary>
                                      Age Group <SlArrowDown />
                                    </summary>
                                    <div className="content">
                                      <div className="age-label">
                                        <label>6-12:</label>
                                        <ul>
                                          <li>{agea}</li>
                                          <li>{agechilda}</li>
                                          <li>{agechildb}</li>
                                        </ul>
                                        <label>13-19:</label>
                                        <li>{ageb}</li>
                                        <li>{teenagea}</li>
                                        <li>{teenageb}</li>
                                        <label>20:</label>
                                        <li>{agec}</li>
                                        <li>{teenabovea}</li>
                                        <li>{teenaboveb}</li>
                                      </div>
                                    </div>
                                  </details>

                                  <details>
                                    <summary>
                                      Timetable <SlArrowDown />
                                    </summary>
                                    <div className="content">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris nisi
                                      ut aliquip ex ea commodo consequat.
                                      Activity Description in voluptate velit
                                      esse cillum dolore eu fugiat nulla
                                      pariatur. Excepteur sint occaecat
                                      cupidatat non proident, sunt in culpa qui
                                      officia deserunt mollit anim id est
                                      laborum.
                                    </div>
                                  </details>
                                </div>
                              </main>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="work-text"></div>
      </div>
    </div>
  );
};

export default Workshop;
