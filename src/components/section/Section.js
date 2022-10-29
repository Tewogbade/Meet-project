import React from "react";
import "./Section.css";
import womanVideoCall from "../images/image-woman-in-videocall.jpg";
import womanVideoChat from "../images/image-women-videochatting.jpg";
import menInMeeting from "../images/image-men-in-meeting.jpg";
import manTexting from "../images/image-man-texting.jpg";

function Section() {
  return (
    <>
      <div>
        <section id="images">
          <img src={womanVideoCall} alt="image-woman-in-videocall" />
          <img src={womanVideoChat} alt="image-women-videochatting" />
          <img src={menInMeeting} alt="image-men-in-meeting" />
          <img src={manTexting} alt="man-texting" />
        </section>
      </div>
    </>
  );
}

export default Section;
