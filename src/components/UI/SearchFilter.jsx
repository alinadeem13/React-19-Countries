export const SearchFilter = ({
  search,
  setSearch,
  filteredCountries,
  setFilteredCountries,
}) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSelectChange = (event) => {
    setFilteredCountries(event.target.value);
  };
  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="search by name"
        value={search}
        onChange={handleInputChange}
      />

      <div>
        <select
          className="select-section"
          value={filteredCountries}
          onChange={handleSelectChange}
          name="region"
          id="region-select"
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
