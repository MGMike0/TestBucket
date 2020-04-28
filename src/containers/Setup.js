import React, { useState } from 'react';
import Connect from '../rdx/connect';

const Setup = (props) => {
  const [toggle, setToggle] = useState(true);

  const {
    rdx: { getDevelopers },
  } = props;

  return (
    <div>
      <button type="button" onClick={() => getDevelopers('this is the way')}>
        Toggle
      </button>
      {toggle && <div>Text goes here</div>}
    </div>
  );
};

const connectedSampleComponent = Connect(Setup);

export default connectedSampleComponent;
