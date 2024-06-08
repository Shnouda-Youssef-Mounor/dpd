import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import jack from '../Assets/Team Member/jack.jpg';
import bavly from '../Assets/Team Member/bavly.jpg';
import nourhan from '../Assets/Team Member/nourhan.jpg';
import marina from '../Assets/Team Member/marina.jpg';
import mora from '../Assets/Team Member/mora.jpg';
import madonna from '../Assets/Team Member/madonna.jpg';
import shnouda from '../Assets/Team Member/shnouda.jpg';

import drMarwa from '../Assets/Team Member/drMarwa.jpg';
import taNajwa from '../Assets/Team Member/TaNajwa.jpg';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Whether animation should only happen once
    });
  }, []);
  const supervisor = [
    { name: 'Dr. Marwa Mamdouh Emam', 
      image: drMarwa, 
      field: "Computer Science Department Faculty of Computers and Informatics Minia University" },
    { name: 'TA. Najwa jamal', 
      image: taNajwa, 
      field: "information system Department Faculty of Computers and Informatics Minia University" },
  ];

  const teamMembers = [
    { name: 'Jack', image: jack, field: 'ML/DL Engineer & Data Scientist' },
    { name: 'Bavly', image: bavly, field: 'Mobile Development' },
    { name: 'Shnouda', image: shnouda, field: 'Web Development-FullStack' },
    { name: 'Nourhan', image: nourhan, field: 'Mobile Development' },
    { name: 'Marina', image: marina, field: 'Mobile Development' },
    { name: 'Madonna', image: madonna, field: 'Web Development' },
    { name: 'Mora', image: mora, field: 'Mobile Development' },
  ];

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-start mb-4 text-success">About</h1>
      <p className="text-start text-success h5">
        <h5>Supervisors</h5>
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-4 from-left-to-position fade-out" style={{ placeContent: 'center' }}>
        {supervisor.map((member, index) => (
          <div key={index} className="col">
            <div className="card h-80 shadow fade-out">
            <div className="card-img-top" style={{height:300}}>
              <img
                src={member.image}
                className="tada img-thumbnail w-100"
                alt={member.name}
                style={{ transition: "transform 0.5s ease",height:300}}
              />
              </div>
              <div className="card-body">
                <h5 className="card-title text-success">{member.name}</h5>
                <p className="card-text text-success">{member.field}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-start mb-4 text-success mt-4">Ada Team</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="col">
            <div className="card h-80 shadow animate__animated animate__ fade-in">
              <div className="card-img-top">
              <img
                src={member.image}
                className="tada  img-thumbnail"
                alt={member.name}
                style={{ transition: "transform 0.5s ease" }}
              />
              </div>
              <div className="card-body">
                <h5 className="card-title text-success">{member.name}</h5>
                <p className="card-text text-success">{member.field}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
