import "./App.css";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import EducationCard from "./components/EducationCard";
import GithubRepository from "./components/GithubRepository";
import TechnologySummaryCard from "./components/TechnologySummaryCard";
import Certification from "./components/Certifications";
import TechnicalSkills from "./components/TechnicalSkills";
import PersonalSkills from "./components/PersonalSkills";

const App = () => {
  return (
    <>
      <div className="color container">
        <Header />
        <main className="container color">
          <div className="row mt-2">
            <WorkExperience />
            <div className="col-md-6 color">
              <EducationCard />
              <Certification />
              <TechnicalSkills />
              <PersonalSkills />
              <GithubRepository />
            </div>
          </div>
          {/* <div className="row mt-3">
             <TechnologySummaryCard /> 
            <GithubRepository />
          </div> */}
        </main>
      </div>
    </>
  );
};

export default App;
