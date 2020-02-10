import React, { useState } from 'react';
import { WbSunny, Brightness3 } from '@material-ui/icons'
import { Button } from '@material-ui/core'

import './App.scss'
import buttonStyles from './mui/buttonStyles'

const App = () => {

  const classes = buttonStyles()
  const [night, setNight] = useState(false)

  return (
    <div className="my-room">
      <div className={`my-room__mode my-room__mode${night ? `--night` : `--day`}`}>
        {night ? <Brightness3 fontSize="inherit" /> : <WbSunny fontSize="inherit" />}
      </div>
      <Button 
        className={`my-room__submit ${classes.root}`}
        onClick={() => setNight(prevState => !prevState)}
      >
        {`Set ${night ? `day` : `night`}`}
      </Button>
    </div>
  );
}

export default App;
