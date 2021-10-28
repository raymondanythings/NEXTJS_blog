/* eslint-disable react/no-unescaped-entities */
import PageLayout from "components/PageLayout";
import { getBlogBySlug, getAllBlogs } from "lib/api";
import { Row, Col } from "react-bootstrap";
import { urlFor } from "lib/api";
import BlogHeader from "components/BlogHeader";
import BlogContent from "components/BlogContent";

const BlogDetail = ({ blog }) => {
  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            author={blog.author}
            date={blog.date}
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={urlFor(blog.coverImage).height(800).url()}
          />
          <hr />
          <BlogContent content={blog.content} />
        </Col>
      </Row>
    </PageLayout>
  );
};

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map((blog) => ({ params: { slug: blog.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export default BlogDetail;
