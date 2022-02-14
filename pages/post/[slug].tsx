import styles from "../../styles/Post.module.css";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

type PostProps = {
  title: string;
  body: any;
  image: any;
};

export const Post = ({ title, body, image }: PostProps) => {
  const [imageUrl, setImageUrl] = useState<ImageUrlBuilder>();

  useEffect(() => {
    const imageBuilder = imageUrlBuilder({
      projectId: "ucdj87yh",
      dataset: "production",
    });
    setImageUrl(imageBuilder.image(image));
  }, [image]);

  return (
    <div>
      <div className={styles.main}>
        <h1>{title}</h1>
        {imageUrl && <img className={styles.mainImage} src={imageUrl.url()} />}
      </div>
    </div>
  );
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
    return {
      props: { body: post.body, title: post.title, image: post.mainImage },
    };
  }
};

export default Post;
