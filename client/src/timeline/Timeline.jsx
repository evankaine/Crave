import { Link } from "react-router-dom";
import "./timeline.css"


export default function Timeline({ post, isNotHome }) {
  const style = {height: "calc(76.5vh - 0px)"}
  return (
    <div className="timelineContainer" style={isNotHome && style}>
      {post.map((post) => {
        return (
          <div className="cardContainer" key={post.id}>
            <div>
              <h4 className="timelineName">{post.fields.name}</h4>
          
          <Link className="linkGenre" to={`/${post.fields.genre}`}>
              <p className="timelineGenre">{post.fields.genre}</p>
          </Link>
            </div>
            <div className="timelineStatus">  
              <p >{post.fields.status}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}