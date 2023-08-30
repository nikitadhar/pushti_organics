import vegitablecartdata from "./vegitablecartdata.json";
import "./vegitablecart.css";

export default function VegitableCart() {
  return (
    <>
      <h2>Fresh Organic Vegitables</h2>
      <div className="vegitable_head">
        {vegitablecartdata.map((data) => {
          return (
            <>
              <div className="vegitable">
                <img src={data.img} alt="" />
                <p>{data.title}</p>
                <span>{data.price}</span> <br />
                <button>Add to cart</button>
              </div>
            </>
          );
        })}
      </div>
      <button className="view_btn">View all</button>
    </>
  );
}
