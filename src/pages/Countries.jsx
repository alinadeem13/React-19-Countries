import { useEffect, useState, useTransition } from "react";
import { getAllCountries } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Countries = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      try {
        const data = await getAllCountries();
        console.log("Countries data:", data);
        setCountries(data.data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    });
  }, []);
  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filteredCountries == "all") return country;
    return country.region === filteredCountries;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filteredCountries={filteredCountries}
        setFilteredCountries={setFilteredCountries}
      />

      {/* <ul className="grid grid-four-cols">
        {countries.map((country, index) => {
          const { name, population, region, capital, flags } = country;
          return (
            <li className="country-card" key={index}>
              <img src={flags.png} alt={name.common} />
              <div className="country-info">
                <h2>{name.common}</h2>
                <p>Population: {population.toLocaleString()}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital ? capital[0] : "N/A"}</p>
              </div>
            </li>
          );
        })}
      </ul> */}

      <ul className="grid grid-four-cols">
        {filterCountries.map((country, index) => {
          return <CountryCard country={country} key={index} />;
        })}
      </ul>
    </section>
  );
};
