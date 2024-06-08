import React from 'react';
import potato_Grow from '../Assets/leaves/how-to-grow-potatoes.png';
import potato_leaves from '../Assets/leaves/pngtree-sweet-potato-leaf-vegetarian-plant-vegetable-png-image_6645184.png';
const Potato = () => {
  return (
    <div className="container mt-5 fade-out-up">
         <img 
          src={potato_Grow}
          className="card-img-top" 
          alt="Potato" 
        />
      <div className="row align-items-center from-left-to-position">
        <div className="col-md-4">
          <img 
            src={potato_leaves} 
            className="img-fluid rounded" 
            alt="Potato" 
          />
        </div>
        <div className="col-md-8">
          <h1 className='text-success text-start'>Potato Benefits</h1>
          <ul className="list-group text-start">
            <li className="list-group-item text-success">Rich in carbohydrates for energy.</li>
            <li className="list-group-item text-success">High in vitamin C, boosting the immune system.</li>
            <li className="list-group-item text-success">Contains potassium, which helps regulate blood pressure.</li>
            <li className="list-group-item text-success">Good source of dietary fiber, promoting digestion.</li>
            <li className="list-group-item text-success">Contains antioxidants that help combat free radicals.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Potato;
