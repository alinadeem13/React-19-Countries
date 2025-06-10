import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <NavLink to="/" style={{ textDecoration: "none", color: "blue" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "lightblue",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Go to Home
        </button>
      </NavLink>
    </div>
  );
};
