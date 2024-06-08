import React from 'react';
import early from '../Assets/leaves/early.jpg';
import late from '../Assets/leaves/late.jpg';

const PotatoDiseases = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1 className='text-success text-start'>Potato Diseases</h1>
      <div className="row align-items-center mb-4 from-left-to-position">
        <div className="col-md-4">
          <img 
            src={late}
            className="img-fluid rounded w-75" 
            alt="Late Blight" 
          />
        </div>
        <div className="col-md-8">
          <h2 className='text-success text-start'>Late Blight</h2>
          <p className='text-success text-start'>
            Late blight, caused by the oomycete Phytophthora infestans, is a devastating disease of potatoes and tomatoes. It thrives in cool, wet conditions.
          </p>
          <ul className="list-group text-start">
            <li className="list-group-item text-success">Symptoms include dark lesions on leaves and stems.</li>
            <li className="list-group-item text-success">Tubers develop firm, dark spots.</li>
            <li className="list-group-item text-success">Preventive measures include crop rotation and resistant varieties.</li>
            <li className="list-group-item text-success">Fungicides can help manage outbreaks.</li>
          </ul>
        </div>
      </div>
      <div className="row align-items-center from-left-to-position">
        <div className="col-md-4">
          <img 
            src={early}
            className="img-fluid rounded w-75" 
            alt="Early Blight" 
          />
        </div>
        <div className="col-md-8">
          <h2 className='text-success text-start'>Early Blight</h2>
          <p className='text-success text-start '>
            Early blight, caused by the fungus Alternaria solani, affects potatoes and tomatoes, causing leaf spots and tuber damage. It is more common in warm, humid conditions.
          </p>
          <ul className="list-group text-start">
            <li className="list-group-item text-success">Symptoms include concentric ring patterns on leaves.</li>
            <li className="list-group-item text-success">Leaves may turn yellow and drop prematurely.</li>
            <li className="list-group-item text-success">Ensure good air circulation and avoid overhead watering.</li>
            <li className="list-group-item text-success">Use fungicides as a preventive measure.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PotatoDiseases;
