import styled from 'styled-components'

export const Loading = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #ff006b;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -25px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`
