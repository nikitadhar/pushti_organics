import "./gheeCart.css";

export default function GheeCart() {
  return (
    <>
    <h2>Organic Ghee and Honey</h2>
      <div className="ghee_main">
        <div className="ghee_container">
          <img src="images/ghee.png" alt="ghee" />
          <h4>A2 Ghee (Desi Sahiwal Cow Ghee) / 50gm</h4>
          <span>Rs. 899.00</span> <br />
          <button>Add to cart</button>
        </div>
        <div className="honey_container">
        <img src="images/Honey.png" alt="honey" />
        <h4>Raw Multi-Flora Unfiltered Honey / 250gm</h4>
        <span>Rs. 250.00</span> <br />
        <button>Add to cart</button>
        </div>
      </div>
    </>
  );
}
