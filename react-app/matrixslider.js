import React, { useState } from 'react';

const MatrixSlider = () => {
  const text1 = 'Welcome to Valid Thought';
  const text2 = 'Welcome to Valid Thought :earth_americas:';
  const maxLength = Math.max(text1.length, text2.length);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const renderTransitionText = () => {
    const index = Math.floor(sliderValue / 100 * maxLength);

    return Array.from({ length: maxLength }, (_, i) => {
      const char = i < index ? (text2[i] || ' ') : (text1[i] || ' ');

      return <span className={i === index ? 'highlight' : ''}>{char}</span>;
    });
  };

  return (
    <div>
      <div className="container">{renderTransitionText()}</div>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default MatrixSlider;
