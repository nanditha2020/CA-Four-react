import React, { useState, useEffect } from 'react';
import questions from '../questions';
import Result from './Result';
import img from '../assets/kalvium.png';
import '../App.css';

export default function QuestionBox() {
  const [count, setCount] = useState(0);
  const [textColor, setTextColor] = useState('black');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [lightText, setLightText] = useState('Dark mode');

  const increment = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (count < 4) {
      setCount(count + 1);
    } else {
      setShowResult(true);
    }
  };

  const highlight = () => {
    setTextColor('red');
  };

  const removeHighlight = () => {
    setTextColor('black');
  };

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
      setLightText('Light ');
    } else {
      body.classList.remove('dark-mode');
      setLightText('Dark ');
    }
  }, [darkMode]);

  return (
    <div className='body'>
      <div className='Questionnav'>
        <img className='kalvium' src={img} alt="" />
        <div className='themebutton'>
          <button onClick={() => setDarkMode(!darkMode)}>
            {lightText}
          </button>
        </div>
      </div>
      {showResult ? (
        <Result data={score} />
      ) : (
        <div className='flex'>
          <div className='container'>
            <h2>Question: {count + 1} out of 5</h2>
            <h1 id='ques' style={{ color: textColor }}>
              {questions[count].text}
            </h1>
            <div className='optionsdiv'>
              {questions[count].options.map((choice) => (
                <button onClick={() => increment(choice.isCorrect)}>
                  {choice.text}
                </button>
              ))}
            </div>
            <div className='highlightdiv'>
              <button onClick={highlight}>Highlight</button>
              <button onClick={removeHighlight}>Remove Highlight</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
