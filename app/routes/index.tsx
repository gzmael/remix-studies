import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/server-runtime";
import { users } from "~/components/SelectUser"; 

export const loader: LoaderFunction = () =>
  redirect(`/github/${users[1].username}`);
