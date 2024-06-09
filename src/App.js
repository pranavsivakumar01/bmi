import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    if (bmiValue < 18.5) {
      setMessage('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage('Overweight');
    } else {
      setMessage('Obesity');
    }
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi}</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
