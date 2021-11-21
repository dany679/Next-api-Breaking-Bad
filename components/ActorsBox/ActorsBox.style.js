import styled from 'styled-components';

export const Text = styled.div`
  margin-left: 4px;
`;
export const Wrapper = styled.div`
  a {
    display: block;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    width: 250px;
    height: 400px;
  }
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  display: block;
  h3,
  /* a, */
  p {
    margin: 10px 0 0 0;
  }
  // padding-top: 10px;
  // border-radius: 13px;
  background-color: var(--darkGrey);
  color: var(--white);
`;
export const Image = styled.img`
  width: 100%;
  height: 80%;
  max-width: 100%;
  //max-width: 40vh;
  object-fit: cover;
  //border-radius: 13px;
`;
