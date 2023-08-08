import React from "react";
export default function EducationCard() {

  return (
    <>
      <div className="col-md">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Education</h2>
            
            
            <ul className="list-unstyled">
              <li>
                <h6 className="fw-bold">
                  Bachelor of Computer Science - Software Development / FUUAST
                  Islamabad, Pakistan 2015-2019
                </h6>
                <p>
                  Sed et ornare quam. Cras scelerisque ex ultricies neque
                  sodales tristique. Phasellus mattis dui ut enim tincidunt
                  auctor. Maecenas euismod, orci eget varius elementum, nunc
                  massa dignissim sapien, ac sagittis libero dolor vitae elit.
                </p>
              </li>
              <li>
                <h6 className="fw-bold">Islamabad College for Girls F-6/2 Islamabad /High School 2012-2014</h6>
                <p>
                  Aenean nisl enim, dictum in odio ut, suscipit efficitur diam.
                  Nam nec velit a odio porta efficitur nec at magna.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
