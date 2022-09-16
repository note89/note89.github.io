import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { toSelfUrl } from "../lib/selfUrl"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  const Frame = () => (
    <iframe
      src={toSelfUrl("/next-course-iframe/?mode=base")}
      width="100%"
      frameborder="0"
      scrolling="no"
      className="h-80 sm:h-56"
    />
  )

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline" style={{ fontSize: "var(--fontSize-8)" }}>
            {post.frontmatter.title}
          </h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <Frame />
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
          <Frame />
        </footer>
      </article>
      <nav className="blog-post-nav bg-yellow-500 p-4 border border-solid border-yellow-400 border-4">
        <ul
          className="bold"
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            alignItems: `center`,
            listStyle: `none`,
            padding: 0,
            gap: "1rem",
          }}
        >
          <li className="m-0">
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li className="m-0">
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
