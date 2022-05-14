import type { LoaderFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Admin",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ params }) => {
  return {}
}

/* export const action: ActionFunction = async ({
  request,
}) => {
  switch (request.method) {
    case "POST": {
    }
    case "PUT": {
    }
    case "PATCH": {
    }
    case "DELETE": {
    }
  } 
  return {}
}; */

export function ErrorBoundary() {
  return (
    <div>
      <h1>Woops! 💣</h1>
    </div>
  );
}

export default function () {
  // const { user } = useLoaderData();
  return (
    <h1>Hi</h1>
  )
}