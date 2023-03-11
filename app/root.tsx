import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { ParallaxProvider } from 'react-scroll-parallax';

import tailwindStylesheetUrl from "./styles/tailwind.css";
import fonts from "./styles/fonts.css"
import shared from "./styles/shared.css"
import { getUser } from "./session.server";
import Navbar from "./shared/components/Navbar";

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: tailwindStylesheetUrl }, { rel: "stylesheet", href: fonts }];
// };

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }, { rel: "stylesheet", href: fonts }, { rel: 'stylesheet', href: shared }];
};


export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  return (
    <html lang="en" className="h-full font-doulous">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full box-border">
        <ParallaxProvider>
          <Navbar />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ParallaxProvider>
      </body>
    </html>
  );
}
