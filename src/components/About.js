import React from "react";
import Links from "./Links";

function helper(props) {
  if (props.bio === ""||props.bio === false) {
    return null;
  } else {
    return props.bio;
  }
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{helper(props)}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
