import ShowCountryInfo from "./ShowCountryInfo";

const CountriesList = ({ countries, search, setSearch }) => {
  if (countries.length > 10) {
    return <h3>Too Many matches, specify another filter"</h3>;
  }
  if (countries.length === 1) {
    return <ShowCountryInfo country={countries[0]} />;
  }
  if (countries.length > 1) {
    return (
      <>
        {countries.map((country) => {
          return (
            <div key={country.name.common}>
              <p>{country.name.common}</p>
              <button onClick={() => setSearch(country.name.common)}>
                show
              </button>
            </div>
          );
        })}
      </>
    );
  }

  return <h3>No country with this keyword exist {search}</h3>;
};
export default CountriesList;
