import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useThemeContext } from "../context";

const name = "Kacper Sałek";
export const siteTitle = "Personal Blog";

export default function Layout({ children, home }) {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";
  return (
    <div className={`bg-white text-black h-screen ${isDark && "dark"}`}>
      <div className={"dark:bg-black dark:text-white h-screen"}>
        <div className={"w-1/2 my-auto mx-auto"}>
          <div className={"top-0 absolute right-0 p-10"}>
            <ThemeSwitch />
          </div>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="description"
              content="Learn how to build a personal website using Next.js"
            />
            <meta
              property="og:image"
              content={`https://og-image.vercel.app/${encodeURI(
                siteTitle
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>
          <header className={"pt-20"}>
            {home ? (
              <>
                <Image
                  priority
                  src="/images/profile.jpeg"
                  className={
                    "border-2 border-blue-500 rounded-lg shadow-lg dark:border-white "
                  }
                  height={140}
                  width={140}
                  alt={name}
                />
              </>
            ) : (
              <>
                <Link href="/">
                  <Image
                    priority
                    src="/images/profile.jpeg"
                    className={"border rounded-full mb-4"}
                    height={125}
                    width={125}
                    alt={name}
                  />
                </Link>
              </>
            )}
          </header>
          <main>{children}</main>
          {!home && (
            <div className={"mt-5"}>
              <Link
                href="/"
                className={
                  "text-blue-500 visited:text-purple-500 hover:underline hover:underline-offset-4 hover:decoration-wavy"
                }
              >
                ← Back to home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
