import packedcartdata from "./packedcartdata.json" ; 
import "./packedcart.css"

export default function Packedcart() {
  return (
    <>
    <div className="packedcart_main">
    <div >
        <h2>Our Fresh Feautred Products</h2>
        <p>Get Fresh Products at your home and enjoy It</p>
        </div>  
        <div className="product">
      {
packedcartdata.map((data)=>{
    return(
      <>
      
      <div className="product_presentation">
        <div  >
        <img src={data.img} alt="" /><br />
        <span>{data.title}</span><br />
        <span>{data.rate}</span><br />
        <button>Add to cart</button>
      </div>
    
      </div>
     
      
      </>
      )

})
}
</div>
<button className="view_btn">View all</button>
</div>  
    </>
  )
}
