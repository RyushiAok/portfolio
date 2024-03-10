import { grayDark, whiteA } from "@radix-ui/colors";
import { Box, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Header } from "~/ui/header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Theme
          appearance="dark"
          style={{
            backgroundColor: grayDark.gray2,
            color: whiteA.whiteA9,
            lineHeight: 1.6,
          }}
        >
          <Header />
          <Box py={"6"} />
          {children}
        </Theme>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
