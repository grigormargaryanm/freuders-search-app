import styled from 'styled-components'
export const PageWrapper = styled.div`
  padding: 0 48px;
  margin: 52px 0 80px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    max-width: 1096px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 36px;
  }
  @media (max-width: 992px) {
    margin: 36px 0 68px 0;
  }

  @media (max-width: 768px) {
    padding: 16px 16px 40px 16px;
    margin: 0;
  }
`

export const ButtonWrapper = styled.div`
  button {
    width: 312px;
    margin-bottom: 80px;
  }
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    button {
      width: 200px;
      margin-bottom: 16px;
    }
  }
`
export const SpecialistWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px 20px;
  margin-top: 48px;
  margin-bottom: 40px;

  @media (max-width: 992px) {
    margin-bottom: 36px;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    margin-top: 28px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 28px 12px;
  }

  @media (max-width: 568px) {
    margin-top: 8px;
    margin-bottom: 32px;
    grid-gap: 16px 8px;
  }
`
