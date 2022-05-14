import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Types } from "~/features/github";
import { Api } from "~/features/github";
import CommitsList from "~/features/github/components/Commits";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Github Repos",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ params }) => {
  return {
    commits: await Api.getCommits(params.username, params.reponame)
  }
}

export function ErrorBoundary() {
  return (
    <div>
      <h1>Woops Repo.tsx! 💣</h1>
    </div>
  );
}


export default function () {
  const { commits } = useLoaderData<Types.Commits.LoaderCommitsData>();
  return (
    <div className="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
          
    <div className="pl-6 lg:w-80">
      <div className="pt-6 pb-2">
        <h2 className="text-sm font-semibold">Activity</h2>
      </div>
      <div>
        {commits && <CommitsList commits={commits} />}
        <div className="py-4 text-sm border-t border-gray-200">
          <button
            className="text-indigo-600 font-semibold hover:text-indigo-900"
          >
            View all activity <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}