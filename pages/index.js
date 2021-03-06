import Head from "next/head";
import { PostCard, Categories, PostWidget,Header, } from "../components/index";
const posts = [
  { title: "react testing", excerpt: "react blog testing" },
  { title: "react testing", excerpt: "react blog testing" },
  { title: "react testing", excerpt: "react blog testing" },
];
export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>dev blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <Categories />
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
