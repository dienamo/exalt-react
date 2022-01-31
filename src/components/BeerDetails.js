import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BeerDetails = ({ orderedIds, handleAdd, handleRemove }) => {
  const [beer, setBeer] = useState({});
  let params = useParams();

  useEffect(() => {
    const getBeer = async () => {
      await axios
        .get(`https://api.punkapi.com/v2/beers/${params.id}`)
        .then((beer) => setBeer(beer.data[0]))
        .catch((err) => console.log(err));
    };
    getBeer();
  }, [params.id]);

  return (
    <div>
      <img src={beer.image_url} alt="" />

      <div className="header">
        <div>
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
        </div>

        <dl>
          <dd className="attenuation_level">{beer.attenuation_level}</dd>
          <dd className="first_brewed">
            <time>{beer.first_brewed}</time>
          </dd>
        </dl>
        {orderedIds.includes(beer.id) ? (
          <button onClick={() => handleRemove(beer)}>Remove from cart</button>
        ) : (
          <button onClick={() => handleAdd(beer)}>Add to cart</button>
        )}
      </div>

      <div>{beer.description}</div>

      <p className="copy">{beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetails;
