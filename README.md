# Country Explorer 🌍

A small React app to search for countries, view details, and see current weather in their capital(s). Built with TailwindCSS for a clean, modern UI.

---

## Features

- **Search Countries**: Type in a country's name and see matching results in real-time.
- **Exact vs Partial Matches**: Prioritizes exact matches (e.g., typing `India` shows India immediately rather than also showing `British Indian Ocean Territory`).
- **Country Details**: Displays information like:
  - Name
  - Capital(s) — handles countries with multiple capitals like South Africa
  - Area
  - Languages
  - Flag
- **Weather Info**: Fetches and displays current weather for the country’s main capital. Shows:
  - Temperature (°C)
  - Wind speed
  - Weather icon
- **Responsive Design**: Works on mobile and desktop with a polished, modern layout.
- **Polished UX**: Includes feedback for edge cases:
  - Too many matches: `Too many matches, please specify another filter`
  - No matches: `No results found`

---

## Complexities & Edge Cases

While building the app, several real-world quirks of country data needed special handling:

1. **Exact vs Partial Search**  
   Searching for `India` or `Sudan` could otherwise return `British Indian Ocean Territory` or `South Sudan`. The app prioritizes exact matches for smoother UX.

2. **Countries with No Capital**  
   Some countries, like Antarctica, have no capital. The app handles these gracefully, showing “N/A” or falling back to the country name for weather requests.

3. **Countries with Multiple Capitals**  
   Countries like South Africa have multiple capitals. Capitals are displayed as a comma-separated list, and the first capital is used for weather data.

4. **Multiple API Calls**  
   - **Country Data**: Fetched from a general countries API to get all country details.  
   - **Weather Data**: Fetched separately via OpenWeatherMap for the selected country's capital.  
   This ensures up-to-date weather info and avoids bundling large datasets unnecessarily.

5. **UI/UX Considerations**  
   - Flag images are scaled to a consistent height to handle different aspect ratios.  
   - Weather card background is slightly darker for readability regardless of the icon's light or dark colors.  
   - Messages like “Too many matches” or “No results” are styled to be visually clear.

---

## Technologies Used

- **React** (functional components + hooks)  
- **TailwindCSS** (for modern, responsive styling)  
- **OpenWeatherMap API** (for weather data)  
- **REST Countries API** (for country data)  
