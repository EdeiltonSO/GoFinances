import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  text-align: center;
  width: 100%;
  margin-top: 30px;

  h1 {
    font-size: 70px;
    color: rgba(0, 0, 0, 0.1);
    user-select: none;
  }

  p {
    font-size: 28px;
    color: #666;
    a {
      text-decoration: none;
      color: #5636d3;
      transition: color 0.2s;

      &:hover {
        color: #ff872c;
      }
    }
  }
`;
