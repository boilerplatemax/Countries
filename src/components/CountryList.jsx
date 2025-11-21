import React from 'react';

const CountryList = ({ filteredCountries, showResult }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {filteredCountries.map((c) => (
        <div
          key={c.name.common}
          className="flex flex-col justify-between p-4 bg-white shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
            <img
            src={c.flags.svg}
            alt={`${c.name.common} flag`}
            className="h-52 w-auto object-contain rounded-lg"
          />
          <span className="text-lg font-semibold text-gray-800">{c.name.common}</span>
          <button
            onClick={() => showResult(c.name.common)}
            className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Show
          </button>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
