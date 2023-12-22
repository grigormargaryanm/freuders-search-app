import styled from 'styled-components'
export const ButtonStyle = styled.button`
  height: 52px;
  width: 100%;
  background: #ff006b;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  font-weight: 700;

  &&:hover {
    opacity: 0.8;
  }

  @media (max-width: 1200px) {
    font-size: 16px;
    height: 48px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    height: 40px;
  }
`
