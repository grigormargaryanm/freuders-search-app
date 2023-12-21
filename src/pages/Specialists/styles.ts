import styled from 'styled-components'
export const PageWrapper = styled.div`
  padding: 0 48px;
  margin: 52px 0 80px 0;
  height: 100%;
  @media (min-width: 1200px) {
    max-width: 1096px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 768px) {
    padding: 16px;
    margin: 0;
  }
`

export const ButtonWrapper = styled.div`
  button {
    width: 312px;
  }
  display: flex;
  justify-content: center;
`
export const SpecialistWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px 20px;
  margin-top: 48px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
