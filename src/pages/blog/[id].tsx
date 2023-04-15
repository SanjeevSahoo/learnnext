import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

interface IBlogData {
  id: string;
  title: string;
  post: string;
}

const BLOG_LIST: IBlogData[] = [
  {
    id: "1",
    title: "Beautiful Birds",
    post: "Birds are very  beautiful, they migrate",
  },
  {
    id: "2",
    title: "The mighty Lion",
    post: "Lions are the King of the Jungle",
  },
];

const Blog = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Blog: {pid}</p>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = BLOG_LIST.map((blog) => ({
    params: { id: blog.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Pass post data to the page via props
  return { props: { post } };
};

export default Blog;
