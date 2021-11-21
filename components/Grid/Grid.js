import { Content, Wrapper } from './Grid.style';
// verify props
import PropTypes from 'prop-types';

const Grid = ({ header, children, color }) => {
  return (
    <Wrapper color={color}>
      <h2>{header}</h2>
      <Content> {children}</Content>
    </Wrapper>
  );
};
Grid.propTypes = {
  header: PropTypes.string,
  color: PropTypes.string,
};
export default Grid;
