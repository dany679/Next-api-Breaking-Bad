import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  min-height: 100%;
  background-color: var(--medGrey);
  color: var(--white);
  a {
    text-decoration: none;
    color: var(--white);
  }
  font-size: var(--fontSmall);
  align-items: center;
  padding: 10px 0;
  padding: 0 20px;
  @media (min-width: 720px) {
    font-size: var(--fontMedium);
    height: 45px;
  }
`;
