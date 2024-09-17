import React from 'react';
import Header from './Header'; // Assuming Header component exists
import Footer from './Footer'; // Assuming Footer component exists
import './App.css'; // Import the CSS file

const ScanResult = ({ name, medicines, output, pic }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <ol className="result list-group list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Name</div>
              {name}
            </div>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Medicine & Dosage</div>
              {medicines.map((medicine, index) => (
                <div key={index}>
                  {medicine[0]} &nbsp;&nbsp;&nbsp;&nbsp; {medicine[1]}
                  <br />
                </div>
              ))}
            </div>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Extracted Text</div>
              {Object.keys(output).map((key, index) => (
                <div key={index}>
                  {key} = {output[key]}
                  <br />
                </div>
              ))}
            </div>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Image</div>
              <img src={`/static/temp/${pic}`} width="700px" alt="Scanned Prescription" />
            </div>
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default ScanResult;
