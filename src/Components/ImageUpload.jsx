// src/ImageUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { Spinner } from 'react-bootstrap';
import potato from "../Assets/potato/R.png";
import Footer from '../Components/Footer';

const ImageUpload = () => {
  const [files, setFiles] = useState([]);
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    }
  });

  const uploadFiles = async () => {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('image', file);  // use 'image' as the key
    });

    setLoading(true);
    try {
      const response = await axios.post('http://102.184.125.88:8080/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setDiagnosis(response.data);
    } catch (error) {
      console.error('Error uploading files', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container mt-5 pt-5 mb-5 pb-5 d-flex justify-content-center align-items-center mb-sm-5 mb-md-5">        
      <div className="card w-75 d-flex justify-content-center align-items-center">
        <img src={potato} className="card-img-top img-fluid fade-out w-75 h-100" alt="potato-photo" />
        <div className="card-body">
          <div {...getRootProps()} className="btn btn-success text-center text-light">
            <input {...getInputProps()} />
            Click to select files
          </div>
          <div className="mt-3">
            {files.map(file => (
              <div key={file.name} className="alert alert-success">
                {file.name}
              </div>
            ))}
          </div>
          
          <button onClick={uploadFiles} className="btn btn-success mt-3" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : 'Diagnosis'}
          </button>
          {diagnosis && (
            <div className="mt-4 text-start">
              <h3>Diagnosis Result</h3>
              {Object.keys(diagnosis.class).length > 0 ? (
                Object.keys(diagnosis.class).map(key => (
                  <div key={key} className="mb-2">
                    <p><strong>Disease:</strong> {diagnosis.class[key]}</p>
                    <p><strong>Infection Prevalence Rate:</strong> {diagnosis.Mean_Ratio[key]}</p>
                    <p><strong>Percentage of Class Presence:</strong> 
                    {diagnosis.ocur[key] * 100}%</p>
                  </div>
                ))
              ) : (
                <p>No diagnosis results found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
    <div className='footer'>
    <Footer/>
    </div>
  </div>
  );
};

export default ImageUpload;
