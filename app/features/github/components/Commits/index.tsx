import { niceDate } from '~/util'
import type { Types } from '../../'


interface CommitsProps  {
  commits: Types.Commits.Commit[]
}

export default function CommitsList ({ commits }: CommitsProps) {
  
  return (
    <ul className="divide-y divide-gray-200">
      {commits.map((commit) => (
        <li key={commit.sha} className="py-4">
          <a href={commit.html_url} target="_blank" rel="noreferrer">
            <div className="flex space-x-3">
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{commit.author}</h3>
                  <p className="text-xs text-gray-400">{niceDate(commit.date)}</p>
                </div>
                <p className="text-sm text-gray-500">
                  {commit.message}
                </p>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}