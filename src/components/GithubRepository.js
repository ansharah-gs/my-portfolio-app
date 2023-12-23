import React from "react";
import { useState, useEffect } from "react";
export default function GithubRepository() {
  const [githubData, setGithubData] = useState([]);
  const [githubUser, setGithubUser] = useState("ansharah-gs");

  const fetchData = async () => {
    const response = await fetch(`https://api.github.com/users/${githubUser}`, {
      method: "GET",
    });

    const userData = await response.json();
    // setGithubData(json);
    return userData;
  };
  const fetchRepositories = async () => {
    const userData = await fetchData();
    const response = await fetch(userData.repos_url);
    const reposData = await response.json();
    console.log(reposData);
    return reposData;
  };

  useEffect(() => {
    fetchRepositories()
      .then((repos) => {
        setGithubData(repos);
      })
      .catch((err) => {
        console.error("error fetching repositories", err);
      });
    // debugger;
  }, []);
  return (
    <div className="color mt-3">
      <div className="col-md-12 mb-4">
        <div className="card">
          <div className="card-body mb-3">
            <h2 className="card-title text-uppercase">
              My GitHub Repositories
            </h2>
            <ul className="row mt-3 mb-2">
              {githubData.map((repo) => (
                <li key={repo.id} className="col-md-5">
                  <a
                    href={repo.html_url}
                    className="text-capitalize"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {repo.name}
                  </a>
                  {repo.language ? (
                    <p>Languages Used: {repo.language}</p>
                  ) : (
                    <p> </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
