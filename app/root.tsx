import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Sidebar from './nav';
import globalStylesHref from './style/global.css';
import rootStylesHref from './style/root.css';
import sidebarStylesHref from './style/sidebar.css';
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesHref},
  { rel: "stylesheet", href: sidebarStylesHref},
  { rel: "stylesheet", href: rootStylesHref},
]


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="root" className="container-row">
          <aside id="menu" className="section">
            <h1>Menu Section</h1>
            <Sidebar />
          </aside>
          <div id="content" className="container">
            <header className="section">         
              <h1 className="section-text">
                 Header
              </h1>
            </header>
            <main id="outlet" className="section">
              {children}
            </main>  
            <footer className="section">
              <h1 className="section-text">
                Footer
              </h1>
            </footer>
          </div>  
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
