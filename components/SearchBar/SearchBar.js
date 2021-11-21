//style
import { Wrapper, Content, IMG } from './SearchBar.style';
//icon
import searchIcon from '../../images/search-icon.svg';
// import searchIcon from '../../images/no_image.png';
//verify props
import PropTypes from 'prop-types';
//hooks
import { useEffect, useRef, useState } from 'react';
import { getServerSideProps } from '../../pages';
import Link from 'next/link';
import Image from 'next/image';
const SearchBar = ({ setSearchTerm }) => {
  const [type, setType] = useState('');
  const first = useRef(true);
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const timer = setTimeout(() => {
      if (type !== '') setSearchTerm(type);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [setSearchTerm, type]);
  return (
    <Wrapper>
      <Content>
        <Link href={{ pathname: '/', query: { name: type } }}>
          <a>
            <input
              type='text'
              placeholder='click to search'
              onChange={(e) => setType(e.currentTarget.value)}
              value={type}
            ></input>
            <IMG>
              <Image
                loader={myLoader}
                width={'25%'}
                height={'25%'}
                src={searchIcon}
                alt='search icon'
              />
            </IMG>
          </a>
        </Link>
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  // setSearchTerm: PropTypes.func,
};
export default SearchBar;
