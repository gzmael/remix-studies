export interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
}

export namespace Repositories {

  export interface Repo {
    id: number;
    name: string;
    full_name: string;
    stargazers_count: number;
    html_url: string;
    language: string;
  }
  
  export interface LoaderData {
    user: User;
    repos: Repo[];
  }
  
}

export namespace Commits {
  export interface ApiResponse {
    url: string;
    html_url: string;
    sha: string;
    commit: {
      author: {
        name: string;
        date: string;
      };
      message: string;
    }
  }

  export interface Commit {
    url: string;
    html_url: string;
    sha: string;
    author: string;
    date: string;
    message: string;
  }

  export interface LoaderCommitsData {
    commits: Commit[];
  }
}