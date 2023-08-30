import "./catelog.css";
import catelogdata from "./catelogdata.json";
export default function Catelog() {
  return (
    <>
      {catelogdata.map((data) => {
        return (
          <>
            <div className="catelog_main">
              <div className="catelog_detail">
                <h2>{data.title}</h2>
                <p> {data.desc}</p>
                <button>Shop now</button>
              </div>

              <img src={data.img} alt={data.alt} />
            </div>
          </>
        );
      })}
    </>
  );
}
