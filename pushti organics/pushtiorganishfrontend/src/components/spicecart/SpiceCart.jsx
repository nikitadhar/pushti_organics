import SpiceCartData from "./spiceCartData.json";
import "./spiceCart.css"

export default function SpiceCart() {
  return (
    <>
    <div>
     <h2>Spices</h2> 
     <span>GET IT NOW</span>
    </div>
    <div className="spice">
    {
SpiceCartData.map((data)=>{
    return(
      <>
      <div className="spice_presentation">
      
        <img src={data.img} alt={data.alt} /><br />
        <p>{data.title}</p> 
        <span>{data.price}</span><br />
        <button>Add to cart</button>
      </div>
      
      </>
      )

})
}
</div>
<button className="view_btn">View all</button>
    </>
  )
}
