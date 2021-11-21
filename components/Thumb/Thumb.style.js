import styled from 'styled-components';

export const Image = styled.img`
  object-fit: contain;
  border-radius: 13px;
  width: 350px; //add global style
  height: 400px; //add global style
  transform: scale(1);
  :hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  // margin: 10 0;
`;
