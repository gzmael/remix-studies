import type { Types } from "../../";
import { RepositoryItem } from "../RepositoryItem";

export interface GithubContainerProps {
  user: Types.User;
  repos: Types.Repositories.Repo[];
}

export function Repositories ({ user, repos }: GithubContainerProps) {
  return (
    <ul
      className="relative z-0 divide-y divide-gray-200 border-b border-gray-200"
    >
      {repos.map((repo) => (
        <RepositoryItem repo={repo} user={user} key={repo.id}/>
      ))}
    </ul>
  );
}