import React from 'react';
import {GridContent,GridLinkedContent} from '../components/GridContent'
import '../style.css';

export default function CD() {
  return (
  	<div className="content load-first">
        <h2>Code & Data</h2>

        <p>Below is a combination of published work and personal projects displaying my skills in using code for web development and data analysis. See more <a href="https://github.com/ninamoothedath" class="show">here.</a></p>

        <p><span className="bold">Python, SQL, R, Pandas, Seaborn, PowerBI and Excel</span> are tools I've used in data anlysis.</p> 

        <p><span className="bold">HTML, CSS, React and JQuery</span> are what I've utilized for web development (including this portfolio).</p>

        <div className="load-second grid">

	        <GridLinkedContent link="https://annenberginteractives.com/2023-2024/usc-buildings/" src="img/2020.png" caption="A scrollytelling done for USC Annenberg's Interactives desk, where I collected data, coded, and developed graphics to tell the story of USC's changing campus over the decades."/>
	        <GridLinkedContent link="https://react-6dgt5m.stackblitz.io" src="img/movie.png" caption="Using the The Movie Database API, I developed a web application using React.js where users can search for movies and view the 20 most relevant results"/>
	        <GridLinkedContent link="https://annenberginteractives.com/2022-2023/onourfeet/" src="img/OnOur.jpg" caption="An interactive article about an art show, utilizing interactivity for viewers to learn more about the artist of specific pieces."/>

        </div>

        <div className="data load-third">
          <p>Below is a STILL of an interactive data graphic I pitched, designed and coded to accompany <a href="https://www.uscannenbergmedia.com/2023/03/30/as-campaign-trails-heat-up-students-share-their-approval-ratings-for-potential-presidential-candidates/" class="show">a story</a> about the 2024 presidential campaign trail. View the live version <a href="https://www.uscannenbergmedia.com/2023/03/30/as-campaign-trails-heat-up-students-share-their-approval-ratings-for-potential-presidential-candidates/" class="show">here.</a></p>

          <div className="graphic">
            <div className="caption">
              <p>Hover over the charts to learn more of the poll results!</p>
            </div>
            <div className="graph" id="g1">
              <img src="img/Frame1.png"/>
            </div>
            <div className="graph" id="g2">
              <img src="img/Frame2.png"/>
            </div>
            <div className="graph" id="g3">
              <img src="img/Frame3.png"/>
            </div>
            <div className="graph" id="g4">
              <img src="img/Frame4.png"/>
            </div>
          </div>
        </div>
        
      </div>
  );
}
