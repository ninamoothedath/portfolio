import '../style.css';
import React from 'react';
import { useState } from 'react';

export default function MotionContent(prop) {

  const [text, setText] = useState('');

  function buttonPress(newText) {
    setText(newText)
  }

  return (
    <div>
      <div class="load-second grid">
      <div className="grid-content">
        <video controls className="frame">
            <source src="img/roy.mp4" type="video/mp4"/>
        </video>
        <p className="Learn" onClick={() => {
              buttonPress("Informational Motion Graphic: I created this informational motion graphic based off the fictional show 'Succession.' I specifically tried to emulate the style of animation used by news outlets like Vox online.");
          }}>Learn More</p>
      </div>

      <div className="grid-content">
        <video controls className="frame">
            <source src="img/la.mp4" type="video/mp4"/>
        </video>
        <p className="Learn" onClick={() => {
              buttonPress("Logo Intro: I created this for a colleage who wanted an animated intro created from an existing logo he had for his show. I provided him with a pack of assets with different versions of the approved animation to be used for various senarios, platforms and video lengths.");
          }}>Learn More</p>
      </div>

      <div className="grid-content">
        <video controls className="frame">
            <source src="img/mush.mp4" type="video/mp4"/>
        </video>
        <p className="Learn" onClick={() => {
              buttonPress("3D modeling: I created this model while using online resources to learn Blender on my own, with this specific model and animation made from tutorial from the Youtuber TipTut. Through this, I gained experience in modeling, texturing, lighting and animating in Blender");
          }}>Learn More</p>
      </div>

      </div>
      <p>{text}</p>
    </div>
  );
}