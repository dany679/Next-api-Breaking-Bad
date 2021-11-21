import { Wrapper } from './BreadCrumb.style';
// verify props
import PropTypes from 'prop-types';
//next
import Link from 'next/link';

const BreadCrumb = ({ title }) => {
  return (
    <Wrapper>
      <Link
        href={{
          pathname: '/',
        }}
      >
        <a>
          <span>Home &nbsp;</span>
          <span> | {title}</span>
        </a>
      </Link>
    </Wrapper>
  );
};
BreadCrumb.prototype = {
  title: PropTypes.string,
};
export default BreadCrumb;
