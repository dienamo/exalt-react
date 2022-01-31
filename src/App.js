import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BeersList from "./components/BeersList";
import BeerDetails from "./components/BeerDetails";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import axios from "axios";
import "./App.css";

function App() {
  const [beers, setBeers] = useState([]);
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    const getBeers = () => {
      axios
        .get("https://api.punkapi.com/v2/beers")
        .then((beers) => setBeers(beers.data))
        .catch((err) => console.log(err));
    };
    getBeers();
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setItems(cart);
  }, []);

  const handleAdd = (beer) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setItems([...cart, beer]);
  };
  const handleRemove = (beer) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setItems(cart.filter((item) => item.id !== beer.id));
  };

  const orderedIds = items?.map((item) => item.id);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      <Router>
        <NavBar items={items} />
        <Routes>
          <Route
            path="/"
            element={
              <BeersList
                beers={beers}
                orderedIds={orderedIds}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={<Cart items={items} handleRemove={handleRemove} />}
          ></Route>
          <Route
            path="/beers/:id"
            element={
              <BeerDetails
                orderedIds={orderedIds}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
