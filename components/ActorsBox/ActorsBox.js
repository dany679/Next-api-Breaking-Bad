import Link from 'next/link';

//img and img config

import { Wrapper, Text, Image } from './ActorsBox.style';
import NoImage from '../../images/no_image.jpg';
// verify props
import PropTypes from 'prop-types';

const ActorsBox = ({ src, name, character, nickname, characterId }) => {
  return (
    <Wrapper>
      <Link
        href={{
          pathname: '/[id]',
          query: { id: characterId },
        }}
      >
        <a>
          <Image className='img' alt={name} src={src ? src : NoImage} />
          <Text>
            <h3>{name}</h3>
            <p>{nickname}</p>
            <p>{character}</p>
            {/* <Link
          href={{
            pathname: '/[id]',
            query: { id: characterId },
          }}
        >
          <a> More Info ...</a>
        </Link> */}
          </Text>
        </a>
      </Link>
    </Wrapper>
  );
};
ActorsBox.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
export default ActorsBox;

// import Link from 'next/link';

// //img and img config

// import { Wrapper, Text, Image } from './ActorsBox.style';
// import NoImage from '../../images/no_image.jpg';
// // verify props
// import PropTypes from 'prop-types';

// const ActorsBox = ({ src, name, character, nickname, characterId }) => {
//   return (
//     <Wrapper>
//       {/* <Link
//         href={{
//           pathname: '/[id]',
//           query: { id: characterId },
//         }}
//       >
//         <a> */}
//       <Image className='img' alt={name} src={src ? src : NoImage} />
//       <Text>
//         <h3>{name}</h3>
//         <p>{nickname}</p>
//         <p>{character}</p>
//         <Link
//           // href='/[id]'
//           // as='/'
//           href={{
//             pathname: '/[id]',
//             query: { id: characterId },
//           }}
//         >
//           <a> More Info</a>
//         </Link>
//         <p>{character}</p>
//       </Text>
//       <div
//         style={{
//           display: 'flex',
//           // , backgroundColor: 'gray'
//         }}
//       >
//         {/* <Link
//           // href='/[id]'
//           // as='/'
//           href={{
//             pathname: '/[id]',
//             query: { id: characterId },
//           }}
//         >
//           <a> More Info</a>
//         </Link> */}
//       </div>
//     </Wrapper>
//   );
// };
// ActorsBox.propTypes = {
//   src: PropTypes.string,
//   name: PropTypes.string,
//   character: PropTypes.string,
// };
// export default ActorsBox;
