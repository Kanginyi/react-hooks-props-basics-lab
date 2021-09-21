import React from "react";
import About from "./About";

function Links(props) {
    return (
        <>
            <h3>Links</h3>
            <a href={props.github}>Github</a>
            <a href={props.linkedin}>LinkedIn</a>
        </>
    );
}


export default Links;

/* Home takes this shit in

*/


/*
const user = {
  name: "Liza",
  city: "New York",
  bio: "I made this!",
  color: "firebrick",
  links: {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/",
  },
};
*/