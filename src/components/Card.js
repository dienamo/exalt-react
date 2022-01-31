import { Link } from "react-router-dom";

const Card = ({ src, id, itemName, tagline, contributed }) => (
  <div>
    <img src={src} alt="" style={{ width: "90px" }} />
    <div>
      <strong>
        <Link to={`/beers/${id}`}>{itemName}</Link>
      </strong>
      <p>{tagline}</p>
      <p>Created by: {contributed}</p>
    </div>
  </div>
);

export default Card;

{
  /* <div key={beer.id}>
  <img src={beer.image_url} alt="" style={{ width: "90px" }} />
  <div>
    <strong>
      <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
    </strong>
    <p>{beer.tagline}</p>
    <p>Created by: {beer.contributed_by}</p>
    {orderedIds?.includes(beer.id) ? (
      <button onClick={() => handleRemove(beer)}>Remove from cart</button>
    ) : (
      <button onClick={() => handleAdd(beer)}>Add to cart</button>
    )}
  </div>
</div>; */
}
