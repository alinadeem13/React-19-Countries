import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { name, population, region, capital, flags } = country;

  return (
    <li className="country-card card">
      <div className="container-card bg-blue box">
        <img src={flags.png} alt={name.common} />
        <div className="country-info">
          <h2 className="card-title">{name.common}</h2>
          <p>
            <span className="card-description">Population:</span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region:</span>
            {region}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            {capital ? capital[0] : "N/A"}
          </p>
          <NavLink to={`/country/${name.common}`} className="btn-link">
            <button className="btn btn-primary">More Details</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
