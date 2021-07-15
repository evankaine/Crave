import { Link } from "react-router-dom";
import "./timeline.css"


export default function Timeline({ post }) {
  
  return (
    <div className="timelineContainer">
      {post.map((post) => {
        return (
          <div className="cardContainer" key={post.id}>

            {/* <img src={post.fields.image} alt={post.id} /> */}
            <h4 className="timelineName">{post.fields.name}</h4>
          
          <Link to={`/${post.fields.genre}`}>
            <p className="timelineGenre">{post.fields.genre}</p>
          </Link>  
              <p className="timelineStatus">{post.fields.status}</p>
          </div>
        );
      })}
    </div>
  );
}