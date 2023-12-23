import React from "react";

const TechnicalSkills = () => {
  return (
    <>
      <div className="col mt-3 main-container">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-uppercase">Technical Skills</h2>
            <div>
              <h6>Programming Languages: </h6>
              <span class="badge  rounded-pill bg-primary me-1">HTML5</span>
              <span class="badge  rounded-pill bg-primary me-1">CSS3</span>
              <span class="badge  rounded-pill bg-primary me-1">
                Java Script
              </span>
              <span class="badge  rounded-pill bg-primary me-1">Node JS</span>

              <span class="badge  rounded-pill bg-primary me-1">C#</span>
              <span class="badge  rounded-pill bg-primary me-1">PHP</span>
            </div>
            <div className="mt-3">
              <h6>Libraries / Frameworks: </h6>
              <span class="badge  rounded-pill bg-primary me-1">React</span>
              <span class="badge  rounded-pill bg-primary me-1">
                Bootstrap5
              </span>
              <span class="badge  rounded-pill bg-primary me-1">Laravel</span>
              <span class="badge  rounded-pill bg-primary me-1">.NET</span>
              <span class="badge  rounded-pill bg-primary me-1">ASP.NET</span>
            </div>
            <div className="mt-3">
              <h6>IDEs: </h6>
              <span class="badge  rounded-pill bg-primary me-1">VSCode</span>
              <span class="badge  rounded-pill bg-primary me-1">
                MS Visual Studio
              </span>
              <span class="badge  rounded-pill bg-primary me-1">GitHub</span>
            </div>
            <div className="mt-3">
              <h6>Databases </h6>
              <span class="badge  rounded-pill bg-primary me-1">MySQL</span>
              <span class="badge  rounded-pill bg-primary me-1">T-SQL</span>
              <span class="badge  rounded-pill bg-primary me-1">
                Microsoft Access
              </span>
              <span class="badge  rounded-pill bg-primary me-1">
                Microsoft SQL Server
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalSkills;
