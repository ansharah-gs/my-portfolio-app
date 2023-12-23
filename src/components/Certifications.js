import React from "react";
export default function Certification() {
  return (
    <>
      <div className="col main-container mt-3">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">CERTIFICATES </h2>
            <ul className="list-unstyled">
              <li className="my-4 d-flex">
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <div className="title-container">
                      <div className="title">
                        <h6>Penetration Testing/CompTIA Pentest+</h6>
                      </div>
                      <div className="location">
                        <p>Islamabad, Pakistan</p>
                      </div>
                    </div>
                    <span className="mr-auto">Oct 2015 to March 2019</span>
                  </div>
                </div>
              </li>
              <li className="my-4 d-flex">
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <div className="title-container">
                      <div className="title">
                        <h6 className="fw-bold">Full Stack Developer</h6>
                      </div>
                      <div className="location">
                        <p>
                          Android Programming
                          <br />
                          Air University, Islamabad, Pakistan
                        </p>
                      </div>
                    </div>
                    <span className="ml-auto">July 2017 to Aug 2017</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
