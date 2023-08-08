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
    <div className="row mt-3">
      <div className="col-md mb-5">
        <div className="card">
          <ul className="card-body">
            <h2 className="card-title">My GitHub Repositories</h2>
            <ul className="list-unstyled">
              <li>
                <ul>
                  {githubData.map((repo) => (
                    <li key={repo.id}>
                      <a href={repo.html_url} target="_blank">
                        {repo.name}
                      </a>
                      <p>Languages Used: {repo.language}</p>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
