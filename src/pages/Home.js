import React from 'react';
import HomeGrid from '../components/HomeGrid'
import '../style.css';

export default function Home() {
  return (
    <div class="content load-first">
        <h2>Journalist, Analyst, Producer, Designer</h2>
        <p>I'm Nina Moothedath, a student at the University of Southern California pursuing a B.A. in Journalism and a M.S. in Communication Data Science. You can explore the different work I do below!</p>

        <div class="home-grid load-second">
          <HomeGrid name="writing" text="Writing"/>

          <HomeGrid name="cd" text="Code & Data"/>

          <HomeGrid name="va" text="Video & Audio"/>

          <HomeGrid name="graphics" text="Graphics"/>

        </div>

      </div>
  );
}
