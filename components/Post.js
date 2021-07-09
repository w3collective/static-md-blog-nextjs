import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="post-teaser">      
      <Link href={`/blog/${post.slug}`}>
        <a><h3>{post.frontmatter.title}</h3></a>
      </Link>
      <img src={post.frontmatter.thumbnail} />
      <p>{post.frontmatter.published}</p>
      <p>{post.frontmatter.teaser}</p>      
      <hr />
    </div>
  );
}
