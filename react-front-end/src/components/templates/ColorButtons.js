import React, { useState } from 'react';
import { ColorPicker } from 'material-ui-color';


export default function ColorButtons() {
  const [color, setColor] = useState("#fff")
  
  return(
    <div>
      <ColorPicker defaultValue={color} onChange={(event) => setColor(event.target.value)} />
    </div>
  )

} 
