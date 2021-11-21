//images and images config

import NoImage from '../../images/no_image.jpg';
import backdropImg from '../../images/backdrop1.jpeg';
//verify props
import PropTypes from 'prop-types';
//components
import Thumb from '../Thumb/Thumb';
//style
import { Content, Wrapper, Text } from './MovieInfo.style';

const MovieInfo = ({ character, backdropImg }) => {
  console.log(character, 'charactercharactercharacter');
  const backdropBB =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2017%2F01%2FBreaking-Bad-Wallpaper-Widescreen.jpg&f=1&nofb=1';
  const backdropBCS =
    'https://elhorror.com.mx/wp-content/uploads/2020/06/1593231236_Better-Call-Saul-temporada-5-Tendra-problemas-para-respirar-despues.jpg';
  return (
    <Wrapper
      backdrop={
        character.category === 'Breaking Bad' ? backdropBB : backdropBCS
      }
    >
      <Content>
        <Thumb
          image={backdropImg ? backdropImg : NoImage}
          clickable={false}
        ></Thumb>

        <Text>
          <h2>{character.name} </h2>
          <span>{character.nickname}</span>
          <p>Status: {character.status}</p>
          <p>Birthday: {character.birthday}</p>

          <TextArrow dados={character?.appearance} key={character.char_id} />
          <TextArrow
            dados={
              character.better_call_saul_appearance.length > 0 &&
              character.better_call_saul_appearance
            }
            pre={
              character.better_call_saul_appearance.length > 0 &&
              'Better Call Saul '
            }
            key={character.char_id}
          />
          <TextArrow
            text='Occupation'
            dados={character.occupation}
            key={character.char_id}
          />
        </Text>
      </Content>
    </Wrapper>
  );
};
MovieInfo.prototype = {
  movie: PropTypes.object,
};
export default MovieInfo;

const TextArrow = ({ dados, text, pre }) =>
  dados.length > 0 && (
    <div className='directors'>
      <h3>
        {pre && pre}
        {`${
          !text ? (dados?.length === 1 && !text ? 'Season' : 'Seasons') : text
        }`}
      </h3>
      <div>
        {dados?.map((dado, idx) => (
          <p key={idx}>
            {dado}
            {text && idx < dados.length - 1 ? ',' : ''}
          </p>
        ))}
      </div>
    </div>
  );
