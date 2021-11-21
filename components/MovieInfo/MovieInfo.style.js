import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ backdrop }) => (backdrop ? `url(${backdrop})` : '#000')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // position: relative;
  height: 100%;
  @media (min-width: 720px) {
    height: 100vh;
  }
  max-height: 100%;
  width: 100%;
  padding: 20px 40px;
`;
export const Content = styled.div`
  display: flex;
  justify-self: start;
  background-color: var(--medGrey);
  opacity: 0.9;
  border-radius: 13px;
  pointer-events: none;
  margin: 0 auto;
  justify-items: left;
  > :first-child {
    max-height: 70vh;
    height: 40%;
    /* max-width: 50vw;
    width: 40%; */
    align-self: center;
  }

  border-radius: 13px;
  @media (max-width: 720px) {
    flex-direction: column-reverse;
    margin-right: none;
    > :first-child {
      /* display: none; */
    }
  }
`;
export const Text = styled.div`
  max-width: var(--maxWidth);
  font-size: var(--fontSmall);
  width: 100%;
  color: var(--white);
  margin-left: 20px;
  margin-right: 20px;
  @media (min-width: 720px) {
    margin-left: none;
    margin-right: none;
    padding: 0 10px;
    font-size: var(--fontMedium);
  }

  @media (min-width: 1280px) {
    margin-left: none;
    margin-right: none;
    padding: 0 10px;
    font-size: var(--fontBig);
  }
  @media (min-width: 1600px) {
    p,
    h3,
    h4 {
      font-size: 1vh;
    }
  }
  .score {
    display: block;
    margin-right: 15px;
    text-align: justify;
    padding: 7px;
    border-radius: 50%;
    background-color: var(--darkGrey);
    font-weight: 800;
    width: 35px;
    height: 35px;
    @media (min-width: 720px) {
      width: 38px;
      height: 38px;
    }
    @media (min-width: 1280px) {
      width: 45px;
      height: 45px;
    }
  }
  .score_and_total {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .directors div {
    display: flex;
    flex-direction: row;
    p {
      margin-right: 20px;
    }
  }
`;
