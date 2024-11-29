// src/SCPAtoCGPAConverter.jsx
import { useState } from 'react';

const SCPAtoCGPAConverter = () => {
  const [scpa, setScpa] = useState('');
  const [cgpa, setCgpa] = useState(null);

  const handleScpaChange = (e) => {
    setScpa(e.target.value);
  };

  const convertToCgpa = () => {
    const scpaValue = parseFloat(scpa);
    if (!isNaN(scpaValue)) {
      const cgpaValue = (scpaValue * 10) - 7.5;
      setCgpa(cgpaValue.toFixed(2));
    } else {
      setCgpa('Invalid input');
    }
  };

  const clearResult = () => {
    setScpa('');
    setCgpa(null);
  };

  return (
    <div className="converter">
      <h2><i>CGPA → PERCENTAGE</i></h2>
      <div className="input-group">
        <label htmlFor="scpa">Enter SGPA:</label>
        <input
          type="number"
          id="scpa"
          value={scpa}
          onChange={handleScpaChange}
          
        />
      </div>
      <button onClick={convertToCgpa}>Convert</button>
      {cgpa !== null && (
        <div className="result">
          <h3>Percentage: {cgpa}%</h3>
          <button onClick={clearResult} className="clear-button">Clear</button>
        </div>
      )}
    </div>
  );
};

export default SCPAtoCGPAConverter;
