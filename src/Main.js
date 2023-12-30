import React, { useState, useEffect,useRef } from "react";
import Aboutus from "./Components/Aboutus";
import ContactForm from "./Components/ContactForm";
import Home from "./Components/Home";
import Event from "./Components/Event";
import OurTeam from "./Components/OurTeam";
import MentorPage from "./Components/MentorPage";
import TeamMobile from "./Components/TeamMobile";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Gallery from "./Components/ResponsiveGallery"
import ClubServices from "./Components/ClubServices";

function Main() {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const galleryRef = useRef(null);
  const eventRef = useRef(null);
  const teamRef = useRef(null);
  const mentorRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the screenWidth state when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the event listener when the component is unmounted
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 

  return (
    <div className="overflow-hidden">
      <NavBar
        scrollToHome={() => scrollToRef(homeRef)}
        scrollToAboutUs={() => scrollToRef(aboutUsRef)}
        scrollToGallery={() => scrollToRef(galleryRef)}
        scrollToEvent={() => scrollToRef(eventRef)}
        scrollToOurTeam={() => scrollToRef(teamRef)}
        scrollToMentor={() => scrollToRef(mentorRef)}
      />
      <Home ref={homeRef} />
      <Aboutus ref={aboutUsRef} />      
      <Event ref={eventRef} />
      
      <MentorPage  ref={mentorRef}/>
      {screenWidth > 500 ? <OurTeam ref={teamRef}/> : <TeamMobile ref={teamRef} />}
      <Gallery ref={galleryRef}/>
      <ContactForm />
      <Footer
       scrollToHome={() => scrollToRef(homeRef)}
       scrollToAboutUs={() => scrollToRef(aboutUsRef)}
       scrollToGallery={() => scrollToRef(galleryRef)}
       scrollToMentor={() => scrollToRef(mentorRef)}
       scrollToEvent={() => scrollToRef(eventRef)}
       />
      </div>
  );
}

export default Main;
