import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import moment from "moment";

export default function Home({ allPostsData }) {
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
      </section>
      <section>
        <h2 className={"mt-14 text-3xl"}>Posts</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className={"py-2"}>
              <Link
                href={`/posts/${id}`}
                className={
                  "text-blue-500 visited:text-purple-500 hover:underline hover:underline-offset-4 hover:decoration-wavy"
                }
              >
                {title}
              </Link>
              <br />
              <span className={"italic text-gray-600"}>{date}</span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
