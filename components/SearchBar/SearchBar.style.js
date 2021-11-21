import styled from 'styled-components';

export const IMG = styled.div`
  position: relative;
  right: 50px;
`;
export const Wrapper = styled.div`
  a {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: 'row';
  }

  display: flex;
  /* flex-direction: column; */
  background-color: var(--darkGrey);
  height: 50px;
  @media (min-width: 720px) {
    height: 80px;
  }
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  img {
    width: 30px;
    margin-right: 10px;
  }
`;
export const Content = styled.div`
  /* display: flex; */
  justify-self: center;
  height: 50%;
  width: 100%;

  input {
    margin-left: 5px;
    height: 100%;
    width: 100%;
    border-radius: 13px;
    font-size: var(--fontSmall);
    @media (min-width: 720px) {
      font-size: var(--fontMedium);
    }
    background-color: var(--medGrey);
    :focus {
      outline: none;
    }
    color: var(--white);
  }
`;
