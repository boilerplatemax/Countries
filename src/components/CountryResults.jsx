import React from "react";
import SingleCountry from "./SingleCountry";
import CountryList from "./CountryList";

const CountryResults = ({ showResult, weather, filteredCountries = [] }) => {
  const count = filteredCountries.length;

  if (count > 10) {
    return (
      <p className="text-center bg-yellow-100 text-yellow-800 font-semibold py-3 px-4 rounded-lg shadow-sm">
        Too many matches, please specify another filter
      </p>
    );
  }

  if (count === 0) {
    return (
      <p className="text-center bg-red-100 text-red-800 font-semibold py-3 px-4 rounded-lg shadow-sm">
        No results found
      </p>
    );
  }


  if (count === 1) {
    return (
      <SingleCountry
        filteredCountries={filteredCountries}
        weather={weather}
      />
    );
  }

  return (
    <CountryList
      showResult={showResult}
      filteredCountries={filteredCountries}
    />
  );
};

export default CountryResults;
