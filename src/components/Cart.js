import { Link } from "react-router-dom";

const Cart = ({ handleRemove, items }) => {
  return (
    <>
      <button>
        <Link to={`/`}>Continue shopping</Link>
      </button>
      {!items.length ? (
        <p>Empty cart</p>
      ) : (
        <ul>
          {items?.map((beer) => (
            <li key={beer.id}>
              <img src={beer.image_url} alt="" />
              <div>
                <strong>
                  <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
                </strong>
                <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
                <button onClick={() => handleRemove(beer)}>
                  Remove from cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cart;
