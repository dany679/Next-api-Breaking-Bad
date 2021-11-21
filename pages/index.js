import Axios from 'axios';
import Link from 'next/link';
// import { BASE_URL } from "../api";
import Grid from '../components/Grid/Grid';
import ActorsBox from '../components/ActorsBox/ActorsBox';
import SearchBar from '../components/SearchBar/SearchBar';
import Thumb from '../components/Thumb/Thumb';
import { GlobalStyle } from '../GlobalStyle';
import { useState } from 'react';
import Image from 'next/image';
import { Wrapper } from './index.style';

export const Index = (props) => {
  const [name, setName] = useState('');
  const characters = props.data;
  console.log(props);
  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}}`;
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Breaking Bad Api</h1>
        <SearchBar setSearchTerm={setName} />
        <Grid header='actor' color={'#353535'}>
          {characters.map((character) => (
            <ActorsBox
              key={character?.char_id}
              characterId={character?.char_id}
              alt={character?.title}
              name={character?.name}
              nickname={character?.nickname}
              occupation={character?.occupation}
              seasons={character?.appearance}
              seasonBcs={character?.better_call_saul_appearance}
              live={character?.status}
              clickable={character?.char_id ? true : false}
              src={character?.img && `${character?.img}`}
            ></ActorsBox>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

export const getServerSideProps = async ({ params, query }) => {
  console.log('DADOS');
  console.log(query.name, 'query name');
  const name = query.name ? query.name : '';
  const { data } = await Axios.get(
    `https://breakingbadapi.com/api/characters?name=${name}`,
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: data },
  };
};
