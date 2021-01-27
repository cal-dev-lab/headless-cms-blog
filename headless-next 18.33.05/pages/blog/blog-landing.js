import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

//Core
import useSWR from 'swr'

//Styles
import styles from '../../styles/Home.module.css';
import blogStyles from '../../styles/Blog.module.css';

//SWR Settings
const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function blogListing() {
   const { data } = useSWR('../api/blog', fetcher);
   console.log(data);
   // isValidating
   // console.log(data?.properties.edges);
   // if (error) return  <div> Error Loading Data...</div>
   if (!data) return  <div>
     <h3>LOADING...</h3>
   </div>

   return (
      <section className="content">
         <div className="flex-content-block">
            {data?.posts.edges.map(({ node }, index) => {
               return (
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
               )
            })}
         </div>
      </section>
   )
}