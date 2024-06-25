import '../style.css';

function GridContent(prop) {
  return (
    <div className="grid-content">
      <img src={prop.src}/>
      <p className="caption">{prop.caption}</p>
    </div>
  );
}

function GridLinkedContent(prop) {
  return (
    <div className="grid-content">
      <a href={prop.link}>
        <img src={prop.src}/>
        <p className="caption">{prop.caption}</p>
      </a>
    </div>
  );
}

function GraphicsLinkedContent(prop){
  return (
    <div className="grid-content graphics-cont">
      <a href={prop.link}>
        <img src={prop.src}/>
        <p className="caption">{prop.caption}</p>
      </a>
    </div>
  );
}

function GraphicsGridContent(prop) {
  return (
    <div className="grid-content graphics-cont">
      <img src={prop.src}/>
      <p className="caption">{prop.caption}</p>
    </div>
  );
}

function ContentNoCaption(prop) {
  return (
    <div className="grid-content graphics-no">
      <img src={prop.src}/>
    </div>
  );
}

export {GridContent, GridLinkedContent, GraphicsLinkedContent, GraphicsGridContent,ContentNoCaption}