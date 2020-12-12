import React, { useState } from 'react';
import './App.css';

import {Swatch} from './swatch.js';
import {Picker} from './picker.js';

function App() {
const [colors, setColors] = useState([]);

const removeColor = name =>{
  setColors(colors => colors.filter(color => color.name !== name));
}

const addColor = newColor =>{
  setColors(colors => [newColor, ...colors.filter(color => color.name !== newColor.name)]);
}
  return (
    <div id="swatches-root">
      <Picker add={addColor} />
      {colors.map(color => <Swatch key={color.name} color={color} remove={removeColor}/>)}

    </div>
    
  );
}

export default App;
