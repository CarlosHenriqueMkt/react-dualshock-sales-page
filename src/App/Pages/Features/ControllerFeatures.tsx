import React from 'react'
import * as C from './styles'
import Divider from '@mui/material/Divider';

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
              <i className="fa-solid fa-user"></i>
            </div>
            <h3>User Friendly</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
              commodi.
            </p>
          </div>
        </div>
       
       {/*  <!-- Column Two --> */}
        <div className="column">
          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Super Secure</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
              commodi.
            </p>
          </div>
        </div>
        
        {/* <!-- Column Three --> */}
        <div className="column">
          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-headset"></i>
            </div>
            <h3>Quick Support</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
              commodi.
            </p>
          </div>
        </div>
      </div>
    </section>
    </C.Features>
  )
}

export default ControllerFeatures