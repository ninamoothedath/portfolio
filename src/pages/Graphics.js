import React from 'react';
import {GraphicsLinkedContent ,GraphicsGridContent,ContentNoCaption} from '../components/GridContent'
import MotionContent from '../components/MotionContent'
import '../style.css';

export default function Graphics() {
  return (
    <div className="content load-first">

      <h2>Graphics</h2>

      <p>I've used After Effects, Illustrator, Figma, Canva, Blender, and Photoshop to develop illustrations, graphics, motion graphics and other design assets in the newsroom and for personal projects.</p>

      <MotionContent/>

      <div className="load-third grid-two">
          <GraphicsGridContent src="img/shutter2.png" caption="This was my entry to a creative magazine for the theme 'Exposure'. After brainstorming, I photographed a model and digitally compiled the results into my own reference photo before creating the final design."/>
          <GraphicsGridContent src="img/Election.gif" caption="This gif was displayed on our student newsroom homepage on a local election date."/> 
          <GraphicsLinkedContent link="https://www.uscannenbergmedia.com/2023/04/28/im-just-trying-to-get-home/"src="img/rideshare.png" caption="This illustration accompanied an article about the danger women face in rideshares.After reading the article, I brainstormed ideas, submitted thumbnails and rough sketches for approval from my editor, and made edits based on feedback for the final published illustration."/>
          <GraphicsLinkedContent link="https://www.uscannenbergmedia.com/2023/11/29/free-speech-organizations-raise-concern-over-first-amendment-rights-on-college-campuses/" src="img/dox.png" caption="I created this illustration to accompany an article about students being doxxed. Like others, I brainstormed, submitted rough and progress sketches for approval, and made edits based off feadback." />
      </div>

      <p>The following assets were part of a larger graphics package for student newsroom coverage of a student government presidential election debate. As requested, different formats and designs were created to be used for different platforms.</p>

        <div className="grid load-second">
          <div className="grid-content graphics-no">
            <video controls class="frame">
              <source src="img/Buffer.mp4" type="video/mp4"/>
            </video>
          </div>
          <ContentNoCaption src="img/USG.png" caption=""/>
          <ContentNoCaption src="img/Thumb.png" caption=""/>
        </div>
    </div>
  );
}
