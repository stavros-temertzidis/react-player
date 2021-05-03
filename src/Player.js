import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import { movies } from "./data";
import Thumbs from "./Thumbs";

const Player = () => {
  const [videoUrl, setVideoUrl] = useState('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
  const [thumbnail, setThumbnail] = useState('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'); 

  const handleClick = (newUrl, newThumb) => {
    setVideoUrl(newUrl);
    setThumbnail(newThumb);
  }

  return (
    <>
      <Row>
        <Col>
          <ReactPlayer url={videoUrl} controls={true} light={thumbnail}/>
        </Col>
        <Col>
          {movies.map((item, index) => (
            <Thumbs key={index} id={index} item={item} handleClick={handleClick}/>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Player;
