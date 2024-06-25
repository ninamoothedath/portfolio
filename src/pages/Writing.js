import React from 'react';
import {GridLinkedContent} from '../components/GridContent'
import '../style.css';

export default function Writing() {
  return (
  	<div className="content load-first">
        <h2>Writing</h2>

        <p>Below is a selection of my news, feature and magazine work. You can access more of my articles <a href="https://www.uscannenbergmedia.com/author/nina-moothedath/" class="show">here.</a></p>

        <div className="load-second grid">

        <GridLinkedContent link="https://www.uscannenbergmedia.com/2024/04/09/everywhere-is-queer-app-launches-to-help-lgbtq-users-support-their-local-community/" src="https://www.uscannenbergmedia.com/resizer/VJZPdSVyLqKpWkCS3w8nIg44Ilc=/800x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/uscannenberg/SZGPBS63BJAO3GD6JSZCWQCIME.png" caption="App launches to help LGBTQ+ users support their local community"/>
        <GridLinkedContent link="https://www.uscannenbergmedia.com/2023/05/12/ama-zine-celebrating-a-decade-of-diy-art-crafts-and-community/" src="img/zine.png" caption="Celebrating a decade of DIY art, crafts and community at LA Zine Fest"/>
        <GridLinkedContent link="https://annenberginteractives.com/2022-2023/onourfeet/" src="img/OnOur.jpg" caption="Art show highlights local artists and the struggles of L.A. housing"/>

        </div>

        <div className="magazine load-third">
          <iframe allowfullscreen="allowfullscreen" scrolling="no" class="fp-iframe" src="https://heyzine.com/flip-book/59922be85d.html"></iframe>
        </div>
        
      </div>
    );
}