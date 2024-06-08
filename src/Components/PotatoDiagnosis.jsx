import React from 'react';import { NavLink } from "react-router-dom";
import potato_leaves from '../Assets/leaves/pngtree-sweet-potato-leaf-vegetarian-plant-vegetable-png-image_6645184.png';
import early from '../Assets/leaves/early.jpg';
import late from '../Assets/leaves/late.jpg';
const PotatoDiagnosis = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row align-items-center">
        {/* Photo on the left */}
        <div className="col-md-6 mb-4">
          <img 
            src={early}
            className="img-fluid rounded me-1 w-25 from-left-to-position" 
            alt="Disease 1" 
          />
          <img 
            src={late}
            className="img-fluid rounded w-25 from-left-to-position" 
            alt="Disease 1" 
          />
           <img 
            src={potato_leaves}
            className="img-fluid rounded rounded me-1 w-25 from-left-to-position" 
            alt="healthy" 
          />
        </div>
        {/* Statement and button on the right */}
        <div className="col-md-6 mb-4 fade-out">
          <div className="d-flex flex-column justify-content-between h-100">
            {/* Statement on the top right */}
            <div>
              <p className='text-start text-success h1'>If you want to diagnose and treat your potatoes!</p>
            </div>
            {/* Button on the bottom right */}
            <div className="d-flex justify-content-start">
              <button className="btn btn-success">
                
                <NavLink className="nav-link text-light btn" to='/Diagnose-Treat' spy={true} activeClass="active">Try it</NavLink>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotatoDiagnosis;
