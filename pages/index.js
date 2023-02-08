import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className={"my-4"}>
          Hello 👋 I’m Kacper 👨‍
          <br /> I’m a Full-Stack Web Developer 🖥️
        </p>
        <p>
          You can contact me on{" "}
          <span style={{ color: "#0070f3" }}>Twitter</span> or visit my{" "}
          <span style={{ color: "#0070f3" }}>Linkedin</span> and{" "}
          <span style={{ color: "#0070f3" }}>GitHub</span>
        </p>
        <p className={"text-blue-500 cursor-pointer"}>
          👉 Expand more information 👈
        </p>
        <br />
        <br />
        <br />
        <br />
        <Link
          href="/posts/first-post"
          className={
            "text-blue-500 visited:text-purple-500 underline underline-offset-8 decoration-2 decoration-wavy"
          }
        >
          My first post and here is its title
        </Link>
      </section>
    </Layout>
  );
}
