import { useState, useEffect } from "react";
import CountryResults from "./components/CountryResults";
import { getAllCountries } from "./services/countries";
import { getWeather } from "./services/weather";

const App = () => {
  const [countries, setCountries] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState(null);
  const api_weather_key = import.meta.env.VITE_OPENWEATHER_KEY;

  useEffect(() => {
    getAllCountries().then(
      response=>setCountries(response)
      )
    }, []);

//Necessary comparisson for countries like India, Sudan and Somao that would otherwise be unable to render
// Check if there are any exact country name matches (>0)
// Then filter to show the exact match or the regular list of countries
const filteredCountries =
  countries?.filter(c =>
    c.name.common.toLowerCase() === search.toLowerCase()
  ).length > 0
    ? countries.filter(c =>
        c.name.common.toLowerCase() === search.toLowerCase()
      )
    : countries?.filter(c =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      ) || [];



  useEffect(() => {
    if (filteredCountries.length === 1) {
      const country = filteredCountries[0];
      if (selectedCountry?.name?.common === country?.name?.common) return;
      setSelectedCountry(country);
    } else {
      setSelectedCountry(null);
    }
  }, [filteredCountries, selectedCountry]);


  useEffect(()=>{
    if(!selectedCountry){return}
    else{
      setWeather(null);
    }
    
    getWeather({country:selectedCountry,key:api_weather_key}).then((response) => setWeather(response));
    
  },[selectedCountry])

  const handleInputChange = (e) => {
    const currentSearch = e.target.value;
    setSearch(currentSearch);
  };

  const showResult = (country) => {
    setSearch(country);
  };



  
  if (!countries) return <div>Loading...</div>;
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-12 px-6">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md p-8 lg:p-12">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-700">
          Find Countries
        </h1>

        <input
          type="text"
          placeholder="Type a country..."
          onChange={handleInputChange}
          value={search}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg transition"
        />

        <div className="mt-8">
          <CountryResults
            showResult={showResult}
            weather={weather}
            filteredCountries={filteredCountries}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
