import React, { useState } from 'react';

// 1. The Raw Data Array (Your simplified db.json contents directly in the file)
const marsData = [
  {
    "id": "olympus-base",
    "name": "Olympus Base",
    "region": "Olympus Mons",
    "temp": "-55°C",
    "dustLevel": "Moderate",
    "advisory": "Solar Flare Alert: High UV index. Stay indoors between 0600 and 1400 Sols.",
    "theme": "#E2583E"
  },
  {
    "id": "acidalia-hub",
    "name": "Acidalia Hub",
    "region": "Acidalia Planitia",
    "temp": "-80°C",
    "dustLevel": "Extreme",
    "advisory": "Dust Storm incoming. Secure all pressurized rovers and toggle static shields.",
    "theme": "#5A6266"
  },
  {
    "id": "valles-biodome",
    "name": "Valles Biodome",
    "region": "Valles Marineris",
    "temp": "-15°C",
    "dustLevel": "Low",
    "advisory": "Atmospheric pressure stable. Enjoy the green sector walk paths.",
    "theme": "#2E7D32"
  },
  {
    "id": "utopia-plains",
    "name": "Utopia Plains",
    "region": "Utopia Planitia",
    "temp": "-65°C",
    "dustLevel": "Low",
    "advisory": "Subsurface ice mining operation active. Watch out for heavy machinery traffic.",
    "theme": "#4A90E2"
  }
];

export default function App() {
  // 2. STATE: We only track the ID of the selected city. It starts with "olympus-base".
  const [selectedId, setSelectedId] = useState("olympus-base");

  // 3. REACTION: Find the city object matching that ID so we can display its info.
  const currentCity = marsData.find(city => city.id === selectedId);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
      <h1>🔴 Mars Weather Command</h1>
      
      {/* Main Layout Grid */}
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        
        {/* LEFT COLUMN: THE CITY SELECTOR BUTTONS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}>
          <h3>Select Base</h3>
          {marsData.map((city) => (
            <button
              key={city.id}
              // When clicked, update the state variable with this city's ID
              onClick={() => setSelectedId(city.id)}
              style={{
                padding: '12px',
                textAlign: 'left',
                // If this button matches our state, paint it with its unique theme color!
                backgroundColor: city.id === selectedId ? city.theme : '#222',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              {city.name}
            </button>
          ))}
        </div>

        {/* RIGHT COLUMN: THE DASHBOARD DISPLAY */}
        {/* The border color dynamically switches based on the current city's theme! */}
        <div style={{ 
          flex: '2', 
          border: `3px solid ${currentCity.theme}`, 
          borderRadius: '10px', 
          padding: '20px',
          backgroundColor: '#1a1a1a'
        }}>
          <h2 style={{ color: currentCity.theme, margin: '0 0 10px 0' }}>{currentCity.name}</h2>
          <p><strong>Region:</strong> {currentCity.region}</p>
          <p><strong>Temperature:</strong> {currentCity.temp}</p>
          <p><strong>Dust Level:</strong> {currentCity.dustLevel}</p>
          
          {/* LIFE SUPPORT ADVISORY BOX */}
          <div style={{ 
            marginTop: '20px', 
            padding: '15px', 
            backgroundColor: `${currentCity.theme}22`, // Adding transparency
            borderLeft: `5px solid ${currentCity.theme}` 
          }}>
            <h4 style={{ margin: '0 0 5px 0', color: currentCity.theme }}>⚠️ SAFETY ADVISORY</h4>
            <p style={{ margin: 0 }}>{currentCity.advisory}</p>
          </div>
        </div>

      </div>
    </div>
  );
}