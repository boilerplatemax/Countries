import React from 'react';

const SingleCountry = ({ filteredCountries, weather }) => {
  const result = filteredCountries[0];
  const languageNames = result.languages ? Object.values(result.languages) : [];

  //Some countries like Bolivia and South Africa have multiple capitals
  const capitals = Array.isArray(result.capital) ? result.capital : [result.capital];
  const capitalsDisplay = capitals.join(', ');

  return (
    <div className="max-w-5xl mx-auto mt-8 bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
      {/* Top bar with country name */}
      <div className="bg-indigo-600 text-white text-center py-4">
        <h2 className="text-4xl font-extrabold">{result.name.common}</h2>
      </div>

      {/* Main content */}
      <div className="p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Info section */}
        <div className="lg:col-span-2 space-y-4">
          <p className="text-lg font-semibold">
            Capital{capitals.length > 1 ? 's' : ''}: <span className="font-bold">{capitalsDisplay}</span>
          </p>
          <p className="text-lg font-semibold">
            Area: <span className="font-bold">{result.area.toLocaleString()} km²</span>
          </p>
          <h3 className="text-2xl font-bold mt-4">Languages</h3>
          <ul className="list-disc list-inside ml-4">
            {languageNames.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>

        {/* Flag & Weather section */}
        <div className="flex flex-col items-center gap-6">
          <img
            src={result.flags.svg}
            alt={`${result.name.common} flag`}
            className="h-52 w-auto object-contain rounded-lg"
          />

          {weather && (
            <div className="bg-indigo-400 p-6 rounded-lg flex flex-col items-center gap-3 w-full">
              <h3 className="text-2xl font-bold text-indigo-900 text-center">
                Weather in {capitals[0] ?? result.name.common}
              </h3>
              <p className="text-lg font-semibold text-indigo-900">
                Temperature: {(weather.main.temp - 273.15).toFixed(1)} °C
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`}
                alt="weather icon"
                className="h-20 w-20"
              />
              <p className="text-lg font-semibold text-indigo-900">
                Wind: {weather.wind.speed} m/s
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
