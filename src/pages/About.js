import React from 'react';
import {GridContent} from '../components/GridContent'
import '../style.css';

export default function About() {
  return (
    <div className="content load-first">
      <h2>Hi, I'm Nina!</h2>

      <p>I adore working in the intersections between writing, coding, editing, broadcasting and designing, which is why I'm pursuing a B.A. in Journalism and an M.S. in Communication Data Science. More than anything, I hope that my ability to bring together information and present it in a meaningful way helps the world understand something a little bit better.</p>

      <div className="grid load-second">

        <GridContent src="img/Live.JPG" caption="Live production is one of the places I've been able to combine my different skill sets."/>

        <GridContent src="img/head.jpeg"/>

        <GridContent src="img/boom.png" caption="Outside of work, I've enjoyed my time volunteering on the sets of several student films."/>

      </div>
        
    </div>
  );
}
