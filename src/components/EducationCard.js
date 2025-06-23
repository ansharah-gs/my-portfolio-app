import React from "react";
export default function EducationCard() {
  return (
    <>
      <div className="col main-container">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-uppercase">Education</h2>
            <hr />
            <ul className="list-unstyled">
              <li className="my-4 d-flex">
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <div className="title-container">
                      <div className="title">
                        <h6>Full Stack Developer</h6>
                      </div>
                      <div className="location">
                        <p>
                          <a
                            href="https://www.sait.ca/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Southern Alberta Institute of Technology (SAIT)
                          </a>
                          <br />
                          Calgary, Alberta
                        </p>
                      </div>
                    </div>
                    <h6 className="ml-auto">2023</h6>
                  </div>
                </div>
              </li>
              <li className="my-4 d-flex">
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <div className="title-container">
                      <div className="title">
                        <h6>
                          Bachelor of Computer Science - Software Development
                        </h6>
                      </div>
                      <div className="location">
                        <p>
                          <a
                            href="https://www.fuuastisb.edu.pk/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Federal Urdu University of Arts, Sciences &
                            Technology
                          </a>
                          <br />
                          Islamabad, Pakistan
                        </p>
                      </div>
                    </div>
                    <h6 className="mr-auto">2015 to 2019</h6>
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
