import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import './App.css'; // Import your CSS file
import sampleImage from './assets/sample-image.jpg'; 



function TextForm() {
  const [creditEarned, setCreditEarned] = useState('');
  const [pointScored, setPointScored] = useState('');
  const [cgpa, setCgpa] = useState(null);

  const [semesterCredits, setSemesterCredits] = useState('');
  const [semesterPoints, setSemesterPoints] = useState('');
  const [sgpa, setSgpa] = useState(null);

  const [presentCreditEarned, setPresentCreditEarned] = useState('');
  const [presentSgpa, setPresentSgpa] = useState('');
  const [presentPointScored, setPresentPointScored] = useState(null);

  const handleCreditEarnedChange = (e) => {
    setCreditEarned(e.target.value);
  };

  const handlePointScoredChange = (e) => {
    setPointScored(e.target.value);
  };

  const handleSemesterCreditsChange = (e) => {
    setSemesterCredits(e.target.value);
  };

  const handleSemesterPointsChange = (e) => {
    setSemesterPoints(e.target.value);
  };

  const handlePresentCreditEarnedChange = (e) => {
    setPresentCreditEarned(e.target.value);
  };

  const handlePresentSgpaChange = (e) => {
    setPresentSgpa(e.target.value);
  };

  const evaluateExpression = (expression) => {
    try {
      return eval(expression);
    } catch {
      return NaN;
    }
  };

  const calculateCGPA = () => {
    if (creditEarned.trim() === '' || pointScored.trim() === '') {
      alert('Please enter valid numbers for both fields.');
      return;
    }

    const credit = evaluateExpression(creditEarned);
    const points = evaluateExpression(pointScored);

    if (!isNaN(credit) && !isNaN(points) && credit !== 0) {
      const result = points / credit;
      setCgpa(result.toFixed(2));
    } else {
      alert('Please enter valid numbers for both fields and ensure credit earned is not zero.');
    }
  };

  const calculateSGPA = () => {
    if (semesterCredits.trim() === '' || semesterPoints.trim() === '') {
      alert('Please enter valid numbers for both fields.');
      return;
    }

    const semesterCredit = evaluateExpression(semesterCredits);
    const semesterPoint = evaluateExpression(semesterPoints);

    if (!isNaN(semesterCredit) && !isNaN(semesterPoint) && semesterCredit !== 0) {
      const result = semesterPoint / semesterCredit;
      setSgpa(result.toFixed(2));
    } else {
      alert('Please enter valid numbers for both fields and ensure semester credits are not zero.');
    }
  };

  const calculatePresentPointScored = () => {
    if (presentCreditEarned.trim() === '' || presentSgpa.trim() === '') {
      alert('Please enter valid numbers for both fields.');
      return;
    }

    const credit = evaluateExpression(presentCreditEarned);
    const sgpaValue = evaluateExpression(presentSgpa);

    if (!isNaN(credit) && !isNaN(sgpaValue)) {
      const result = credit * sgpaValue;
      setPresentPointScored(result.toFixed(2));
    } else {
      alert('Please enter valid numbers for both fields.');
    }
  };

  const clearResults = () => {
    setCgpa(null);
    setSgpa(null);
    setCreditEarned('');
    setPointScored('');
    setSemesterCredits('');
    setSemesterPoints('');
    setPresentCreditEarned('');
    setPresentSgpa('');
    setPresentPointScored(null);
  };

  return (
    <div>
    
      <div className="navbar">
         <div className="scrolling-text"><i> If you want to know the CGPA of the semester you are in, you need to add the total marks from the first semester to the current semester. Enter those marks in the text box.</i> 
        </div>
      </div>
      <div className="image-wrapper">
          <img src={sampleImage} alt="Sample" className="main-image" />
        </div>


        
      <div className="converter-wrapper">
        

        <div className="converter">
          <h2><i>CALCULATE CGPA</i></h2>
          <div className="input-group">
            <label>Total Points Scored (Present + Previous) Semester:</label>
            <input
              type="text"
              value={pointScored}
              onChange={handlePointScoredChange} placeholder='ex:- 170 + 200.50'
            />
          </div>
          <div className="input-group">
            <label>Total Credit Earned (Present + Previous) Semester:</label>
            <input
              type="text"
              value={creditEarned}
              onChange={handleCreditEarnedChange}  placeholder='ex:- 17.5 + 20.50'
            />
          </div>
          <button className="calculate-button" onClick={calculateCGPA}>Calculate CGPA</button>
          {cgpa !== null && (
            <div className="result">
              <h3>CGPA: {cgpa}</h3>
              <button onClick={clearResults} className="clear-button">Clear</button>
            </div>
          )}
        </div>

        <div className="converter">
          <h2><i>CALCULATE SGPA</i></h2>
          <div className="input-group">
            <label>Point Scored in Present Semester:</label>
            <input
              type="text"
              value={semesterPoints}
              onChange={handleSemesterPointsChange} placeholder='ex:- 170.5'
            />
          </div>
          <div className="input-group">
            <label>Credits Earned in Present Semester:</label>
            <input
              type="text"
              value={semesterCredits}
              onChange={handleSemesterCreditsChange}placeholder='ex:- 17.5'
            />
          </div>



          
          <button className="calculate-button" onClick={calculateSGPA}>Calculate SGPA</button>
          {sgpa !== null && (
            <div className="result">
              <h3>SGPA: {sgpa}</h3>
              <button onClick={clearResults} className="clear-button">Clear</button>
            </div>
          )}
        </div>
        <div className="note">
        <p><i> <FontAwesomeIcon icon={faThumbtack} />&nbsp;If you don`t remember your point scored in present semester then you can calculate it using the below calculator.</i></p>
      </div>
        <div className="converter">
          <h2><i>CALCULATE POINT</i></h2>
          <div className="input-group">
            <label>Credit Earned in Present Semester:</label>
            <input
              type="text"
              value={presentCreditEarned}
              onChange={handlePresentCreditEarnedChange}placeholder='ex:- 20.00'
            />
          </div>
          <div className="input-group">
            <label>SGPA in Present Semester:</label>
            <input
              type="text"
              value={presentSgpa}
              onChange={handlePresentSgpaChange}placeholder='ex:- 10.00'
            />
          </div>
          <button className="calculate-button" onClick={calculatePresentPointScored}>Calculate Point</button>
          {presentPointScored !== null && (
            <div className="result">
              <h3>Present Point Scored: {presentPointScored}</h3>
              <button onClick={clearResults} className="clear-button">Clear</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextForm;
