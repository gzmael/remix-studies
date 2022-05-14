import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import AccountProfile from "~/components/AccountProfile";
import Navbar from "~/components/Navbar";
import ProjectsList from "~/components/ProjecstList";
import { Api } from "~/features/github";
import type { Repositories } from "~/features/github/Github.types";
import Main from "~/layouts/Main";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Github",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await Api.getUser(params.username),
    repos: await Api.getRepos(params.username),
  }
}

export function ErrorBoundary() {
  return (
    <div>
      <h1>Woops! 💣</h1>
    </div>
  );
}

export default function () {
  const { user, repos } = useLoaderData<Repositories.LoaderData>();
  return (
    <Main>
      <Navbar user={user} />
      <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
      <div className="flex-1 min-w-0 bg-white xl:flex">
        <AccountProfile user={user} repoLength={repos.length} />
        <ProjectsList repos={repos} user={user} />
      </div>
      <Outlet />
      </div>
    </Main>
  )
}
