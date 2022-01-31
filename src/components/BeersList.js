import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const BeersList = ({ beers, orderedIds, handleAdd, handleRemove }) => {
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredList(
      beers.filter((beer) => beer.name.toLowerCase().includes(e.target.value))
    );
  };

  useEffect(() => {
    setFilteredList(beers);
  }, [beers]);

  return (
    <div>
      <input
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        style={{ margin: "20px" }}
      ></input>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        {filteredList.map((beer) => (
          <div key={beer.id}>
            <img src={beer.image_url} alt="" style={{ width: "90px" }} />
            <div>
              <strong>
                <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
              </strong>
              <p>{beer.tagline}</p>
              <p>Created by: {beer.contributed_by}</p>
              {orderedIds?.includes(beer.id) ? (
                <button onClick={() => handleRemove(beer)}>
                  Remove from cart
                </button>
              ) : (
                <button onClick={() => handleAdd(beer)}>Add to cart</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeersList;
