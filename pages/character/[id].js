// // pages/[id].js
// import Axios from 'axios';
// import { useRouter } from 'next/router';

// // router is required for fallback: true
// const Post = ({ post }) => {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1 style={{ color: 'black' }}>Post page</h1>
//       <h2>{post[0].title}</h2>
//       <p>{post[0].name}</p>
//     </div>
//   );
// };

// export default Post;
// export const BASE_URL = 'https://breakingbadapi.com/api/characters';

// export const getStaticProps = async ({ params }) => {
//   const { data } = await Axios.get(
//     `${'https://breakingbadapi.com/api/characters'}/${params.id}`,
//   );
//   const post = data;
//   return {
//     props: {
//       post,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const { data } = await Axios.get('https://breakingbadapi.com/api/characters/');
//   const posts = data.slice(0, 10);
//   console.log(posts);
//   const paths = posts.map((post) => ({
//     //   console.log(post)
//     params: { id: char_id },
//   }));
//   return {
//     paths,
//     fallback: true,
//   };
// };
