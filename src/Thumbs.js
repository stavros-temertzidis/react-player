const thumbStyle = {
    height: "200px",
    cursor: "pointer"
}

const divStyle = {
    cursor: "pointer"
}

const Thumbs = (props) => {
    const handleClick = (e) => {
        const newUrl = props.item.sources;
        const newThumb = e.target.src;
        props.handleClick(newUrl, newThumb);
    }

    return (
        <>
          <div style={divStyle}>
              <img src={props.item.thumb} alt="Thumbnail" onClick={handleClick} style={thumbStyle}/><br/>
              {props.item.title}<br/><br/>
          </div>
        </>
    );
}

export default Thumbs;