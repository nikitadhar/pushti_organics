import reviewsdata from "./reviewsdata.json";
import "./reviews.css"

export default function Reviews() {
  return (
    <>
     <div className="review_main"> 
     {
      reviewsdata.map((data)=>{
        return(
            <>
           
            <div className="review_cart">
                <p>{data.review}</p>
                <h4>{data.name}</h4>
            </div>
           
            </>
        )
      })  
     }
      </div>
    </>
  )
}
