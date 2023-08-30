import "./blog.css";
import blogdata from "./blogdata.json";

export default function Blog() {
  return (
    <>
    <h2>Read Latest Health Articles</h2>
    <div className="blog_main">
      {
       blogdata.map((data)=>{
        return(
            <>
            <div className="blog">
                <div className="blog_img_container">
                <img src={data.img} alt={data.alt} />
                </div>
                <div className="blog_detail">
                <h3>{data.title}</h3>
                <span>{data.date}</span>
                <p>{data.desc}</p>
                </div>
            </div>
            </>
        )
       }) 
      }
    </div>
    </>
  )
}
