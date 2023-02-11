import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import moment from "moment/moment";

export default function Post({ postData }) {
  return (
    <Layout>
      <h1>{postData.title}</h1>
      <span className={"italic text-gray-600"}>
        {moment(postData.date).format("LL")}
      </span>
      <br />
      <div
        className={"mt-5"}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
