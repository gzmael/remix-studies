import invariant from "tiny-invariant";
import type { Repositories, User, Commits } from "./Github.types";
import { pick } from "lodash";

const config = {
  headers: {
    "Content-Type": "application/cnd.github.v3+json",
    Authorization: "token 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"
  }
}

export const getUser = async (username?: string) => {
  invariant(username, "Username param is required");
  
  const res = await fetch(`https://api.github.com/users/${username}`, config);

  // sanitization
  return pick((await res.json() as User), ['avatar_url', 'bio', 'html_url', 'login']);
}

export const getRepos = async (username?: string) => {
  invariant(username, "Username param is required");
  
  const res = await fetch(`https://api.github.com/users/${username}/repos`, config);

  // sanitization
  const repos = await res.json() as Repositories.Repo[];
  // return repos;
  return repos.map(
    (repo) => 
      pick(repo, ['full_name', 'html_url', 'id', 'language', 'name', 'stargazers_count'])
    )
}

export const getCommits = async (username?: string, reponame?: string) => {
  invariant(reponame, "Please provide an repository name as a string");
  invariant(username, "Please provide an username name as a string");

  const res = await fetch(
    `https://api.github.com/repos/${username}/${reponame}/commits`,
    config
  );

  const commits = await res.json() as Commits.ApiResponse[];
  
  return commits.map(
    (commit) => ({
      url: commit.url,
      html_url: commit.html_url,
      sha: commit.sha,
      author: commit.commit.author.name,
      date: commit.commit.author.date,
      message: commit.commit.message
    })
  );

};