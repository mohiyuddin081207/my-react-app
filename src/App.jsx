import React, { useState } from 'react';


const marsData = [
  {
    "id": "olympus-base",
    "name": "Olympus Base",
    "region": "Olympus Mons",
    "temp": "-55°C",
    "dustLevel": "Moderate",
    "advisory": "Solar Flare Alert: High UV index. Stay indoors between 0600 and 1400 Sols.",
    "theme": "#ac2b11",
    "background":"https://lowell.edu/wp-content/uploads/2020/09/maxresdefault-1024x576.jpg"
  },
  {
    "id": "acidalia-hub",
    "name": "Acidalia Hub",
    "region": "Acidalia Planitia",
    "temp": "-80°C",
    "dustLevel": "Extreme",
    "advisory": "Dust Storm incoming. Secure all pressurized rovers and toggle static shields.",
    "theme": "#5A6266",
    "background":"https://science.iirs.gov.in/wp-content/uploads/2024/06/dust_storm.png"
  },
  {
    "id": "valles-biodome",
    "name": "Valles Biodome",
    "region": "Valles Marineris",
    "temp": "-15°C",
    "dustLevel": "Low",
    "advisory": "Atmospheric pressure stable. Enjoy the green sector walk paths.",
    "theme": "#2E7D32",
    "background":"https://media.architecturaldigest.com/photos/57a0df91b6c434ab487bc255/16:9/w_1280,c_limit/mars-habitats-01.jpeg"
  },
  {
    "id": "utopia-plains",
    "name": "Utopia Plains",
    "region": "Utopia Planitia",
    "temp": "-65°C",
    "dustLevel": "Low",
    "advisory": "Subsurface ice mining operation active. Watch out for heavy machinery traffic.",
    "theme": "#4A90E2",
    "background":"https://img-v3.deepdreamgenerator.com/4139678/md_ujwsqt_fd4c80cb6284ac0589a8766d665fd0b8fafa7942.jpg"
  }
];

export default function App() {
  


  const [selectedId, setSelectedId] = useState("olympus-base");

     const currentCity = marsData.find(city => city.id === selectedId);

  return (
    <div style={{
      backgroundImage:`url('${currentCity.background}')`, 
       backgroundSize: 'cover',      
       backgroundAttachment: 'fixed',
       fontFamily: 'sans-serif',
       padding: '20px',
       backgroundColor: '#111',
     color: '#fff', minHeight: '100vh' }}>
      <h1>🔴 Mars Weather Update</h1>
      

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        
     
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}>
          <h3>Select Base</h3>
          {marsData.map((city) => (
            <button
              key={city.id}
           
              onClick={() => setSelectedId(city.id)}
              style={{
                padding: '12px',
                textAlign: 'left',
            
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
      
        <div style={{ 
          flex: '2', 
          border: `3px solid ${currentCity.theme}`, 
          borderRadius: '10px', 
          padding: '20px',
          backgroundColor: '#1a1a1a'
        }}>
           <h2 style={{ color: currentCity.theme, margin: '10px 10px 10px 0' }}>{currentCity.name}</h2>
           <p><strong>Region:</strong> {currentCity.region}</p>
           <p><strong>Temperature:</strong> {currentCity.temp}</p>
            <p><strong>Dust Level:</strong> {currentCity.dustLevel}</p>
          

          <div style={{ 
            marginTop: '20px', 
            padding: '15px', 
            backgroundColor: `${currentCity.theme}22`, 
            border: `5px solid ${currentCity.theme}` 
          }}>
            <h4 style={{ margin: '0 0 5px 0', color: currentCity.theme }}>⚠️ SAFETY ADVISORY</h4>
            <p style={{ margin: 0 }}>{currentCity.advisory}</p>
          </div>
        </div>

      </div>
    </div>
  );
}