import React from "react";
import countryList from "../api/countryData.json";
export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="cintianer-titel">
        Here are the Intersting Facts
        <br />
        we're proud of
      </h2>
      <div className="gradient-cards">
        {countryList.map((country, index) => (
          <div className="card" key={index}>
            <div className="container-card bg-blue box">
              <p className="card-title">{country.name}</p>
              <p>
                <span className="card-description">Capital:</span>
                {country.capital}
              </p>
              <p>
                <span className="card-description">Population:</span>
                {country.population}
              </p>
              <p>
                <span className="card-description">Interesting Fact:</span>
                {country.interestingFact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
