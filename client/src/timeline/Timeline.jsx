import { Link } from "react-router-dom";
import "../timeline/timeline.css"


export default function Timeline({ post }) {
  
  return (
    <div className="timelineContainer">
      {post.map((post) => {
        return (
          <div key={post.id}>

            {/* <img src={post.fields.image} alt={post.id} /> */}
            <h4>{post.fields.name}</h4>
          
          <Link to={`/${post.fields.genre}`}>
            <p>{post.fields.genre}</p>
          </Link>  
              <p>{post.fields.status}</p>
            
          </div>
        );
      })}
    </div>
  );
}