import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
// import picture1 from './img/parkinglot.jpg'

const ParkSpace = () => {
  const [value, setValue] = useState([1, 3]);
  const handleChange = (val) => setValue(val);

  return (
    <div>
      <div>
      {/* <img className='parkinglot_img' alt='iphon_01'src={picture1} width='400px' height='400px'/> */}
      </div>
      
      <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton id="tbg-btn-1" value={1}>
        easy to park
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={2}>
        closest to entry
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
};

export default ParkSpace;