import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import styles from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <div>
        <h1>There was an error</h1>
        <p>{error.message}</p>
        <hr />
        <p>jhdjksahdkjahdkjahdjkahdjksahjk</p>
        <p>
          Hey, developer, you should replace this with what you want your
          to see.
        </p>
      </div>
    </Document>
  )
}

export function CatchBoundary() {
  const caught = useCatch();
  let message;

  switch(caught.status) {
    case 401: 
      message = "Oops! You do not have access to this page."; 
    break;
    case 404: 
      message = "Oops! This page no exists."; 
    break;
    default: 
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <h1>
        {caught.status} {caught.statusText}
      </h1>
      <p>{message}</p>
    </Document>
  );
}

function Document({ children, title }: { children: React.ReactNode, title?: string }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}