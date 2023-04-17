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
  {
    id: "3",
    title: "Tiger Pride",
    post: "You cannot escape a Tiger",
  },
];

const Blog = (props: { data: IBlogData }) => {
  const router = useRouter();
  const { id } = router.query;

  return <div><p>Blog: {id}</p>
    <div>Blog Title: {JSON.stringify(props.data)}</div></div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = BLOG_LIST.map((blog) => ({
    params: { id: blog.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Pass post data to the page via props
  const currPostId = params ? params.id : 0;
  const currPost = BLOG_LIST.filter(item => item.id === currPostId)[0];
  

  return { props: { data: currPost } };
};

export default Blog;
