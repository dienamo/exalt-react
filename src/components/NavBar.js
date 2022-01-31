import { Link, useLocation } from "react-router-dom";

const NavBar = ({ items }) => {
  const location = useLocation();
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    height: "10vh",
  };
  return (
    <div style={mystyle}>
      {!items.length && location.pathname === "/cart" ? (
        ""
      ) : (
        <div>
          {!items.length ? (
            "Empty cart"
          ) : (
            <div>
              {" "}
              <p>Cart : {items.length}</p>{" "}
              <button>
                <Link to={`/cart`}>Checkout</Link>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
