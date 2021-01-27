import Head from 'next/head';
import Link from 'next/link';

//data 
import { getAllPosts } from '../../lib/api';

//styles
import styles from '../../styles/Home.module.css';
import blogStyles from '../../styles/Blog.module.css';

const Blog = ({ allPosts: { edges } }) => (
    <div className={styles.container}>
      <Head>
        <title>Blog Articles</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
  
      <main className={styles.main}>
        <h1 className={styles.title}>Latest Blog Articles</h1>
        
        <section>
          {edges.map(({ node }) => (
            <div className={blogStyles.listitem} key={node.id}>
              <div className={blogStyles.listitem__thumbnail}>
                <figure>
                  <img
                    src={node.extraPostInfo.thumbImage.mediaItemUrl} //.mediaItemUrl error fixed in api.js
                    alt={node.title}
                  />
                </figure>
              </div>
              <div className={blogStyles.listitem__content}>
                <Link href={`/blog/${node.slug}`}>
                <a><h2>{node.title}</h2></a>
                </Link>
                <p>{node.extraPostInfo.authorExcerpt}</p>
                <Link href={`/blog/${node.slug}`}>
                  <a>Read more ></a>
                </Link>
              </div>
              
            </div>
          ))}
        </section>
        <div className={blogStyles.p}>
            <p>
                Return to Home{' '}
                    <Link href='/'>
                        <a>></a>
                    </Link>
            </p>
              </div>
      </main>
    </div>
  );

  export default Blog

  export async function getStaticProps() {
    const allPosts = await getAllPosts();
    return {
      props: {
        allPosts
      }
    };
  }