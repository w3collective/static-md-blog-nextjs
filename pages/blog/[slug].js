import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Head from "next/head";
import Layout from "/components/Layout";

export default function Post({
  frontmatter: { title, published, teaser },
  content,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={teaser} />
      </Head>
      <Layout>
        <h1>{title}</h1>
        <p>{published}</p>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdown = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");
  const { data: frontmatter, content } = matter(markdown);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
