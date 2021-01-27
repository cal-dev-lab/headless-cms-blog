const API_URL = process.env.WP_API_URL;

// http://localhost:3000/api/post-types/property/properties

export default async (req, res) => {
   const QUERY_BLOGS = `
   query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
        edges {
          node {
            id
            date
            title
            slug
            extraPostInfo {
              authorExcerpt
              thumbImage {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
   `;
   const data = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         query: QUERY_BLOGS,
      }),
   })

   const json = await data.json();
   // console.log(json)
   res.json(json.data);

   // return data
}