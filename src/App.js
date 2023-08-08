import "./App.css";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import EducationCard from "./components/EducationCard";
import GithubRepository from "./components/GithubRepository";
import TechnologySummaryCard from "./components/TechnologySummaryCard";
// import DarkMode from "./components/DarkMode";

// import { useContext } from'react';
//  import { ThemeContext, ThemeProvider } from './components/ThemeContext';
// import { Helmet } from 'react-helmet';

const App = () => {
  const myStyle = {
    width: "150px",
    height: "150px",
  };

  // const { theme, toggleTheme } = useContext(ThemeContext);
  // console.log(ThemeContext);
  return (
    <>
      {/* <DarkMode> */}
      {/* <Helmet>
        <title>My To Do List</title>
      
        <body className="dark-mode" />
      </Helmet> */}
      {/* <ThemeProvider> */}
      {/* <body className={theme == 'light' ? 'light' : 'dark'}/> */}
      <div>
        <Header />
        <main className="container">
          <div className="row mt-3">
            <WorkExperience />
            <EducationCard />
            
          </div>
          <TechnologySummaryCard />
          <GithubRepository />
        </main>
      </div>
      {/* </ThemeProvider> */}
      {/* </DarkMode> */}
    </>
  );
};

export default App;
