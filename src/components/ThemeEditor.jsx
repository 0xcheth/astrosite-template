// src/components/ThemeEditor.jsx
import React, { useState } from 'react';

function ThemeEditor() {
  const [colors, setColors] = useState({
    HeaderBg: 'white',
    MainBg: 'white',
    HeaderText: 'auto',
    MobileNav: 'auto',
    MobileNavBtn: 'auto',
    NavBtnHover: 'auto',
    HeadingstxtCl: 'blue',
    BodytextCl: 'green',
    ListCl: 'orange',
    HyperlinkCl: 'magenta',
    HyperlinkClHover: 'blue',
    CodeBlockBg: 'auto'
  });

  const handleColorChange = (key, value) => {
    setColors(prevColors => ({
      ...prevColors,
      [key]: value
    }));
  };

  return (
    <div>
      <h2>Theme Editor</h2>
      <form>
        {Object.keys(colors).map(key => (
          <div key={key}>
            <label htmlFor={key}>{key}:</label>
            <input
              type="text"
              id={key}
              value={colors[key]}
              onChange={(e) => handleColorChange(key, e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
}

export default ThemeEditor;
