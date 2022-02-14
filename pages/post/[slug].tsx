type PostProps = {
  title: string;
  body: any;
};

export const Post = ({ title, body }: PostProps) => {
  console.log(title, body);
  return <p>this is post</p>;
};

export const getServerSideProps = async (pageContext: any) => {
  const pageSlug = pageContext.query.slug;
  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}"]`
  );
  const url = `https://ucdj87yh.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return { props: { body: post.body, title: post.title } };
  }
};

export default Post;
