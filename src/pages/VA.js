import {GridContent,GridLinkedContent} from '../components/GridContent'
import '../style.css';

export default function CD() {
  return (
  	<div className="content load-first">
        <h2>Video & Audio</h2>

        <p>Below is a selection of the media packages I've produced along with an example of my social video editing work. You can see more <a href="https://www.uscannenbergmedia.com/author/nina-moothedath/" class="show">here.</a></p>

        <div className="load-second grid-one">

          <div className="grid-content">
            <iframe className="spotify" src="https://open.spotify.com/embed/episode/1bYmNF5fP9C5QEklwL7cxc?utm_source=generator&theme=0" width="65%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <div class="grid-content">
            <iframe className="spotify" src="https://open.spotify.com/embed/episode/6teuiwy3JvCyhtlegF82nC?utm_source=generator&theme=0" width="65%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          <div class="grid-content">
             <iframe width="560" height="315" src="https://www.youtube.com/embed/NGWwF-XZguo?si=GukV-6xcNZpRMfA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>

          <div class="grid-content last-video">

            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/L890g_DKDZc?si=-gUCcv4mSESf53_3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

        </div>
        
      </div>
  );
}