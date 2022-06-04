import React from 'react'
import * as C from './styles'
import Divider from '@mui/material/Divider';
import { VscDebugStart } from 'react-icons/vsc';
import { MdTouchApp } from 'react-icons/md';
import { GiConsoleController } from 'react-icons/gi';

function ControllerFeatures() {

  return (
    <C.Features>
      <Divider><article className="featuresTitle"> <h2>New Features</h2> </article></Divider>
      <section>
      <div className="row">
      
        {/* <!-- Column One --> */}
        <div className="column">
          <div className="card">
            <div className="icon">
              <MdTouchApp />
            </div>
            <h3>Front and center: touchpad</h3>
            <p>
            This 2-inch wide, clickable slick spot supports two points of touch and smartphone-like swiping and pinch-to-zoom gestures.
            </p>
          </div>
        </div>
       
       {/*  <!-- Column Two --> */}
        <div className="column">
          <div className="card">
            <div className="icon">
              <VscDebugStart />
            </div>
            <h3>Farewell, start and select</h3>
            <p>
            These new ancillary buttons replace start and select, which have been standard buttons since the first PlayStation console.
            </p>
          </div>
        </div>
        
        {/* <!-- Column Three --> */}
        <div className="column">
          <div className="card">
            <div className="icon">
              <GiConsoleController />
            </div>
            <h3>Top of its game: Head-and-shoulders better</h3>
            <p>
            Now gamers could feel as if they were stepping on a gas pedal or holding down a gun's firing pin at different degrees.
            </p>
          </div>
        </div>
      </div>
    </section>
    </C.Features>
  )
}

export default ControllerFeatures