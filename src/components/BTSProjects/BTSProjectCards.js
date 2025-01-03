import React from "react";
import Card from "react-bootstrap/Card";

function BTSProjectCards(props) {
  // Extract video ID from YouTube link
  const getYouTubeThumbnail = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("youtu.be/")[1];
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const thumbnail = props.demoLink ? getYouTubeThumbnail(props.demoLink) : props.imgPath;

  return (
    <Card className="project-card-view">
      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        {props.demoLink ? (
          <iframe
            src={props.demoLink.replace("watch?v=", "embed/")}
            title={props.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        ) : (
          <img
            src={thumbnail}
            alt="card-img"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BTSProjectCards;