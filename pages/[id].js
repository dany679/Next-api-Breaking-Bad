// pages/[id].js
import Axios from 'axios';
import { useRouter } from 'next/router';
import { BASE_URL } from '../api';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import { GlobalStyle } from '../GlobalStyle';
import Wrapper from './index.style';
// router is required for fallback: true
const Post = ({ character }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <BreadCrumb title={character.category} />
      <MovieInfo character={character} backdropImg={character.img} />
    </Wrapper>
  );
};

export default Post;

export const getStaticProps = async ({ params }) => {
  const { data } = await Axios.get(`${BASE_URL}/${params.id}`);
  const character = data[0];
  console.log('character', character);
  return {
    props: {
      character,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await Axios.get(`${BASE_URL}`);
  const characters = data.slice(0, 10);
  const paths = characters.map((character) => ({
    params: {
      key: character.char_id,
      id: character.char_id.toString(),
    },
  }));
  return {
    paths: paths,
    fallback: true,
  };
};
