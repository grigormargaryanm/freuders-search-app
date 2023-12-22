import styled from 'styled-components'

export const FieldsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 36px 80px;

  @media (max-width: 1600px) {
    grid-gap: 36px 48px;
  }

  @media (max-width: 1200px) {
    grid-gap: 28px 36px;
  }

  @media (max-width: 992px) {
    grid-gap: 20px 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 8px;
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: end;
`
export const AgeWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  
  @media (max-width: 568px) {
    justify-content: start;
  }
`
