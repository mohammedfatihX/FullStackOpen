import { useState, useEffect } from "react";
import serviceCountries from "./services/Country";
import FormSearch from "./components/FormSearch";
import CountriesList from "./components/ListCountry";
function App() {
  const [allCountries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const countryToShow =
    search === ""
      ? allCountries
      : allCountries.filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase()),
        );
  useEffect(() => {
    serviceCountries.getAllCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  const listenOnChange = (event, setValue) => {
    event.preventDefault();
    const eventValue = event.target.value;
    setValue(eventValue);
    setSearch(eventValue);
  };
  return (
    <>
      <FormSearch listenOnChange={listenOnChange} />
      <CountriesList
        countries={countryToShow}
        value={search}
        setSearch={setSearch}
      />
    </>
  );
}

export default App;
